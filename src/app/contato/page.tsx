import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a equipe da RevestBem+.",
};

export default function ContatoPage() {
  return (
    <>
      <PageHero title="Contato" gradient="from-marrom to-marrom-escuro">
        Fale com a nossa equipe pelo canal ideal.
      </PageHero>
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-center text-marrom/60">
          O conteúdo desta página será adicionado em breve.
        </p>
      </section>
    </>
  );
}
