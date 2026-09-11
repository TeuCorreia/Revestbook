import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Respostas para as perguntas mais frequentes da RevestBem+.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero title="FAQ" gradient="from-marrom to-marrom-escuro">
        Encontre respostas para as dúvidas mais frequentes sobre a plataforma
        RevestBem+.
      </PageHero>
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-center text-marrom/60">
          O conteúdo desta página será adicionado em breve.
        </p>
      </section>
    </>
  );
}
