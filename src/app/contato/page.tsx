import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a equipe do Revestbook.",
};

export default function ContatoPage() {
  return (
    <>
      <PageHero title="Contato" gradient="from-violet-500 to-blue-600">
        Fale com a nossa equipe pelo canal ideal.
      </PageHero>
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-center text-slate-500">
          O conteúdo desta página será adicionado em breve.
        </p>
      </section>
    </>
  );
}
