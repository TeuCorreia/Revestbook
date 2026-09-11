"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { IconClose, IconMenu, IconSearch } from "@/components/icons";

const links = [
  { href: "/", label: "Início" },
  { href: "/setores", label: "Setores" },
  { href: "/faq", label: "FAQ" },
  { href: "/livros", label: "Livros" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

function Logo() {
  return (
    <span className="whitespace-nowrap text-white">
      RevestBem
      <span className="text-ouro">+</span>
    </span>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const openMenu = () => {
    setSearchOpen(false);
    setMenuOpen(true);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-marrom-escuro/40 bg-marrom shadow-md shadow-marrom-escuro/20">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:px-6">
        <button
          type="button"
          aria-label="Abrir menu"
          onClick={openMenu}
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg text-bege transition hover:bg-marrom-escuro/60 md:hidden"
        >
          <IconMenu className="size-6" />
        </button>

        <Link
          href="/"
          className="flex min-w-0 items-center text-lg font-extrabold tracking-tight"
        >
          <Logo />
        </Link>

        <nav className="ml-8 hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-bege/85 transition hover:bg-white/10 hover:text-ouro"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <form
          onSubmit={(event) => event.preventDefault()}
          className="ml-auto hidden items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 md:flex"
        >
          <IconSearch className="size-4 text-bege/60" />
          <input
            type="search"
            placeholder="Buscar..."
            aria-label="Buscar"
            className="w-40 bg-transparent text-sm text-bege outline-none placeholder:text-bege/60"
          />
        </form>

        <button
          type="button"
          aria-label="Buscar"
          onClick={() => setSearchOpen((open) => !open)}
          className="ml-auto inline-flex size-10 items-center justify-center rounded-lg text-bege transition hover:bg-marrom-escuro/60 md:ml-0 md:hidden"
        >
          <IconSearch className="size-5" />
        </button>
      </div>

      {searchOpen && (
        <div className="border-t border-white/10 bg-marrom-escuro px-4 py-3 md:hidden">
          <form
            onSubmit={(event) => event.preventDefault()}
            className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2"
          >
            <IconSearch className="size-4 text-bege/60" />
            <input
              type="search"
              placeholder="Buscar..."
              aria-label="Buscar"
              className="w-full bg-transparent text-sm text-bege outline-none placeholder:text-bege/60"
            />
          </form>
        </div>
      )}

      {menuOpen &&
        createPortal(
          <div className="fixed inset-0 z-50 md:hidden">
            <button
              type="button"
              aria-label="Fechar menu"
              onClick={() => setMenuOpen(false)}
              className="absolute inset-0 bg-marrom-escuro/70"
            />
            <div className="absolute inset-y-0 left-0 flex w-72 max-w-[80%] flex-col bg-marrom-escuro shadow-2xl">
              <div className="flex h-16 shrink-0 items-center justify-between border-b border-white/10 px-4">
                <span className="text-lg font-extrabold tracking-tight">
                  <Logo />
                </span>
                <button
                  type="button"
                  aria-label="Fechar menu"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex size-10 items-center justify-center rounded-lg text-bege transition hover:bg-white/10"
                >
                  <IconClose className="size-6" />
                </button>
              </div>
              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-bege transition hover:bg-white/10 hover:text-ouro"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>,
          document.body,
        )}
    </header>
  );
}