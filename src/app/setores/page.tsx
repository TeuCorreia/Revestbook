import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Setores",
  description:
    "Conheça todos os setores que compõem a estrutura do Revestbook.",
};

const setores = [
  {
    nome: "Logística",
    descricao:
      "Planejamento e controle de estoque, distribuição e processos de entrega.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    nome: "T.I.",
    descricao:
      "Desenvolvimento, infraestrutura, suporte e segurança da informação.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    nome: "Financeiro",
    descricao:
      "Controle financeiro, orçamentos, fluxo de caixa e relatórios gerenciais.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    nome: "RH",
    descricao:
      "Gestão de pessoas, recrutamento, treinamento e clima organizacional.",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    nome: "Fiscal",
    descricao:
      "Cumprimento de obrigações fiscais, tributárias e regulatórias.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    nome: "Comercial",
    descricao:
      "Prospecção, relacionamento com clientes, propostas e fechamento de negócios.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    nome: "Marketing",
    descricao:
      "Comunicação da marca, campanhas, conteúdo e presença digital.",
    gradient: "from-fuchsia-500 to-violet-600",
  },
];

export default function SetoresPage() {
  return (
    <>
      <PageHero
        title="Setores"
        gradient="from-orange-500 to-violet-600"
      >
        Conheça todos os setores que compõem a estrutura do Revestbook.
      </PageHero>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {setores.map((setor) => (
            <div
              key={setor.nome}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div
                className={`mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-linear-to-br ${setor.gradient} text-lg font-bold text-white`}
              >
                {setor.nome.charAt(0)}
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {setor.nome}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {setor.descricao}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
