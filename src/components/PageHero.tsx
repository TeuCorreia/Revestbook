import type { ReactNode } from "react";

type PageHeroProps = {
  title: string;
  gradient: string;
  children: ReactNode;
};

export default function PageHero({ title, gradient, children }: PageHeroProps) {
  return (
    <section
      className={`bg-linear-to-br ${gradient} px-4 py-20 text-center text-white sm:py-24`}
    >
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
        {title}
      </h1>
      <div className="mx-auto mt-4 max-w-xl text-base text-white/85 sm:text-lg">
        {children}
      </div>
    </section>
  );
}
