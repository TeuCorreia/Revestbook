import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { setores, slugify } from "@/data/setores";

type SetorPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return setores.map((setor) => ({ slug: setor.slug }));
}

export async function generateMetadata({
  params,
}: SetorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const setor = setores.find((s) => s.slug === slug);

  if (!setor) return { title: "Setor não encontrado" };

  return {
    title: setor.nome,
    description: setor.descricao,
  };
}

export default async function SetorPage({ params }: SetorPageProps) {
  const { slug } = await params;
  const setor = setores.find((s) => s.slug === slug);

  if (!setor) notFound();

  return (
    <>
      <PageHero title={setor.nome} gradient={setor.gradient}>
        {setor.descricao}
      </PageHero>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Link
          href="/setores"
          className="mb-8 inline-flex items-center text-sm font-medium text-violet-600 transition hover:text-violet-800"
        >
          ← Voltar para Setores
        </Link>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {setor.itens.map((item) => (
            <Link
              key={item.nome}
              href={`/setores/${setor.slug}/${slugify(item.nome)}`}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div
                className={`mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-linear-to-br ${item.gradient} text-lg font-bold text-white`}
              >
                {item.nome.charAt(0)}
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {item.nome}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {item.descricao}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}