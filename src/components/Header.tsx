import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BrandMark } from './BrandMark';

const NAV_LINKS = [
  { href: '#funcionalidades', label: 'Funcionalidades' },
  { href: '#para-quem', label: 'Para quem é' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="relative z-40 bg-white">
      <div className="max-w-[1024px] mx-auto px-5 sm:px-6 h-[56px] flex items-center justify-between gap-8">
        {/* Zone 1: Brand mark */}
        <a
          href="#topo"
          className="inline-flex items-center rounded-sm whitespace-nowrap shrink-0"
          aria-label="hotevo — Ir para o início da página"
        >
          <BrandMark size="sm" />
        </a>

        {/* Zone 2: Desktop Navigation */}
        <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="sk-body-sm text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors duration-150 whitespace-nowrap shrink-0 py-1.5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contato"
            className="hidden sm:inline-flex sk-button-primary sk-button-reduced"
          >
            Entrar em contato
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full text-[#1d1d1f] hover:bg-black/[0.04] active:scale-[0.96] transition-[background-color,transform] duration-150"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" strokeWidth={1.6} aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" strokeWidth={1.6} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navegação móvel"
          className="md:hidden bg-white px-6 pb-6 pt-2"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="flex items-center min-h-[44px] text-[17px] tracking-[-0.022em] font-medium text-[#1d1d1f] hover:text-[#0066cc] transition-colors duration-150"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <a
              href="#contato"
              onClick={handleLinkClick}
              className="w-full min-h-[44px] sk-button-primary sk-button-elevated"
            >
              Entrar em contato
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
