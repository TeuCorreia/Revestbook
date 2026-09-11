export function slugify(texto: string) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
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
    gradient: "from-marrom to-ouro",
    itens: [
      {
        nome: "Manual de Logística",
        descricao:
          "N/A.",
        gradient: "from-marrom to-marrom-escuro",
      },
      {
        nome: "Pop's",
        descricao:
          "N/A.",
        gradient: "from-ouro to-marrom",
      },
      {
        nome: "Instituições de Trabalho",
        descricao:
          "N/A.",
        gradient: "from-marrom-escuro to-marrom",
      },
      {
        nome: "Descriçao de Cargos",
        descricao:
          "N/A.",
        gradient: "from-marrom to-ouro",
      },
      {
        nome: "Treinamentos",
        descricao:
          "N/A.",
        gradient: "from-marrom-escuro to-ouro",
      },
      {
        nome: "Shorts de Instruções",
        descricao:
          "N/A.",
        gradient: "from-marrom to-marrom-escuro",
      },
    ],
  },
  {
    slug: "ti",
    nome: "T.I.",
    descricao:
      "Desenvolvimento, infraestrutura, suporte e segurança da informação.",
    gradient: "from-marrom-escuro to-marrom",
    itens: [
      {
        nome: "N/A",
        descricao:
          "N/A.",
        gradient: "from-marrom-escuro to-marrom",
      },
    ],
  },
  {
    slug: "financeiro",
    nome: "Financeiro",
    descricao:
      "Controle financeiro, orçamentos, fluxo de caixa e relatórios gerenciais.",
    gradient: "from-ouro to-marrom",
    itens: [
      {
        nome: "N/A",
        descricao:
          "N/A.",
        gradient: "from-ouro to-marrom",
      },
    ],
  },
  {
    slug: "rh",
    nome: "RH",
    descricao:
      "Gestão de pessoas, recrutamento, treinamento e clima organizacional.",
    gradient: "from-marrom-escuro to-ouro",
    itens: [
      {
        nome: "N/A",
        descricao:
          "N/A.",
        gradient: "from-marrom-escuro to-ouro",
      },
    ],
  },
  {
    slug: "fiscal",
    nome: "Fiscal",
    descricao:
      "Cumprimento de obrigações fiscais, tributárias e regulatórias.",
    gradient: "from-marrom to-marrom-escuro",
    itens: [
      {
        nome: "N/A",
        descricao:
          "N/A.",
        gradient: "from-marrom to-marrom-escuro",
      },
    ],
  },
  {
    slug: "comercial",
    nome: "Comercial",
    descricao:
      "Prospecção, relacionamento com clientes, propostas e fechamento de negócios.",
    gradient: "from-ouro to-marrom-escuro",
    itens: [
      {
        nome: "N/A",
        descricao:
          "N/A.",
        gradient: "from-ouro to-marrom-escuro",
      },
    ],
  },
  {
    slug: "marketing",
    nome: "Marketing",
    descricao:
      "Comunicação da marca, campanhas, conteúdo e presença digital.",
    gradient: "from-marrom-escuro to-marrom",
    itens: [
      {
        nome: "N/A",
        descricao:
          "N/A.",
        gradient: "from-marrom-escuro to-marrom",
      },
    ],
  },
];