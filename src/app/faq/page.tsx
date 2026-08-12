import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Respostas para as perguntas mais frequentes do Revestbook.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero title="FAQ" gradient="from-violet-600 to-orange-500">
        Encontre respostas para as dúvidas mais frequentes sobre o Revestbook.
      </PageHero>
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-center text-slate-500">
          O conteúdo desta página será adicionado em breve.
        </p>
      </section>
    </>
  );
}
