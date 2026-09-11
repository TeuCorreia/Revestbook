import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden">
      <Image
        src="/hero-placeholder.svg"
        alt="Ambiente RevestBem+"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-marrom-escuro/80" />
      <div className="relative z-10 flex flex-col items-center px-4 text-center text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-ouro sm:text-base">
          Bem-vindo(a) à plataforma
        </p>
        <h1 className="mt-4 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
          RevestBem
          <span className="text-ouro">+</span>
        </h1>
        <p className="mt-6 max-w-xl text-base text-bege/90 sm:text-lg">
          Conhecimento, processos e pessoas conectados em um único ambiente.
          Explore a plataforma e encontre respostas, conteúdos e muito mais.
        </p>
        <Link
          href="/setores"
          className="mt-8 rounded-full bg-ouro px-8 py-3 text-sm font-semibold text-marrom-escuro shadow-lg shadow-marrom-escuro/30 transition hover:brightness-110"
        >
          Explorar a plataforma
        </Link>
      </div>
    </section>
  );
}