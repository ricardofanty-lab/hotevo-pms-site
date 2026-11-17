import React from 'react';
import { BrandMark } from './BrandMark';

const FOOTER_LINKS = [
  { href: '#funcionalidades', label: 'Funcionalidades' },
  { href: '#para-quem', label: 'Para quem é' },
  { href: '#contato', label: 'Contato' },
];

export function Footer() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7] py-10 sm:py-12">
      <div className="max-w-[1024px] mx-auto px-5 sm:px-8">
        {/* Canonical Apple ac-gf Footnote */}
        <p className="sk-body-sm text-[#6e6e73] pb-5 border-b border-[#d2d2d7]">
          Apresentação conceitual do produto. O formulário de contato valida os campos localmente e
          não envia nem armazena as informações preenchidas.
        </p>

        <div className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#d2d2d7]">
          <div className="max-w-md">
            <a
              href="#topo"
              className="inline-block rounded-sm mb-2"
              aria-label="hotevo — Voltar ao topo"
            >
              <BrandMark size="md" />
            </a>
            <p className="sk-body-sm text-[#6e6e73]">
              Sistema de gestão para hotéis, pousadas, hostels e hospedagens independentes.
            </p>
          </div>

          <nav aria-label="Links do rodapé" className="flex flex-wrap gap-x-6 gap-y-2.5">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="sk-body-sm text-[#424245] hover:text-[#1d1d1f] hover:underline underline-offset-4 transition-colors duration-150 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sk-body-sm text-[#6e6e73]">
          <p>Copyright © 2026 hotevo. Todos os direitos reservados.</p>
          <p>Gestão de Hospedagem (PMS)</p>
        </div>
      </div>
    </footer>
  );
}
