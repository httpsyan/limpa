"use client";

import Link from "next/link";

export const Header = () => {
  return (
    <nav className="container mx-auto">
      <div className="absolute top-4 w-full lg:top-6 container mx-auto">
        <div className="relative flex w-full items-center justify-between rounded-lg px-2 py-1.5 transition-all duration-300 motion-reduce:transition-none lg:grid lg:grid-cols-[1fr_auto_1fr] lg:rounded-2xl lg:py-[0.4375rem] lg:pr-[0.4375rem]">
          <Link
            href="/"
            aria-label="Homepage"
            className="relative flex w-fit items-center gap-0.5 overflow-hidden lg:px-3"
          >
            Limpa
          </Link>

          <div className="col-start-3 hidden w-full justify-end items-center gap-5 lg:flex">
            <a
              href="mailto:contato@wlimpar.com.br"
              className="relative inline-flex items-center justify-center whitespace-nowrap rounded-lg uppercase disabled:opacity-50 cursor-pointer overflow-hidden transition-[color,background-color,border-color,opacity] after:absolute after:inset-0 motion-reduce:transition-none style_default__7SzNF bg-white text-black md:px-4 md:py-3.5 font-mono font-semibold text-sm/[1.125rem] tracking-4 gap-2"
            >
              SAIBA MAIS
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
