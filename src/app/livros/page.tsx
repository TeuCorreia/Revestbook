import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Livros",
  description: "Explore a coleção de livros do Revestbook.",
};

export default function LivrosPage() {
  return (
    <>
      <PageHero title="Livros" gradient="from-blue-600 to-violet-600">
        Explore a coleção e os conteúdos disponíveis no Revestbook.
      </PageHero>
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-center text-slate-500">
          O conteúdo desta página será adicionado em breve.
        </p>
      </section>
    </>
  );
}
