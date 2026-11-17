import React, { useRef } from 'react';
import { CalendarDays, Check, ChevronRight, KeyRound } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ResilientImage } from './ResilientImage';

const STATIC_SCHEDULE = [
  {
    room: 'Suíte Jardim 01',
    category: 'Casal · Térreo',
    guest: 'Reserva confirmada',
    dates: '14–17 Out',
    spanClass: 'col-start-1 col-span-3',
    barClass: 'bg-[#1d1d1f] text-white',
  },
  {
    room: 'Quarto Varanda 02',
    category: 'Duplo · 1º andar',
    guest: 'Pré-reserva',
    dates: '15–19 Out',
    spanClass: 'col-start-2 col-span-3',
    barClass: 'bg-[#0071e3]/10 text-[#0066cc] border border-[#0071e3]/20',
  },
  {
    room: 'Chalé Ipê 03',
    category: 'Família · Jardim',
    guest: 'Bloqueio de quarto',
    dates: '14–16 Out',
    spanClass: 'col-start-1 col-span-2',
    barClass: 'bg-[#f5f5f7] text-[#1d1d1f] border border-[#d2d2d7]',
  },
  {
    room: 'Quarto Coletivo 04',
    category: 'Coletivo · Ala Sul',
    guest: 'Aguardando confirmação',
    dates: '16–20 Out',
    spanClass: 'col-start-3 col-span-2',
    barClass: 'bg-[#f5f5f7] text-[#424245] border border-[#d2d2d7]',
  },
];

export function HeroSection() {
  const stageRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ['start end', 'end start'],
  });

  // Subtle GPU-only Apple-style parallax lift on the decorative mockup as user scrolls
  const mockupY = useTransform(scrollYProgress, [0, 0.5, 1], [16, 0, -18]);
  const stageScale = useTransform(scrollYProgress, [0, 0.45, 1], [0.985, 1, 0.99]);

  return (
    <section
      id="topo"
      className="bg-white pt-14 pb-24 sm:pt-20 sm:pb-32 overflow-hidden"
    >
      <div className="max-w-[1024px] mx-auto px-5 sm:px-8">
        {/* Centered Apple SK Display Lockup with subtle entrance */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center mb-14 sm:mb-20"
        >
          <p className="sk-body-lg text-[#6e6e73] font-medium mb-2">
            hotevo PMS
          </p>

          <h1 className="sk-h1 text-[34px] sm:text-[48px] text-[#1d1d1f] mb-5">
            Cada etapa da hospedagem, conectada.
          </h1>

          <p className="sk-body-lg text-[#6e6e73] max-w-xl mx-auto mb-8">
            Reservas, disponibilidade, equipe e financeiro em um PMS que acompanha a operação real de hotéis e outras hospedagens.
          </p>

          {/* Two-Blue Conversion Pair: Primary Pill (#0071e3) + Link Secondary (#0066cc) */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="#contato"
              className="sk-button-primary sk-button-elevated"
            >
              Entrar em contato
            </a>

            <a
              href="#funcionalidades"
              className="group inline-flex items-center gap-0.5 sk-body-lg text-[#0066cc] hover:underline underline-offset-4 whitespace-nowrap"
            >
              <span>Explorar funcionalidades</span>
              <ChevronRight
                className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5"
                strokeWidth={2}
                aria-hidden="true"
              />
            </a>
          </div>
        </motion.div>

        {/* Product-First Stage with Scroll-Driven Depth */}
        <motion.div
          ref={stageRef}
          style={prefersReducedMotion ? undefined : { scale: stageScale }}
          className="rounded-[18px] bg-[#f5f5f7] p-4 sm:p-8 lg:p-10 will-change-transform"
        >
          <div className="rounded-[14px] overflow-hidden aspect-[16/9] max-h-[480px] w-full bg-[#e5e5ea]">
            <ResilientImage
              src="/src/assets/images/hero_hospitality_lobby_1794929911765.jpg"
              alt="Recepção iluminada de uma hospedagem contemporânea com balcão em madeira clara e arquitetura serena"
              className="w-full h-full object-cover object-center"
              fallbackTitle="Recepção moderna de hospedagem"
            />
          </div>

          {/* Static Decorative Hardware Display with Scroll Parallax Lift */}
          <motion.div
            style={prefersReducedMotion ? undefined : { y: mockupY }}
            className="relative -mt-12 sm:-mt-24 lg:-mt-32 max-w-3xl mx-auto px-2 sm:px-4 will-change-transform"
          >
            <div
              role="img"
              aria-label="Ilustração estática da interface do hotevo exibindo mapa de ocupação, reservas e status dos quartos"
              className="pointer-events-none select-none rounded-[18px] bg-[#1d1d1f] p-2 sm:p-2.5 shadow-[0_28px_60px_-16px_rgba(0,0,0,0.35)]"
            >
              <div className="rounded-[12px] bg-white overflow-hidden">
                <div className="px-4 sm:px-6 py-3 border-b border-[#d2d2d7]/70 flex items-center justify-between gap-4 bg-[#f5f5f7]/60">
                  <div className="flex items-center gap-2 min-w-0">
                    <CalendarDays
                      className="w-4 h-4 text-[#0071e3] shrink-0"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    <span className="sk-body-md font-semibold text-[#1d1d1f] truncate">
                      Mapa de reservas · Outubro
                    </span>
                  </div>
                  <div
                    style={{ fontFamily: 'var(--sk-mono-font-stack)' }}
                    className="flex items-center gap-4 text-[12px] tabular-nums text-[#6e6e73] shrink-0"
                  >
                    <span className="hidden sm:inline">14 Qui</span>
                    <span className="hidden sm:inline">15 Sex</span>
                    <span className="hidden sm:inline">16 Sáb</span>
                    <span>17 Dom</span>
                  </div>
                </div>

                <div className="p-4 sm:p-6 space-y-3">
                  {STATIC_SCHEDULE.map((item) => (
                    <div
                      key={item.room}
                      className="grid grid-cols-12 items-center gap-3"
                    >
                      <div className="col-span-5 sm:col-span-4 min-w-0">
                        <p className="sk-body-md font-medium text-[#1d1d1f] truncate">{item.room}</p>
                        <p className="sk-body-sm text-[#6e6e73] truncate">{item.category}</p>
                      </div>

                      <div className="col-span-7 sm:col-span-8 grid grid-cols-4 gap-1.5 items-center">
                        <div
                          className={`${item.spanClass} rounded-[8px] px-3 py-1.5 flex items-center justify-between gap-2 min-w-0 ${item.barClass}`}
                        >
                          <span className="sk-body-sm font-medium truncate">
                            {item.guest}
                          </span>
                          <span
                            style={{ fontFamily: 'var(--sk-mono-font-stack)' }}
                            className="hidden sm:inline text-[11px] tabular-nums opacity-80 shrink-0"
                          >
                            {item.dates}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="px-4 sm:px-6 py-3 bg-[#f5f5f7] border-t border-[#d2d2d7]/70 flex flex-wrap items-center justify-between gap-3 sk-body-sm text-[#6e6e73]">
                  <div className="flex flex-wrap items-center gap-5">
                    <span className="inline-flex items-center gap-1.5">
                      <KeyRound className="w-3.5 h-3.5 text-[#1d1d1f]" strokeWidth={1.75} aria-hidden="true" />
                      <span>
                        Check-ins hoje:{' '}
                        <strong
                          style={{ fontFamily: 'var(--sk-mono-font-stack)' }}
                          className="tabular-nums font-medium text-[#1d1d1f]"
                        >
                          04
                        </strong>
                      </span>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#0066cc]" strokeWidth={2} aria-hidden="true" />
                      <span>
                        Quartos prontos:{' '}
                        <strong
                          style={{ fontFamily: 'var(--sk-mono-font-stack)' }}
                          className="tabular-nums font-medium text-[#1d1d1f]"
                        >
                          11/14
                        </strong>
                      </span>
                    </span>
                  </div>
                  <span className="text-[#86868b]">Prévia ilustrativa</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
