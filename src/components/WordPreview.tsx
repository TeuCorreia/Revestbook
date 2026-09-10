"use client";

import { useEffect, useRef, useState } from "react";
import { renderAsync } from "docx-preview";

type WordPreviewProps = {
  url: string;
  nome: string;
};

export default function WordPreview({ url, nome }: WordPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"carregando" | "ok" | "erro">(
    "carregando",
  );

  useEffect(() => {
    let cancelled = false;

    async function render() {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Falha ao carregar o arquivo.");
        const blob = await response.blob();
        if (cancelled || !containerRef.current) return;
        containerRef.current.innerHTML = "";
        await renderAsync(blob, containerRef.current, undefined, {
          inWrapper: true,
          ignoreHeight: false,
          breakPages: true,
        });
        if (!cancelled) setStatus("ok");
      } catch {
        if (!cancelled) setStatus("erro");
      }
    }

    render();

    return () => {
      cancelled = true;
    };
  }, [url]);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-4 border-b border-slate-100 bg-slate-50 px-6 py-4">
        <h3 className="min-w-0 truncate text-sm font-bold text-slate-900">
          {nome}
        </h3>
        <a
          href={url}
          download
          className="inline-flex shrink-0 items-center rounded-full bg-violet-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-violet-700"
        >
          Baixar arquivo (.docx)
        </a>
      </div>

      {status === "carregando" && (
        <p className="px-6 py-10 text-center text-sm text-slate-500">
          Carregando visualização...
          <span className="sr-only">{nome}</span>
        </p>
      )}

      {status === "erro" && (
        <p className="px-6 py-10 text-center text-sm text-slate-500">
          Não foi possível visualizar este arquivo. Use o botão para baixá-lo.
        </p>
      )}

      <div
        ref={containerRef}
        className="max-h-[70vh] overflow-auto bg-white p-6"
        aria-hidden={status !== "ok"}
      />
    </div>
  );
}