"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { renderAsync } from "docx-preview";
import { init } from "pptx-preview";
import { extensaoDeUrl } from "@/data/arquivos";

type Previewer = ReturnType<typeof init>;

async function renderizarNoContainer(
  container: HTMLDivElement,
  url: string,
  isPptx: boolean,
): Promise<{ previewer?: Previewer }> {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Falha ao carregar o arquivo.");
  const buffer = await response.arrayBuffer();
  container.innerHTML = "";
  container.style.height = "";

  if (isPptx) {
    const largura = container.clientWidth;
    const temporario = init(container, {
      mode: "slide",
      width: largura,
      height: 480,
    });
    const pptx = await temporario.load(buffer);
    const altura = Math.round(largura * (pptx.height / pptx.width));
    temporario.destroy();
    container.innerHTML = "";
    container.style.height = `${altura}px`;

    const previewer = init(container, {
      mode: "slide",
      width: largura,
      height: altura,
    });
    await previewer.preview(buffer);
    return { previewer };
  }

  await renderAsync(buffer, container, undefined, {
    inWrapper: true,
    ignoreHeight: false,
    breakPages: true,
  });
  return {};
}

type PreviewViewportProps = {
  url: string;
  nome: string;
  telaCheia?: boolean;
};

function PreviewViewport({ url, nome, telaCheia }: PreviewViewportProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const ext = extensaoDeUrl(url);
  const isPptx = ext === "pptx";
  const [status, setStatus] = useState<"carregando" | "ok" | "erro">(
    "carregando",
  );

  useEffect(() => {
    let cancelled = false;
    let previewer: Previewer | null = null;
    let larguraAtual = 0;
    let renderizando = false;

    async function render() {
      const container = containerRef.current;
      if (!container || cancelled || renderizando) return;

      const largura = container.clientWidth;
      if (largura <= 0 || largura === larguraAtual) return;

      larguraAtual = largura;
      renderizando = true;
      setStatus("carregando");

      try {
        const resultado = await renderizarNoContainer(container, url, isPptx);
        if (cancelled) return;
        previewer?.destroy();
        previewer = resultado.previewer ?? null;
        setStatus("ok");
      } catch {
        if (!cancelled) setStatus("erro");
      } finally {
        renderizando = false;
      }
    }

    render();

    const observer = new ResizeObserver(() => {
      const container = containerRef.current;
      if (!container || cancelled) return;
      const largura = container.clientWidth;
      if (largura > 0 && largura !== larguraAtual) render();
    });

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      cancelled = true;
      observer.disconnect();
      previewer?.destroy();
    };
  }, [url, isPptx]);

  return (
    <div className={telaCheia ? "h-full overflow-auto" : ""}>
      {status === "carregando" && (
        <p className="px-6 py-10 text-center text-sm text-slate-400">
          Carregando visualização...
          <span className="sr-only">{nome}</span>
        </p>
      )}
      {status === "erro" && (
        <p className="px-6 py-10 text-center text-sm text-slate-400">
          Não foi possível visualizar este arquivo. Use o botão para baixá-lo.
        </p>
      )}
      <div
        ref={containerRef}
        className={`relative ${
          isPptx
            ? "w-full"
            : telaCheia
              ? "min-h-[60vh] bg-white p-10"
              : "bg-white p-6"
        }`}
        aria-hidden={status !== "ok"}
      />
    </div>
  );
}

type DocumentPreviewProps = {
  url: string;
  nome: string;
};

const coresExtensoes: Record<string, string> = {
  docx: "bg-blue-100 text-blue-700",
  pptx: "bg-orange-100 text-orange-700",
};

export default function DocumentPreview({
  url,
  nome,
}: DocumentPreviewProps) {
  const ext = extensaoDeUrl(url);
  const [telaCheia, setTelaCheia] = useState(false);
  const badgeClasse = coresExtensoes[ext] ?? "bg-slate-100 text-slate-700";

  useEffect(() => {
    if (!telaCheia) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setTelaCheia(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [telaCheia]);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-4 border-b border-slate-100 bg-slate-50 px-6 py-4">
        <div className="flex min-w-0 items-center gap-3">
          <span
            className={`inline-flex shrink-0 items-center rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${badgeClasse}`}
          >
            {ext || "?"}
          </span>
          <h3 className="min-w-0 truncate text-sm font-bold text-slate-900">
            {nome}
          </h3>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => setTelaCheia(true)}
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-violet-300 hover:text-violet-700"
          >
            <IconExpandir />
            Tela cheia
          </button>
          <a
            href={url}
            download
            className="inline-flex items-center rounded-full bg-violet-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-violet-700"
          >
            Baixar (.{ext})
          </a>
        </div>
      </div>

      <PreviewViewport url={url} nome={nome} />

      {telaCheia &&
        createPortal(
          <div className="fixed inset-0 z-[60] flex flex-col bg-slate-950">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-6 py-4">
              <span className="min-w-0 truncate text-sm font-bold text-white">
                {nome}
              </span>
              <button
                type="button"
                onClick={() => setTelaCheia(false)}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/10"
              >
                <IconFechar />
                Fechar (Esc)
              </button>
            </div>
            <div className="min-h-0 flex-1 p-4 sm:p-6">
              <PreviewViewport url={url} nome={nome} telaCheia />
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}

function IconExpandir() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-3.5"
      aria-hidden="true"
    >
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
      <path d="M3 16v3a2 2 0 0 0 2 2h3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </svg>
  );
}

function IconFechar() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-3.5"
      aria-hidden="true"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}