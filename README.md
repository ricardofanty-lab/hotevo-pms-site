# Hotevo — site do PMS

Site de apresentação do Hotevo, um sistema de gestão para hospedagens. Construído com React, TypeScript, Vite e Tailwind CSS.

## Rodar localmente

Requer Node.js compatível com a versão do Vite usada neste projeto.

```bash
npm install
npm run dev -- --host 127.0.0.1
```

O Vite exibirá o endereço local no terminal.

## Verificações e build

```bash
npm run lint
npm run build
npm run preview
```

## Observações

- O site atual é front-end only e não requer chaves de API ou variáveis de ambiente.
- O formulário de contato demonstra a validação e a confirmação na interface; ele ainda não envia nem salva solicitações.
- A prévia de produto no hero é ilustrativa.
- [PRODUCT_REVIEW.md](PRODUCT_REVIEW.md) registra o levantamento das funções observadas no PMS.
- [AGENTS.md](AGENTS.md) e `.agents/skills/hotevo-apple-marketing/SKILL.md` documentam as orientações visuais para futuras alterações.
