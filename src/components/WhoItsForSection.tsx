import React, { useState } from 'react';
import { Building2, Compass, Home, Trees } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ResilientImage } from './ResilientImage';

interface AudienceProfile {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
}

const AUDIENCES: AudienceProfile[] = [
  {
    id: 'hoteis',
    label: 'Hotéis independentes',
    icon: Building2,
    headline: 'Para quem administra um hotel independente.',
    description:
      'Uma operação mais conectada para cuidar da experiência do hóspede e acompanhar o crescimento do negócio.',
    image: '/src/assets/images/hero_hospitality_lobby_1794929911765.jpg',
    imageAlt: 'Recepção iluminada de hotel independente com balcão em madeira clara',
  },
  {
    id: 'pousadas',
    label: 'Pousadas',
    icon: Trees,
    headline: 'Para pousadas que valorizam cada detalhe.',
    description:
      'Organize uma operação acolhedora com informações acessíveis à equipe ao longo de cada estadia.',
    image: '/src/assets/images/hospitality_guest_room_1794929911747.jpg',
    imageAlt: 'Suíte de pousada arrumada com roupa de cama clara e iluminação natural',
  },
  {
    id: 'hostels',
    label: 'Hostels',
    icon: Compass,
    headline: 'Para hostels com uma rotina sempre em movimento.',
    description:
      'Tenha uma visão compartilhada da hospedagem para apoiar a equipe nos dias de maior movimento.',
    image: '/src/assets/images/hospitality_courtyard_lounge_1794929912399.jpg',
    imageAlt: 'Pátio interno ensolarado de hostel com móveis de madeira e área de convivência',
  },
  {
    id: 'independentes',
    label: 'Outras hospedagens',
    icon: Home,
    headline: 'Para chalés e outras hospedagens independentes.',
    description:
      'Um lugar para organizar a operação e dar à sua equipe mais clareza sobre o dia a dia da propriedade.',
    image: '/src/assets/images/hospitality_reception_detail_1794929912610.jpg',
    imageAlt: 'Detalhe de mesa de recepção com madeira natural, tablet e chave em latão',
  },
];

export function WhoItsForSection() {
  const [selectedId, setSelectedId] = useState<string>(AUDIENCES[0].id);
  const prefersReducedMotion = useReducedMotion();

  const current = AUDIENCES.find((item) => item.id === selectedId) ?? AUDIENCES[0];
  const ActiveIcon = current.icon;

  return (
    <section id="para-quem" className="bg-white py-24 sm:py-32">
      <div className="max-w-[1024px] mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
          <p className="sk-body-lg text-[#6e6e73] font-medium mb-2">
            Para quem é
          </p>
          <h2 className="sk-h2 text-[32px] sm:text-[40px] text-[#1d1d1f] mb-4">
            Projetado para hospedagens de verdade.
          </h2>
          <p className="sk-body-lg text-[#6e6e73]">
            Escolha o tipo de hospedagem para encontrar o contexto mais próximo do seu negócio.
          </p>
        </div>

        {/* Interactive Accommodation Profile Selector */}
        <div className="flex justify-center mb-10">
          <div
            role="group"
            aria-label="Escolher tipo de hospedagem"
            className="inline-flex flex-wrap items-center justify-center gap-1 p-1 rounded-full bg-[#f5f5f7] border border-[#d2d2d7]/60"
          >
            {AUDIENCES.map((profile) => {
              const isSelected = profile.id === selectedId;
              return (
                <button
                  key={profile.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedId(profile.id)}
                  className={`relative px-4 py-2 rounded-full sk-body-md transition-colors duration-150 whitespace-nowrap shrink-0 ${
                    isSelected ? 'text-[#1d1d1f] font-medium' : 'text-[#6e6e73] hover:text-[#1d1d1f]'
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId={prefersReducedMotion ? undefined : 'audience-tab-pill'}
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                      className="absolute inset-0 rounded-full bg-white shadow-[0_1px_4px_rgba(0,0,0,0.08)]"
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative z-10">{profile.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Profile Showcase Card */}
        <div
          role="region"
          aria-label={current.label}
          aria-live="polite"
          className="rounded-[18px] overflow-hidden bg-[#f5f5f7] grid grid-cols-1 lg:grid-cols-12 items-stretch"
        >
          <div className="lg:col-span-6 relative min-h-[260px] lg:min-h-[400px] bg-[#e5e5ea] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <ResilientImage
                  src={current.image}
                  alt={current.imageAlt}
                  className="w-full h-full object-cover object-center"
                  fallbackTitle={current.label}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              >
                <ActiveIcon
                  className="w-6 h-6 text-[#0071e3] mb-4"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <h3 className="sk-h3 text-[24px] sm:text-[28px] text-[#1d1d1f] mb-3">
                  {current.headline}
                </h3>
                <p className="sk-body-lg text-[#6e6e73] mb-6">
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
