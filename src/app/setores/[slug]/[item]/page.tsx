import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { setores, slugify } from "@/data/setores";

type ItemPageProps = {
  params: Promise<{ slug: string; item: string }>;
};

export function generateStaticParams() {
  return setores.flatMap((setor) =>
    setor.itens.map((item) => ({
      slug: setor.slug,
      item: slugify(item.nome),
    })),
  );
}

export async function generateMetadata({
  params,
}: ItemPageProps): Promise<Metadata> {
  const { slug, item } = await params;
  const setor = setores.find((s) => s.slug === slug);
  const setorItem = setor?.itens.find((i) => slugify(i.nome) === item);

  if (!setorItem) return { title: "Acesso não encontrado" };

  return {
    title: `${setorItem.nome} | ${setor?.nome ?? "Setores"}`,
    description: setorItem.descricao,
  };
}

export default async function ItemPage({ params }: ItemPageProps) {
  const { slug, item } = await params;
  const setor = setores.find((s) => s.slug === slug);
  const setorItem = setor?.itens.find((i) => slugify(i.nome) === item);

  if (!setor) notFound();
  if (!setorItem) notFound();

  return (
    <>
      <PageHero title={setorItem.nome} gradient={setorItem.gradient}>
        {setorItem.descricao}
      </PageHero>
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <span
            className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-white bg-linear-to-r ${setor.gradient}`}
          >
            {setor.nome}
          </span>
          <p className="mt-6 text-sm leading-relaxed text-slate-500">
            O conteúdo desta área será adicionado em breve.
          </p>
          <Link
            href={`/setores/${setor.slug}`}
            className="mt-8 inline-flex items-center text-sm font-medium text-violet-600 transition hover:text-violet-800"
          >
            ← Voltar para {setor.nome}
          </Link>
        </div>
      </section>
    </>
  );
}