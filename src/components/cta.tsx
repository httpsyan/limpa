import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const Cta = () => {
  return (
    <section
      aria-labelledby="testimonial-heading"
      className="flex flex-col lg:flex-row w-full bg-black"
    >
      <div className="p-10 lg:p-28 lg:h-[40rem] flex flex-col items-start justify-center space-y-7 w-full lg:w-1/2 bg-[#0C0C0C] border-r border-white/5">
        <h2
          id="testimonial-heading"
          className="text-white font-medium text-xl font-mono"
        >
          &ldquo;A tecnologia dos carregadores inteligentes revolucionou minha
          experiência com veículos elétricos. A praticidade e eficiência são
          incomparáveis.&rdquo;
        </h2>
        <div className="flex items-center space-x-4">
          <Avatar className="w-12 h-12 ring-1 ring-white/10">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Avatar do cliente Daniel Santos"
            />
            <AvatarFallback>DS</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <h3 className="text-[#B3B3B3] font-semibold">Daniel Santos</h3>
            <p className="font-medium text-[#B3B3B3] text-sm">
              Proprietário de Tesla Model 3
            </p>
          </div>
        </div>
      </div>

      <div className="relative p-10 lg:p-28 lg:h-[40rem] flex flex-col items-start justify-center space-y-7 w-full lg:w-1/2 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 -left-1/4 w-[700px] h-[700px] bg-gradient-to-r from-[#2ECC71] via-[#27AE60] to-[#219653] rounded-full blur-[100px] mix-blend-screen" />
          <div className="absolute bottom-1/4 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-[#00B894] via-[#00A884] to-[#009874] rounded-full blur-[100px] mix-blend-screen" />
        </div>
        <h2
          id="testimonial-heading"
          className="relative z-10 text-white font-medium text-xl font-mono"
        >
          Junte-se à revolução da mobilidade elétrica. Descubra como nossos
          carregadores inteligentes podem transformar a sua vida.
        </h2>
        <button className="group relative rounded-xl p-1 -outline-offset-2 border border-white/30 flex flex-col">
          <span className="relative inline-flex w-full flex-1 items-center justify-center gap-4.5 whitespace-nowrap rounded-lg uppercase shadow-[0px_4px_10px_rgba(0,0,0,0.35)] transition-colors motion-reduce:transition-none md:gap-6 px-3.5 py-[15px] font-mono text-sm/[1rem] font-semibold md:px-4 md:py-4.5 md:text-base/[1.3125rem] md:tracking-2 bg-black text-white dark:bg-white dark:text-black">
            COMEÇAR AGORA
          </span>
        </button>
      </div>
    </section>
  );
};
