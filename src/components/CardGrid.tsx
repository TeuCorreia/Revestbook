import Link from "next/link";
import type { ReactNode } from "react";
import {
  IconArrowRight,
  IconBadgeCheck,
  IconBook,
  IconClipboard,
  IconDocument,
  IconGraduation,
  IconMail,
  IconQuestion,
  IconSparkles,
  IconUsers,
} from "@/components/icons";

type Card = {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
};

type QuickAccess = {
  label: string;
  href: string;
  icon: ReactNode;
};

const quickAccesses: QuickAccess[] = [
  {
    label: "POPs",
    href: "/setores/logistica/pops",
    icon: <IconDocument className="size-5" />,
  },
  {
    label: "Instruções de Trabalho",
    href: "/setores/logistica/instituicoes-de-trabalho",
    icon: <IconClipboard className="size-5" />,
  },
  {
    label: "5S",
    href: "/setores",
    icon: <IconSparkles className="size-5" />,
  },
  {
    label: "Qualidade",
    href: "/setores",
    icon: <IconBadgeCheck className="size-5" />,
  },
  {
    label: "Treinamentos",
    href: "/setores/logistica/treinamentos",
    icon: <IconGraduation className="size-5" />,
  },
  {
    label: "Nossa Equipe",
    href: "/sobre",
    icon: <IconUsers className="size-5" />,
  },
];

const cards: Card[] = [
  {
    title: "FAQ",
    description: "Respostas para as dúvidas mais frequentes.",
    href: "/faq",
    icon: <IconQuestion className="size-10" />,
  },
  {
    title: "Livros",
    description: "Explore a coleção e os conteúdos disponíveis.",
    href: "/livros",
    icon: <IconBook className="size-10" />,
  },
  {
    title: "Sobre",
    description: "Conheça a história e o propósito da plataforma.",
    href: "/sobre",
    icon: <IconUsers className="size-10" />,
  },
  {
    title: "Contato",
    description: "Fale com a nossa equipe pelo canal ideal.",
    href: "/contato",
    icon: <IconMail className="size-10" />,
  },
];

export default function CardGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <h2 className="text-center text-2xl font-bold tracking-tight text-marrom-escuro sm:text-3xl">
        Explore a plataforma
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-marrom/70">
        Acesse rapidamente as principais áreas e conteúdos da RevestBem+.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {quickAccesses.map((access) => (
          <Link
            key={access.label}
            href={access.href}
            className="group flex items-center gap-2 rounded-full border border-marrom/10 bg-bege px-5 py-2.5 text-sm font-semibold text-marrom-escuro shadow-sm transition hover:border-ouro hover:bg-ouro hover:text-marrom-escuro"
          >
            <span className="text-marrom transition group-hover:text-marrom-escuro">
              {access.icon}
            </span>
            {access.label}
          </Link>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group relative flex min-h-[14rem] flex-col items-center justify-center gap-4 rounded-3xl border border-marrom/10 bg-white p-6 text-center shadow-md shadow-marrom/10 transition duration-300 hover:-translate-y-1 hover:border-ouro/60 hover:shadow-xl hover:shadow-marrom/15"
          >
            <span className="flex size-16 items-center justify-center rounded-2xl bg-bege text-marrom transition group-hover:bg-ouro group-hover:text-marrom-escuro">
              {card.icon}
            </span>
            <div>
              <h3 className="text-xl font-bold text-marrom-escuro">
                {card.title}
              </h3>
              <p className="mt-1 text-sm text-marrom/70">{card.description}</p>
            </div>
            <span className="absolute bottom-4 right-5 flex size-8 items-center justify-center rounded-full bg-marrom text-ouro opacity-0 transition group-hover:opacity-100">
              <IconArrowRight className="size-4" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}