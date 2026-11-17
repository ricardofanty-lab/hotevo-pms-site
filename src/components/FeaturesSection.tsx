import React, { useState } from 'react';
import {
  BedDouble,
  CalendarCheck2,
  ChartNoAxesCombined,
  WalletCards,
} from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

type ProductArea = {
  id: string;
  label: string;
  title: string;
  summary: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  capabilities: { title: string; description: string }[];
};

const PRODUCT_AREAS: ProductArea[] = [
  {
    id: 'reservas',
    label: 'Reservas',
    title: 'Da consulta à confirmação.',
    summary:
      'Gerencie disponibilidade e reservas no mesmo fluxo, com ferramentas para a equipe e uma página de reservas diretas para seus hóspedes.',
    icon: CalendarCheck2,
    capabilities: [
      {
        title: 'Cotações e reservas',
        description:
          'Consulte tarifas em tempo real e monte estadias com datas, hóspedes, planos de refeição, vouchers ou mais de um quarto.',
      },
      {
        title: 'Mapa de disponibilidade',
        description:
          'Consulte quartos livres e tarifas por categoria e data, inicie uma reserva pelo calendário e distribua quartos para as próximas chegadas.',
      },
      {
        title: 'Reserva direta e centralizada',
        description:
          'Configure a página pública e seu fluxo de confirmação, e consulte disponibilidade entre as propriedades que você administra.',
      },
      {
        title: 'Grupos, bloqueios e espera',
        description:
          'Acompanhe bloqueios, listas de quartos e retirada de grupo, além de hóspedes aguardando disponibilidade.',
      },
    ],
  },
  {
    id: 'operacao',
    label: 'Operação',
    title: 'A equipe vê o que precisa acontecer.',
    summary:
      'Da chegada ao preparo do quarto, acompanhe o andamento da hospedagem e coordene as tarefas do turno.',
    icon: BedDouble,
    capabilities: [
      {
        title: 'Recepção e chegadas',
        description:
          'Acompanhe chegadas, saídas, hóspedes hospedados e ocupação; configure o envio de links de pré-check-in quando necessário.',
      },
      {
        title: 'Mapa de quartos',
        description:
          'Consulte quartos por andar e tipo, veja sua situação e identifique unidades prontas, sujas ou fora de serviço.',
      },
      {
        title: 'Governança e solicitações',
        description:
          'Distribua tarefas de limpeza e inspeção e acompanhe solicitações dos hóspedes com prazos e prioridades.',
      },
      {
        title: 'Restaurante e eventos',
        description:
          'Quando os módulos estão habilitados, use o ponto de venda, pedidos para a cozinha, eventos e cotações de banquetes.',
      },
    ],
  },
  {
    id: 'financeiro',
    label: 'Financeiro',
    title: 'Fechamentos com mais contexto.',
    summary:
      'Acompanhe as contas da hospedagem, os recebimentos do turno e o fechamento da data operacional em um só sistema.',
    icon: WalletCards,
    capabilities: [
      {
        title: 'Folios e recebimentos',
        description:
          'Consulte contas abertas, pagamentos, saldos, faturas e os recebimentos registrados em cada caixa.',
      },
      {
        title: 'Caixas e conferência de turno',
        description:
          'Organize sessões de caixa, formas de pagamento e diferenças de fechamento para revisão.',
      },
      {
        title: 'Auditoria noturna',
        description:
          'Feche a data de negócio manualmente ou programe a rotina; consulte exceções e o relatório de auditoria.',
      },
      {
        title: 'Contas corporativas e contabilidade',
        description:
          'Acompanhe depósitos, contas a receber e vencimentos de empresas, com exportação para sistemas contábeis.',
      },
    ],
  },
  {
    id: 'gestao',
    label: 'Gestão e inteligência',
    title: 'Decisões baseadas no ritmo da casa.',
    summary:
      'Transforme os registros da operação em indicadores e relatórios. Conecte automações respeitando os acessos da sua equipe.',
    icon: ChartNoAxesCombined,
    capabilities: [
      {
        title: 'Indicadores de desempenho',
        description:
          'Consulte ocupação, ADR, RevPAR e receita por período e departamento, compare resultados com metas e analise origem e ritmo das reservas.',
      },
      {
        title: 'Relatórios para cada rotina',
        description:
          'Use pacotes por departamento ou crie relatórios personalizados para salvar, compartilhar e programar por e-mail.',
      },
      {
        title: 'Agente Sofia',
        description:
          'Com a conexão de IA habilitada, consulte informações e execute tarefas permitidas pelo perfil de acesso, com registro das ações.',
      },
      {
        title: 'Propriedades e implantação',
        description:
          'Configure várias propriedades, importe reservas e saldos na entrada em operação, gerencie acessos por função e consulte a trilha de atividade.',
      },
      {
        title: 'API, eventos e integrações',
        description:
          'Conecte outros sistemas por API e webhooks e consulte opções no marketplace; disponibilidade e permissões dependem da configuração.',
      },
    ],
  },
];

export function FeaturesSection() {
  const [activeAreaId, setActiveAreaId] = useState(PRODUCT_AREAS[0].id);
  const prefersReducedMotion = useReducedMotion();
  const activeArea = PRODUCT_AREAS.find((area) => area.id === activeAreaId) ?? PRODUCT_AREAS[0];
  const ActiveIcon = activeArea.icon;

  return (
    <section id="funcionalidades" className="bg-white py-24 sm:py-32">
      <div className="max-w-[1024px] mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
          <p className="sk-body-lg text-[#6e6e73] font-medium mb-2">O produto</p>
          <h2 className="sk-h2 text-[32px] sm:text-[40px] text-[#1d1d1f] mb-4">
            A operação da hospedagem, conectada.
          </h2>
          <p className="sk-body-lg text-[#6e6e73]">
            Um PMS para acompanhar reservas, equipe, financeiro e gestão sem repetir o mesmo fluxo em ferramentas separadas.
          </p>
        </div>

        <div className="flex justify-center mb-10 sm:mb-12">
          <div
            role="group"
            aria-label="Escolher área do produto"
            className="inline-flex max-w-full flex-wrap items-center justify-center gap-1 rounded-full bg-[#f5f5f7] p-1"
          >
            {PRODUCT_AREAS.map((area) => {
              const selected = activeAreaId === area.id;
              return (
                <button
                  key={area.id}
                  type="button"
                  aria-pressed={selected}
                  aria-controls="product-area-panel"
                  onClick={() => setActiveAreaId(area.id)}
                  className={`min-h-10 rounded-full px-4 py-2 sk-body-md transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071e3] ${
                    selected
                      ? 'bg-white text-[#1d1d1f] shadow-[0_1px_4px_rgba(0,0,0,0.08)]'
                      : 'text-[#6e6e73] hover:text-[#1d1d1f]'
                  }`}
                >
                  {area.label}
                </button>
              );
            })}
          </div>
        </div>

        <div
          id="product-area-panel"
          role="region"
          aria-label={activeArea.label}
          aria-live="polite"
          className="min-h-[430px] rounded-[18px] bg-[#f5f5f7] p-6 sm:p-10 lg:p-12"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeArea.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
              className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-16"
            >
              <div className="lg:col-span-2 lg:pt-2">
                <ActiveIcon
                  className="mb-5 h-7 w-7 text-[#0071e3]"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
                <h3 className="sk-h3 text-[26px] sm:text-[32px] text-[#1d1d1f] mb-4">
                  {activeArea.title}
                </h3>
                <p className="sk-body-lg text-[#6e6e73]">{activeArea.summary}</p>
              </div>

              <ul className="lg:col-span-3 divide-y divide-[#d2d2d7]">
                {activeArea.capabilities.map((capability) => (
                  <li key={capability.title} className="py-5 first:pt-0 last:pb-0">
                    <h4 className="sk-h4 text-[#1d1d1f] mb-1">{capability.title}</h4>
                    <p className="sk-body-md text-[#6e6e73]">{capability.description}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="sk-body-sm mt-5 text-center text-[#6e6e73]">
          Recursos disponíveis conforme os módulos, permissões e integrações habilitados em cada propriedade.
        </p>
      </div>
    </section>
  );
}
