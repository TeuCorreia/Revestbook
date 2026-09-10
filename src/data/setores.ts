export function slugify(texto: string) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");
}

export type SetorItem = {
  nome: string;
  descricao: string;
  gradient: string;
};

export type Setor = {
  slug: string;
  nome: string;
  descricao: string;
  gradient: string;
  itens: SetorItem[];
};

export const setores: Setor[] = [
  {
    slug: "logistica",
    nome: "Logística",
    descricao:
      "Planejamento e controle de estoque, distribuição e processos de entrega.",
    gradient: "from-emerald-500 to-teal-600",
    itens: [
      {
        nome: "Manual de Logística",
        descricao:
          "N/A.",
        gradient: "from-emerald-500 to-teal-600",
      },
      {
        nome: "Pop's",
        descricao:
          "N/A.",
        gradient: "from-teal-500 to-cyan-600",
      },
      {
        nome: "Instituições de Trabalho",
        descricao:
          "N/A.",
        gradient: "from-cyan-500 to-sky-600",
      },
      {
        nome: "Descriçao de Cargos",
        descricao:
          "N/A.",
        gradient: "from-green-500 to-emerald-600",
      },
      {
        nome: "Treinamentos",
        descricao:
          "N/A.",
        gradient: "from-teal-400 to-green-300",
      },
      {
        nome: "Shorts de Instruções",
        descricao:
          "N/A.",
        gradient: "from-sky-300 to-cyan-500",
      },
    ],
  },
  {
    slug: "ti",
    nome: "T.I.",
    descricao:
      "Desenvolvimento, infraestrutura, suporte e segurança da informação.",
    gradient: "from-blue-500 to-indigo-600",
    itens: [
      {
        nome: "N/A",
        descricao:
          "N/A.",
        gradient: "from-blue-500 to-indigo-600",
      },
    ],
  },
  {
    slug: "financeiro",
    nome: "Financeiro",
    descricao:
      "Controle financeiro, orçamentos, fluxo de caixa e relatórios gerenciais.",
    gradient: "from-amber-500 to-orange-600",
    itens: [
      {
        nome: "N/A",
        descricao:
          "N/A.",
        gradient: "from-amber-500 to-orange-600",
      },
    ],
  },
  {
    slug: "rh",
    nome: "RH",
    descricao:
      "Gestão de pessoas, recrutamento, treinamento e clima organizacional.",
    gradient: "from-rose-500 to-pink-600",
    itens: [
      {
        nome: "N/A",
        descricao:
          "N/A.",
        gradient: "from-rose-500 to-pink-600",
      },
    ],
  },
  {
    slug: "fiscal",
    nome: "Fiscal",
    descricao:
      "Cumprimento de obrigações fiscais, tributárias e regulatórias.",
    gradient: "from-violet-500 to-purple-600",
    itens: [
      {
        nome: "N/A",
        descricao:
          "N/A.",
        gradient: "from-violet-500 to-purple-600",
      },
    ],
  },
  {
    slug: "comercial",
    nome: "Comercial",
    descricao:
      "Prospecção, relacionamento com clientes, propostas e fechamento de negócios.",
    gradient: "from-cyan-500 to-blue-600",
    itens: [
      {
        nome: "N/A",
        descricao:
          "N/A.",
        gradient: "from-cyan-500 to-blue-600",
      },
    ],
  },
  {
    slug: "marketing",
    nome: "Marketing",
    descricao:
      "Comunicação da marca, campanhas, conteúdo e presença digital.",
    gradient: "from-fuchsia-500 to-violet-600",
    itens: [
      {
        nome: "N/A",
        descricao:
          "N/A.",
        gradient: "from-fuchsia-500 to-violet-600",
      },
    ],
  },
];