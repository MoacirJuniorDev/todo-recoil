# To-do List com Recoil (Módulo 20)

Aplicação de lista de tarefas desenvolvida em React utilizando a biblioteca **Recoil** para gerenciamento de estado global através de Átomos e Seletores.

## Tecnologias e Conceitos Aplicados
- **React (Vite)**
- **RecoilRoot**: Provedor de contexto global do Recoil.
- **Átomos (`atom`)**: Armazenamento da lista de tarefas e do filtro ativo (`todas`, `concluidas`, `pendentes`).
- **Seletores (`selector`)**: Cálculo derivado da lista de tarefas com base no filtro ativo.
- **Hooks do Recoil**: Utilização de `useRecoilState`, `useRecoilValue` e `useSetRecoilState`.
- **Acessibilidade e Contraste**: Estilização limpa com alto contraste visual (WCAG).

## Como Rodar Localmente
1. Clone o repositório.
2. Instale as dependências: `npm install`
3. Execute a aplicação: `npm run dev`