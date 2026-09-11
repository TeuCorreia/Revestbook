import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { setores } from "@/data/setores";

export const metadata: Metadata = {
  title: "Setores",
  description:
    "Conheça todos os setores que compõem a estrutura da RevestBem+.",
};

export default function SetoresPage() {
  return (
    <>
      <PageHero
        title="Setores"
        gradient="from-marrom to-marrom-escuro"
      >
        Conheça todos os setores que compõem a estrutura da plataforma
        RevestBem+.
      </PageHero>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {setores.map((setor) => (
            <Link
              key={setor.slug}
              href={`/setores/${setor.slug}`}
              className="group rounded-2xl border border-marrom/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-ouro/60 hover:shadow-md"
            >
              <div
                className={`mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-linear-to-br ${setor.gradient} text-lg font-bold text-white`}
              >
                {setor.nome.charAt(0)}
              </div>
              <h3 className="text-lg font-bold text-marrom-escuro">
                {setor.nome}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-marrom/70">
                {setor.descricao}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}