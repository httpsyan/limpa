export const Feature = () => {
  return (
    <section className="container mx-auto mb-32">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-2xl text-balance -tracking-4 md:text-5xl max-w-80 text-center font-medium md:max-w-full font-mono">
          Estamos revolucionando a mobilidade elétrica com soluções rápidas,
          sustentáveis e acessíveis.
        </h2>
        <div className="gap-20 mt-14 flex max-w-72 flex-col items-center justify-center  md:mt-18 md:max-w-full md:flex-row">
          <div className="max-w-[320px] space-y-4 text-center">
            <p className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400/40 font-medium text-5xl font-mono">
              Rápido
            </p>
            <p className="font-mono text-base/[1.125rem] md:text-lg/[1.5rem] text-[#B3B3B3]">
              Rede de carregadores de alta performance para veículos elétricos e
              híbridos.
            </p>
          </div>

          <div className="max-w-[320px] space-y-4 text-center">
            <p className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400/40 font-medium text-5xl font-mono">
              Sustentável
            </p>
            <p className="font-mono text-base/[1.125rem] md:text-lg/[1.5rem] text-[#B3B3B3]">
              Compromisso com o meio ambiente e responsabilidade social.
            </p>
          </div>

          <div className="max-w-[320px] space-y-4 text-center">
            <p className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400/40 font-medium text-5xl font-mono">
              Inovador
            </p>
            <p className="font-mono text-base/[1.125rem] md:text-lg/[1.5rem] text-[#B3B3B3]">
              Tecnologias intuitivas que facilitam a jornada rumo ao futuro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
