import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import PageHero from "@/components/PageHero";
import DocumentPreview from "@/components/DocumentPreview";
import VideoPreview from "@/components/VideoPreview";
import { ehDocumento, ehVideo } from "@/data/arquivos";
import { setores, slugify } from "@/data/setores";

type ItemPageProps = {
  params: Promise<{ slug: string; item: string }>;
};

type ArquivoInfo = {
  url: string;
  nome: string;
  tipo: "documento" | "video";
  codigo: string;
  categoria: string;
  status: string;
};

type MetaArquivo = {
  codigo?: string;
  categoria?: string;
  status?: string;
};

const STATUS_PADRAO = "Publicado";

function extrairCodigo(nomeArquivo: string): string | null {
  const nomeBase = nomeArquivo
    .replace(/\.(docx|pptx)$/i, "")
    .replace(/\.[^.]+$/i, "");
  const match = nomeBase.match(/^([A-Z0-9]+(?:[_-][A-Z0-9]+)+)/);
  return match ? match[1] : null;
}

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

async function listarArquivos(
  slug: string,
  item: string,
  categoriaPadrao: string,
) {
  const absolutePath = path.join(
    process.cwd(),
    "public",
    "documentos",
    slug,
    item,
  );

  try {
    const arquivos = await readdir(absolutePath);

    let metadados: Record<string, MetaArquivo> = {};
    if (arquivos.includes("_metadados.json")) {
      try {
        const conteúdo = await readFile(
          path.join(absolutePath, "_metadados.json"),
          "utf8",
        );
        metadados = JSON.parse(conteúdo) as Record<string, MetaArquivo>;
      } catch {
        metadados = {};
      }
    }

    const lista: ArquivoInfo[] = [];
    let contador = 0;

    for (const arquivo of arquivos) {
      const url = `/documentos/${slug}/${item}/${encodeURIComponent(arquivo)}`;
      const tipo = ehDocumento(url)
        ? "documento"
        : ehVideo(url)
          ? "video"
          : null;
      if (!tipo) continue;

      contador += 1;
      const meta = metadados[arquivo] ?? {};
      const nome = arquivo
        .replace(/\.(docx|pptx)$/i, "")
        .replace(/\.[^.]+$/i, "");

      lista.push({
        url,
        nome,
        tipo,
        codigo:
          meta.codigo ??
          extrairCodigo(arquivo) ??
          `DOC-${String(contador).padStart(3, "0")}`,
        categoria: meta.categoria ?? categoriaPadrao,
        status: meta.status ?? STATUS_PADRAO,
      });
    }

    return lista;
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

  const arquivos = await listarArquivos(setor.slug, item, setorItem.nome);

  return (
    <>
      <PageHero title={setorItem.nome} gradient="from-marrom to-marrom-escuro">
        {setorItem.descricao}
      </PageHero>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-marrom px-4 py-1.5 text-xs font-semibold text-ouro">
            {setor.nome}
          </span>
        </div>

        {arquivos.length > 0 ? (
          <div className="grid gap-8">
            {arquivos.map((arquivo) =>
              arquivo.tipo === "video" ? (
                <VideoPreview
                  key={arquivo.url}
                  url={arquivo.url}
                  nome={arquivo.nome}
                  codigo={arquivo.codigo}
                  categoria={arquivo.categoria}
                  status={arquivo.status}
                />
              ) : (
                <DocumentPreview
                  key={arquivo.url}
                  url={arquivo.url}
                  nome={arquivo.nome}
                  codigo={arquivo.codigo}
                  categoria={arquivo.categoria}
                  status={arquivo.status}
                />
              ),
            )}
          </div>
        ) : (
          <div className="rounded-2xl border border-marrom/10 bg-white p-8 shadow-sm">
            <p className="text-center text-sm leading-relaxed text-marrom/60">
              Nenhum documento disponível nesta área. O conteúdo será adicionado
              em breve.
            </p>
          </div>
        )}

        <Link
          href={`/setores/${setor.slug}`}
          className="mt-10 inline-flex items-center text-sm font-medium text-marrom transition hover:text-ouro"
        >
          ← Voltar para {setor.nome}
        </Link>
      </section>
    </>
  );
}