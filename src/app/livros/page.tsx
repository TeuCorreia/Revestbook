import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Livros",
  description: "Explore a coleção de livros da RevestBem+.",
};

export default function LivrosPage() {
  return (
    <>
      <PageHero title="Livros" gradient="from-marrom to-marrom-escuro">
        Explore a coleção e os conteúdos disponíveis na plataforma RevestBem+.
      </PageHero>
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-center text-marrom/60">
          O conteúdo desta página será adicionado em breve.
        </p>
      </section>
    </>
  );
}
