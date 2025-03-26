export function Footer() {
  return (
    <footer className="w-full border-t border-brand-neutrals-100 bg-[#0c0c0c0c] py-8">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4">
        <p className="font-mono text-sm text-[#B3B3B3]">
          © 2024 Limpa. Todos os direitos reservados.
        </p>
        <a
          href="mailto:contato@wlimpar.com.br"
          className="font-mono text-sm text-[#B3B3B3] hover:text-white transition-colors"
        >
          contato@wlimpar.com.br
        </a>
      </div>
    </footer>
  );
}
