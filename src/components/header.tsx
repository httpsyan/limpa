import { User } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="container mx-auto">
      <nav className="fixed top-4 z-20 w-full lg:top-6">
        <div className="container box-border">
          <div className="relative flex h-[var(--navbar-height)] w-full items-center justify-between rounded-lg border border-transparent bg-brand-background px-2 py-1.5 transition-[box-shadow_background-color_border-color] duration-300 motion-reduce:transition-none lg:grid lg:grid-cols-[1fr_auto_1fr] lg:rounded-2xl lg:py-[0.4375rem] lg:pr-[0.4375rem]">
            <Link
              href="/"
              aria-label="Homepage"
              className="relative flex w-fit items-center gap-0.5 overflow-hidden lg:px-3"
            >
              Limpa
            </Link>

            <ul className="col-start-2 gap-5 px-2 font-mono font-semibold uppercase -tracking-2 text-[#CCCCCC] hover:text-[#CCCCCC]/80 xl:gap-11 hidden lg:flex text-lg">
              <li>
                <Link
                  href="/"
                  className="transition-colors duration-300 hover:text-white motion-reduce:transition-none"
                >
                  PRICING
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className=" transition-colors duration-300 hover:text-white motion-reduce:transition-none"
                >
                  Planos
                </Link>
              </li>
            </ul>

            <div className="col-start-3 hidden w-full justify-end items-center gap-5 lg:flex">
              <div className="hidden w-12 justify-end lg:flex">
                <button className="relative inline-flex items-center justify-center whitespace-nowrap rounded-lg uppercase disabled:opacity-50 cursor-pointer overflow-hidden transition-[color,background-color,border-color,opacity] before:absolute before:-inset-0 after:absolute after:inset-0 motion-reduce:transition-none style_secondary__r9SkX bg-brand-white text-brand-black border border-brand-neutrals-100 dark:border-brand-neutrals-800 hover:!border-brand-gray-400 after:transition-colors after:duration-300 md:px-4 md:py-3.5 font-mono font-semibold text-sm/[1.125rem] tracking-4 aspect-square h-full w-full !p-0">
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
    </div>
  );
};
