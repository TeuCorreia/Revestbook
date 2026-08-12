import Link from "next/link";
import type { ReactNode } from "react";
import {
  IconArrowRight,
  IconBook,
  IconMail,
  IconQuestion,
  IconUsers,
} from "@/components/icons";

type Card = {
  title: string;
  description: string;
  href: string;
  gradient: string;
  icon: ReactNode;
};

const cards: Card[] = [
  {
    title: "FAQ",
    description: "Respostas para as dúvidas mais frequentes.",
    href: "/faq",
    gradient: "from-violet-600 to-orange-500",
    icon: <IconQuestion className="size-10" />,
  },
  {
    title: "Livros",
    description: "Explore a coleção e os conteúdos disponíveis.",
    href: "/livros",
    gradient: "from-blue-600 to-violet-600",
    icon: <IconBook className="size-10" />,
  },
  {
    title: "Sobre",
    description: "Conheça a história e o propósito da plataforma.",
    href: "/sobre",
    gradient: "from-orange-500 to-amber-400",
    icon: <IconUsers className="size-10" />,
  },
  {
    title: "Contato",
    description: "Fale com a nossa equipe pelo canal ideal.",
    href: "/contato",
    gradient: "from-violet-500 to-blue-600",
    icon: <IconMail className="size-10" />,
  },
];

export default function CardGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        Explore a plataforma
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-slate-500">
        Acesse rapidamente as principais áreas do Revestbook.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className={`group relative flex min-h-[15rem] flex-col items-center justify-center gap-4 rounded-3xl bg-linear-to-br ${card.gradient} p-6 text-center text-white shadow-lg shadow-slate-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/20`}
          >
            <span className="flex size-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
              {card.icon}
            </span>
            <div>
              <h3 className="text-xl font-bold">{card.title}</h3>
              <p className="mt-1 text-sm text-white/85">{card.description}</p>
            </div>
            <span className="absolute bottom-4 right-5 flex size-8 items-center justify-center rounded-full bg-white/20 opacity-0 transition group-hover:opacity-100">
              <IconArrowRight className="size-4" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
