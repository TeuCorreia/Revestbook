const VIDEO_SRC = "/videos/IMG_3637.MOV";

export default function VideoSection() {
  return (
    <section className="border-y border-marrom/10 bg-bege">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-marrom">
            Conheça o ambiente
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-marrom-escuro sm:text-3xl">
            RevestBem<span className="text-ouro">+</span> em ação
          </h2>
          <p className="mt-3 text-marrom/70">
            Veja como a plataforma reúne processos, documentos e informações em
            um único lugar.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border border-marrom/15 bg-marrom-escuro shadow-xl shadow-marrom/20">
          <video
            src={VIDEO_SRC}
            controls
            preload="metadata"
            playsInline
            className="aspect-video w-full bg-black object-contain"
          >
            Seu navegador não consegue reproduzir este vídeo.
          </video>
        </div>

        <p className="mt-4 text-center text-sm text-marrom/70">
          Não consegue reproduzir?{" "}
          <a
            href={VIDEO_SRC}
            download
            className="font-semibold text-marrom underline decoration-ouro underline-offset-4 transition hover:text-marrom-escuro"
          >
            Baixe o vídeo
          </a>
        </p>
      </div>
    </section>
  );
}