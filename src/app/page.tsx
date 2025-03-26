import { Cta } from "../components/cta";
import { Feature } from "../components/feature";
import { Hero } from "../components/hero";
import { Footer } from "../components/footer";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <div className="flex flex-col gap-16 !pt-0 ">
        <Hero />
        <Feature />
        <Cta />
        <section className="container flex flex-col gap-6 md:gap-14 mx-auto mb-32 ">
          <h2 className="text-xl font-semibold -tracking-4 md:text-4xl font-mono">
            Perguntas Frequentes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex h-full flex-col gap-4 border border-brand-neutrals-100 p-6 bg-[#0c0c0c0c] rounded-2xl md:col-span-2 lg:col-span-2">
              <h3 className="pt-0.5 text-xl font-semibold -tracking-4 md:text-2xl text-pretty">
                Para quem são nossos serviços?
              </h3>
              <p className="[&_b]:md:font-semibold [&_strong]:md:font-semibold whitespace-pre-line !text-pretty font-mono text-sm text-[#B3B3B3] md:text-base">
                Nossa infraestrutura atende a diversos perfis: desde motoristas
                individuais que precisam de pontos de recarga confiáveis, até
                empresas, condomínios e órgãos públicos que buscam soluções
                completas de infraestrutura de carregamento. Oferecemos uma
                plataforma integrada onde pessoas físicas podem acompanhar seu
                histórico de carregamentos, enquanto organizações têm acesso a
                ferramentas de gestão e relatórios detalhados.
              </p>
            </div>

            <div className="flex h-full flex-col gap-4 border border-brand-neutrals-100 p-6 bg-[#0c0c0c0c] rounded-2xl">
              <h3 className="pt-0.5 text-xl font-semibold -tracking-4 md:text-2xl text-pretty">
                Como funciona o carregador?
              </h3>
              <p className="[&_b]:md:font-semibold [&_strong]:md:font-semibold whitespace-pre-line !text-pretty font-mono text-sm text-[#B3B3B3] md:text-base">
                Nossos carregadores são equipados com tecnologia de carregamento
                rápido, permitindo recargas eficientes e convenientes. Focamos
                em soluções sustentáveis que minimizam o impacto ambiental
                enquanto maximizam a eficiência energética.
              </p>
            </div>

            <div className="flex h-full flex-col gap-4 border border-brand-neutrals-100 p-6 bg-[#0c0c0c0c] rounded-2xl">
              <h3 className="pt-0.5 text-xl font-semibold -tracking-4 md:text-2xl text-pretty">
                Onde encontro os carregadores?
              </h3>
              <p className="[&_b]:md:font-semibold [&_strong]:md:font-semibold whitespace-pre-line !text-pretty font-mono text-sm text-[#B3B3B3] md:text-base">
                Temos uma ampla rede de carregadores distribuídos
                estrategicamente em locais de fácil acesso. Nossa cobertura
                inclui centros urbanos, rodovias principais e estabelecimentos
                parceiros.
              </p>
            </div>

            <div className="flex h-full flex-col gap-4 border border-brand-neutrals-100 p-6 bg-[#0c0c0c0c] rounded-2xl md:col-span-2">
              <h3 className="pt-0.5 text-xl font-semibold -tracking-4 md:text-2xl text-pretty">
                Quais veículos são compatíveis?
              </h3>
              <p className="[&_b]:md:font-semibold [&_strong]:md:font-semibold whitespace-pre-line !text-pretty font-mono text-sm text-[#B3B3B3] md:text-base">
                Nossa infraestrutura é compatível com os principais tipos de
                veículos elétricos do mercado: • BEV (Battery Electric Vehicle):
                Veículos 100% elétricos, que dependem exclusivamente da bateria.
                • PHEV (Plug-in Hybrid Electric Vehicle): Híbridos plug-in, com
                baterias recarregáveis externamente. Nossos carregadores seguem
                os padrões internacionais de conectividade, garantindo ampla
                compatibilidade.
              </p>
            </div>

            <div className="flex h-full flex-col gap-4 border border-brand-neutrals-100 p-6 bg-[#0c0c0c0c] rounded-2xl lg:col-span-3">
              <h3 className="pt-0.5 text-xl font-semibold -tracking-4 md:text-2xl text-pretty">
                Qual nosso compromisso ambiental?
              </h3>
              <p className="[&_b]:md:font-semibold [&_strong]:md:font-semibold whitespace-pre-line !text-pretty font-mono text-sm text-[#B3B3B3] md:text-base">
                Sustentabilidade está no centro de nossas operações. Além de
                promover a mobilidade elétrica, que reduz significativamente as
                emissões de carbono, nossa infraestrutura é projetada com foco
                em eficiência energética. Utilizamos energia de fontes
                renováveis sempre que possível e implementamos práticas
                eco-friendly em todas as nossas operações, contribuindo para um
                futuro mais sustentável.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
