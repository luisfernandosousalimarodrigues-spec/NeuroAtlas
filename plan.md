# NeuroAtlas — plano de implementação

## Produto
Site educativo em português brasileiro sobre a doença de Creutzfeldt-Jakob e outras doenças priônicas. A experiência deve ensinar sem sugerir autodiagnóstico, com referências institucionais visíveis, linguagem acessível e recursos de estudo além de texto corrido.

## Implementação
- Site estático servido por Node.js, sem banco de dados, login ou coleta de dados pessoais.
- `index.html` organiza a experiência em seções sem rotas adicionais para facilitar o uso em celular.
- `styles.css` concentra o sistema visual responsivo, acessibilidade, estados de foco e animações discretas.
- `app.js` contém os dados didáticos e as interações: busca, filtros, comparação, quiz, flashcards, glossário e checklist local.
- `public/manus-routes.json` declara a rota única `/` para o Preview e a publicação.
- Referências no rodapé apontam para CDC, OMS, NIH/NIAID e MSD Manual.

## Design

### Opções consideradas
1. **Editorial de atlas clínico** — 0,07: fundo claro, diagramas e ritmo de revista científica.
2. **Laboratório noturno** — 0,06: marinho profundo, laranja de sinalização e painéis que lembram uma bancada de pesquisa.
3. **Caderno de campo naturalista** — 0,04: verde musgo, papel e anotações manuscritas.

### Escolha: Laboratório noturno

- **Movimento:** editorial de laboratório contemporâneo, com precisão de dashboard e calor humano de material de estudo.
- **Princípios:** clareza antes do impacto; contraste para orientar, não assustar; informação em camadas; interação como reforço da memória.
- **Filosofia de cor:** marinho quase preto reduz ruído e comunica seriedade; creme cria área de leitura confortável; laranja queimado marca ações e alertas; verde-lima indica progresso e estado de revisão.
- **Paradigma de layout:** coluna editorial assimétrica com barra lateral de metadados, cartões sobrepostos e blocos que se deslocam levemente do eixo central, em vez de uma grade perfeitamente regular.
- **Elementos assinatura:** marcador vertical laranja nos títulos, linha de “amostra” com pontos conectados e etiquetas em caixa alta para tipo de evidência.
- **Interação:** toda ferramenta informa o estado atual — “2 de 5”, “revisado”, “resposta correta” — para transformar navegação em sensação de avanço.
- **Animação:** entradas suaves por fade/translate, hover com elevação de 2px e nenhuma animação essencial para compreender conteúdo; respeitar `prefers-reduced-motion`.
- **Tipografia:** DM Sans para interface e textos; Cormorant Garamond para títulos e frases de destaque. Títulos grandes, curtos e com linha de apoio objetiva.
- **Essência:** um laboratório de bolso para entender doenças priônicas com contexto, método e ferramentas para estudar.
- **Personalidade:** criterioso, acolhedor, investigativo.
- **Voz:** direta, cuidadosa e não alarmista. Exemplos: “Separe o que é raro do que é possível.” / “Teste seu entendimento sem transformar informação em diagnóstico.”
- **Marca:** símbolo de um ponto âmbar atravessando três linhas de conexão, sugerindo uma proteína que muda de conformação e uma rede de conhecimento.
- **Cor proprietária:** laranja sinal `#F47B4A`.


## Atualização terapêutica
A página ganhou uma seção sobre futuras terapias, distinguindo cuidado atual de hipóteses experimentais. A síntese usa uma revisão científica recente e o registro do ClinicalTrials.gov NCT06153966 para apresentar redução de PrPᶜ, bloqueio de conversão, remoção de agregados/neuroproteção e importância do diagnóstico precoce. O texto evita chamar qualquer linha de pesquisa de cura comprovada.


## Atualização de escopo neurológico
O site agora possui um Atlas do sistema nervoso separado do explorador de doenças priônicas. A primeira camada cobre epilepsia, AVC, esclerose múltipla, Parkinson, neuropatia diabética, ELA, enxaqueca, meningite/encefalite e a trilha de CJD. Cada item tem área, resumo, ficha e aviso de que as categorias são didáticas.


## Arquitetura NeuroAtlas
A marca principal passou a ser NeuroAtlas. A rota `/` permanece focada em CJD e doenças priônicas, com ferramentas de comparação, pesquisa e estudo. A rota `/atlas` concentra a extensão ampla e detalhada do sistema nervoso, com catálogo independente, mapa por sistemas, filtros, fichas e método de estudo.


## Escopo neurológico equilibrado
A home do NeuroAtlas agora apresenta cérebro, nervos, movimento, crises, neuroinfecções e urgências em igualdade. CJD e doenças priônicas permanecem como uma trilha especializada entre outras. O catálogo do Atlas ganhou tétano, com conteúdo sobre toxina, espasmos, feridas e prevenção por vacinação, apoiado por referência do CDC.
