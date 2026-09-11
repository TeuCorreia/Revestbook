"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { extensaoDeUrl } from "@/data/arquivos";

type VideoPreviewProps = {
  url: string;
  nome: string;
};

export default function VideoPreview({ url, nome }: VideoPreviewProps) {
  const ext = extensaoDeUrl(url).toUpperCase();
  const [telaCheia, setTelaCheia] = useState(false);

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
          <span className="inline-flex shrink-0 items-center rounded-md bg-red-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-red-700">
            {ext || "?"}
          </span>
          <h3 className="min-w-0 truncate text-sm font-bold text-slate-900">
            {nome}
          </h3>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-violet-300 hover:text-violet-700"
          >
            <IconReproduzir />
            Abrir vídeo
          </a>
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
            Baixar (.{ext.toLowerCase()})
          </a>
        </div>
      </div>

      <div className="bg-black">
        <video
          src={url}
          controls
          preload="metadata"
          playsInline
          className="mx-auto max-h-[75vh] w-full"
        />
      </div>

      {telaCheia &&
        createPortal(
          <div className="fixed inset-0 z-[60] flex flex-col bg-slate-950">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-6 py-4">
              <span className="min-w-0 truncate text-sm font-bold text-white">
                {nome}
              </span>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={url}
                  download
                  className="inline-flex items-center rounded-full bg-violet-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-violet-700"
                >
                  Baixar (.{ext.toLowerCase()})
                </a>
                <button
                  type="button"
                  onClick={() => setTelaCheia(false)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/10"
                >
                  <IconFechar />
                  Fechar (Esc)
                </button>
              </div>
            </div>
            <div className="flex min-h-0 flex-1 items-center justify-center bg-black p-4 sm:p-6">
              <video
                src={url}
                controls
                autoPlay
                playsInline
                className="h-full max-h-full w-full object-contain"
              />
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}

function IconReproduzir() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-3.5"
      aria-hidden="true"
    >
      <path d="M8 5.14v14l11-7-11-7z" />
    </svg>
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