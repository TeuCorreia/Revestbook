import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden">
      <Image
        src="/hero-placeholder.svg"
        alt="Ambiente de leitura e livros"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/65" />
      <div className="relative z-10 flex flex-col items-center px-4 text-center text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400 sm:text-base">
          Bem-vindo(a) ao
        </p>
        <h1 className="mt-4 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
          Revest<span className="text-orange-400">book</span>
        </h1>
        <p className="mt-6 max-w-xl text-base text-slate-200 sm:text-lg">
          Tudo o que você precisa em um único ambiente. Explore a plataforma e
          encontre respostas, conteúdos e muito mais.
        </p>
        <Link
          href="/faq"
          className="mt-8 rounded-full bg-linear-to-r from-orange-500 to-violet-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:brightness-110"
        >
          Explorar agora
        </Link>
      </div>
    </section>
  );
}
