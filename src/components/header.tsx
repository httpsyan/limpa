"use client";

import { User } from "lucide-react";
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
          <ul className="col-start-2 gap-5 px-2 font-mono font-semibold uppercase -tracking-2 text-brand-neutrals-700 dark:text-brand-neutrals-200 xl:gap-11 hidden lg:flex">
            <li>
              <Link
                href="/"
                className="transition-colors duration-300 hover:text-brand-foreground motion-reduce:transition-none"
              >
                Carregadores
              </Link>
            </li>
          </ul>

          <div className="col-start-3 hidden w-full justify-end items-center gap-5 lg:flex">
            <div className="hidden w-12 justify-end lg:flex">
              <button className="relative inline-flex items-center justify-center whitespace-nowrap rounded-lg uppercase disabled:opacity-50 cursor-pointer overflow-hidden transition-[color,background-color,border-color,opacity] before:absolute before:-inset-0 after:absolute after:inset-0 motion-reduce:transition-none text-brand-black border border-gray-neutrals-100 hover:!border-brand-gray-400 after:transition-colors after:duration-300 md:px-4 md:py-3.5 font-mono font-semibold text-sm/[1.125rem] tracking-4 aspect-square h-full w-full !p-0">
                <span className="relative z-10 flex">
                  <User />
                </span>
              </button>
            </div>

            <button className="relative inline-flex items-center justify-center whitespace-nowrap rounded-lg uppercase disabled:opacity-50 cursor-pointer overflow-hidden transition-[color,background-color,border-color,opacity] after:absolute after:inset-0 motion-reduce:transition-none style_default__7SzNF bg-white text-black md:px-4 md:py-3.5 font-mono font-semibold text-sm/[1.125rem] tracking-4 gap-2">
              DOWLOAD
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
