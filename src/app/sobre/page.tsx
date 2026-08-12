import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça a história e o propósito do Revestbook.",
};

export default function SobrePage() {
  return (
    <>
      <PageHero title="Sobre" gradient="from-orange-500 to-amber-400">
        Conheça a história e o propósito da plataforma Revestbook.
      </PageHero>
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-center text-slate-500">
          O conteúdo desta página será adicionado em breve.
        </p>
      </section>
    </>
  );
}
