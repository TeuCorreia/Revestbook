import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { readdir } from "node:fs/promises";
import path from "node:path";
import PageHero from "@/components/PageHero";
import WordPreview from "@/components/WordPreview";
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

async function listarDocumentos(slug: string, item: string) {
  const absolutePath = path.join(
    process.cwd(),
    "public",
    "documentos",
    slug,
    item,
  );

  try {
    const arquivos = await readdir(absolutePath);
    return arquivos
      .filter((arquivo) => arquivo.toLowerCase().endsWith(".docx"))
      .map((arquivo) => ({
        url: `/documentos/${slug}/${item}/${encodeURIComponent(arquivo)}`,
        nome: arquivo.replace(/\.docx$/i, ""),
      }));
  } catch {
    return [];
  }
}

export default async function ItemPage({ params }: ItemPageProps) {
  const { slug, item } = await params;
  const setor = setores.find((s) => s.slug === slug);
  const setorItem = setor?.itens.find((i) => slugify(i.nome) === item);

  if (!setor) notFound();
  if (!setorItem) notFound();

  const documentos = await listarDocumentos(setor.slug, item);

  return (
    <>
      <PageHero title={setorItem.nome} gradient={setorItem.gradient}>
        {setorItem.descricao}
      </PageHero>
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex items-center rounded-full bg-linear-to-r px-4 py-1.5 text-xs font-semibold text-white ${setor.gradient}`}
          >
            {setor.nome}
          </span>
        </div>

        {documentos.length > 0 ? (
          <div className="grid gap-8">
            {documentos.map((documento) => (
              <WordPreview
                key={documento.url}
                url={documento.url}
                nome={documento.nome}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-center text-sm leading-relaxed text-slate-500">
              Nenhum documento disponível nesta área. O conteúdo será adicionado
              em breve.
            </p>
          </div>
        )}

        <Link
          href={`/setores/${setor.slug}`}
          className="mt-10 inline-flex items-center text-sm font-medium text-violet-600 transition hover:text-violet-800"
        >
          ← Voltar para {setor.nome}
        </Link>
      </section>
    </>
  );
}