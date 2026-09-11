import Link from "next/link";

const links = [
  { href: "/", label: "Início" },
  { href: "/setores", label: "Setores" },
  { href: "/faq", label: "FAQ" },
  { href: "/livros", label: "Livros" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Footer() {
  return (
    <footer className="bg-marrom-escuro text-bege/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-lg font-extrabold text-white">
            RevestBem
            <span className="text-ouro">+</span>
          </p>
          <p className="mt-3 text-sm leading-6 text-bege/70">
            Conhecimento, processos e pessoas conectados em um único ambiente.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-bege">
            Navegação
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-bege/70 transition hover:text-ouro"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-bege">
            Contato
          </p>
          <ul className="mt-4 space-y-2 text-sm text-bege/70">
            <li>contato@revestbem.com</li>
            <li>(00) 0000-0000</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-bege/60">
        © {new Date().getFullYear()} RevestBem+. Todos os direitos reservados.
      </div>
    </footer>
  );
}