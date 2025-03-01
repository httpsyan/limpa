"use client";

import Link from "next/link";

export const Hero = () => {
  return (
    <section className="container mx-auto h-[40rem] md:h-svh md:max-h-[min(80rem,300vw)] md:min-h-[48rem] px-4 pb-4 text-white md:pb-6 mb-12 md:mb-28">
      <div className="relative flex flex-col justify-start gap-6 pt-12 h-full max-w-[1808px] overflow-hidden rounded-2xl text-center md:justify-between md:gap-12 md:px-6 md:pt-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 -left-1/4 w-[700px] h-[700px] bg-gradient-to-r from-[#FF4D00] via-[#FF7A00] to-[#FFB800] rounded-full blur-[100px] mix-blend-screen" />
          <div className="absolute bottom-1/4 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-[#9D00FF] via-[#7000FF] to-[#4C00FF] rounded-full blur-[100px] mix-blend-screen" />
        </div>

        <div className="relative z-50 px-4 md:px-0">
          <h1 className="font-semibold -tracking-4 text-balance !text-[clamp(2.5rem,_1.25rem_+_5vw,_6.5rem)] !leading-[1] md:!leading-[clamp(3.5rem,_2.5rem_+_3vw,_5.5rem)]">
            Carregadores Inteligentes
          </h1>
        </div>

        <div className="relative z-50 mb-6 px-4 md:-mb-6 md:px-0">
          <p className="[&_b]:md:font-semibold [&_strong]:md:font-semibold whitespace-pre-line font-mono text-base/[1.25rem] md:text-1.5xl/[1.6875rem] !text-balance [&>br]:hidden sm:[&>br]:inline">
            Mobilidade elétrica descomplicada, sustentável e acessível em todos
            os lugares.
          </p>
        </div>

        <div className="absolute bottom-4 left-0 z-50 mx-auto flex w-full flex-col justify-center gap-2 px-5 md:static md:flex-row md:gap-4">
          <button className="group relative rounded-xl p-1 -outline-offset-2 border border-white/30 flex flex-col">
            <span className="relative inline-flex w-full flex-1 items-center justify-center gap-4.5 whitespace-nowrap rounded-lg uppercase shadow-[0px_4px_10px_rgba(0,0,0,0.35)] transition-colors motion-reduce:transition-none md:gap-6 px-3.5 py-[15px] font-mono text-sm/[1rem] font-semibold md:px-4 md:py-4.5 md:text-base/[1.3125rem] md:tracking-2 bg-black text-white dark:bg-white dark:text-black">
              Saiba mais
            </span>
          </button>
          <Link
            href="/"
            className="group relative rounded-xl p-1 -outline-offset-2 border border-white/30 flex flex-col"
          >
            <span className="relative inline-flex w-full flex-1 items-center justify-center gap-4.5 whitespace-nowrap rounded-lg uppercase shadow-[0px_4px_10px_rgba(0,0,0,0.35)] transition-colors motion-reduce:transition-none md:gap-6 px-3.5 py-[15px] font-mono text-sm/[1rem] font-semibold md:px-4 md:py-4.5 md:text-base/[1.3125rem] md:tracking-2 bg-white text-brand-light-black dark:bg-black dark:text-white">
              Contato
            </span>
          </Link>
        </div>
        <div className="z-10 mx-0 -mr-4 min-h-[35rem] max-w-[1296px] flex-1 px-2 w-full md:relative md:mx-auto md:min-h-[unset] md:px-0">
          <div className="overflow-hidden md:rounded-md bg-[#171717]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="pointer-events-none relative mx-auto h-auto w-full select-none bg-[#171717] object-cover object-left-top sm:block md:aspect-[initial] md:object-contain md:object-bottom"
            >
              <source
                src="https://videos.pexels.com/video-files/4818262/4818262-uhd_2560_1440_30fps.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};
