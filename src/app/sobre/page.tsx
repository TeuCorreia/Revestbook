import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça a história e o propósito da RevestBem+.",
};

export default function SobrePage() {
  return (
    <>
      <PageHero title="Sobre" gradient="from-marrom to-marrom-escuro">
        Conheça a história e o propósito da plataforma RevestBem+.
      </PageHero>
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-center text-marrom/60">
          O conteúdo desta página será adicionado em breve.
        </p>
      </section>
    </>
  );
}
