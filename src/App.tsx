import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { WhoItsForSection } from './components/WhoItsForSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff] text-[#1d1d1f]">
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 sk-button-primary sk-button-default"
      >
        Pular para o conteúdo principal
      </a>

      <Header />

      <main id="conteudo-principal" className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <WhoItsForSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
