import Link from "next/link";

const links = [
  { href: "/", label: "Início" },
  { href: "/faq", label: "FAQ" },
  { href: "/livros", label: "Livros" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-lg font-extrabold text-white">
            Revest<span className="text-orange-400">book</span>
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Centralizando informações e funcionalidades em um único ambiente.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white">
            Navegação
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-slate-400 transition hover:text-orange-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white">
            Contato
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li>contato@revestbook.com</li>
            <li>(00) 0000-0000</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Revestbook. Todos os direitos reservados.
      </div>
    </footer>
  );
}
