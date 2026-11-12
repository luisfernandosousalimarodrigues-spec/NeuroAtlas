const atlasConditions = [
  { id: 'epilepsia', title: 'Epilepsia', code: 'CRISES', area: 'Crises', filters: ['cerebro', 'crises'], summary: 'Grupo de condições em que há predisposição a crises epilépticas recorrentes, com diferentes causas e manifestações.', detail: 'Epilepsia não é uma única doença. A avaliação considera o tipo de crise, a história clínica, exames como EEG e possíveis causas estruturais, genéticas, metabólicas ou desconhecidas.', facts: [['Sistema mais envolvido', 'Cérebro e redes elétricas neuronais.'], ['Ponto de estudo', 'Crises podem ter manifestações motoras, sensitivas, comportamentais ou de consciência.'], ['Não confundir', 'Uma crise isolada não define automaticamente epilepsia.']] },
  { id: 'avc', title: 'AVC', code: 'VASCULAR', area: 'Vascular', filters: ['cerebro', 'vascular'], summary: 'Alteração súbita do fluxo sanguíneo cerebral, por obstrução ou sangramento, que exige reconhecimento e atendimento rápidos.', detail: 'O acidente vascular cerebral pode ser isquêmico ou hemorrágico. Os sinais dependem da área afetada e podem incluir fraqueza de um lado, alteração da fala, visão ou equilíbrio.', facts: [['Sistema mais envolvido', 'Vasos sanguíneos e tecido cerebral.'], ['Ponto de estudo', 'Tempo é uma variável crítica para reduzir dano e orientar tratamento.'], ['Não confundir', 'Sintomas súbitos exigem urgência; não devem ser observados em casa.']] },
  { id: 'esclerose-multipla', title: 'Esclerose múltipla', code: 'IMUNE', area: 'Imune / desmielinizante', filters: ['cerebro', 'imune'], summary: 'Doença em que o sistema imune ataca a mielina e outras estruturas do sistema nervoso central, com sintomas que variam entre pessoas.', detail: 'A esclerose múltipla afeta cérebro, medula espinhal e nervos ópticos. A investigação pode envolver história clínica, exame neurológico, MRI e análise do líquor.', facts: [['Sistema mais envolvido', 'Sistema nervoso central e mielina.'], ['Ponto de estudo', 'Pode cursar com surtos, progressão ou combinação de padrões.'], ['Não confundir', 'Parestesia ou fadiga isoladas têm muitas causas possíveis.']] },
  { id: 'parkinson', title: 'Doença de Parkinson', code: 'MOVIMENTO', area: 'Movimento', filters: ['cerebro', 'movimento'], summary: 'Condição cerebral associada a alterações de movimento, sono, humor, dor e outras funções ao longo do tempo.', detail: 'A doença de Parkinson envolve circuitos cerebrais relacionados ao movimento e também pode produzir sintomas não motores. O diagnóstico é clínico e o tratamento é individualizado.', facts: [['Sistema mais envolvido', 'Circuitos cerebrais do movimento e redes não motoras.'], ['Ponto de estudo', 'Tremor é possível, mas não obrigatório nem suficiente para o diagnóstico.'], ['Não confundir', 'Nem todo tremor é Parkinson.']] },
  { id: 'neuropatia-diabetica', title: 'Neuropatia diabética', code: 'NERVOS', area: 'Nervos periféricos', filters: ['nervos'], summary: 'Complicação do diabetes que pode afetar nervos periféricos, com dor, queimação, dormência ou perda de sensibilidade.', detail: 'Neuropatia diabética costuma ser estudada junto do controle metabólico, exame dos pés e avaliação da distribuição dos sintomas. Outras causas de neuropatia também precisam ser consideradas.', facts: [['Sistema mais envolvido', 'Nervos periféricos.'], ['Ponto de estudo', 'A perda de sensibilidade aumenta o risco de lesões não percebidas.'], ['Não confundir', 'Dor ou formigamento persistente merecem avaliação, não uma conclusão automática.']] },
  { id: 'ela', title: 'Esclerose lateral amiotrófica', code: 'NEURÔNIO MOTOR', area: 'Neurônio motor', filters: ['cerebro', 'nervos'], summary: 'Doença que afeta neurônios responsáveis pelo controle dos músculos, com fraqueza progressiva e necessidades de cuidado multidisciplinar.', detail: 'A ELA envolve neurônios motores no cérebro e na medula. Fala, deglutição, respiração e mobilidade podem ser afetadas em ritmos diferentes.', facts: [['Sistema mais envolvido', 'Neurônios motores e vias motoras.'], ['Ponto de estudo', 'O cuidado envolve neurologia, fisioterapia, fonoaudiologia, nutrição e suporte respiratório.'], ['Não confundir', 'Fraqueza tem causas diversas e precisa de investigação.']] },
  { id: 'enxaqueca', title: 'Enxaqueca', code: 'CEFALEIA', area: 'Cérebro / dor', filters: ['cerebro'], summary: 'Distúrbio neurológico recorrente que pode envolver dor de cabeça, náusea e sensibilidade à luz, som ou movimento.', detail: 'Enxaqueca é uma condição neurológica, não apenas uma dor de cabeça comum. O padrão dos episódios e sinais de alerta orienta a avaliação.', facts: [['Sistema mais envolvido', 'Redes cerebrais de dor e processamento sensorial.'], ['Ponto de estudo', 'Pode ocorrer com ou sem aura.'], ['Não confundir', 'Uma dor de cabeça súbita e muito intensa é sinal de urgência.']] },
  { id: 'meningite', title: 'Meningite e encefalite', code: 'INFECCIOSA', area: 'Neuroinfecção', filters: ['cerebro', 'imune'], summary: 'Inflamação das membranas que envolvem o sistema nervoso ou do próprio tecido cerebral, com causas infecciosas e não infecciosas.', detail: 'Meningite e encefalite podem evoluir rapidamente. Febre, rigidez de nuca, confusão, convulsão ou alteração importante do estado mental exigem atendimento urgente.', facts: [['Sistema mais envolvido', 'Meninges, cérebro e, em alguns casos, medula.'], ['Ponto de estudo', 'A causa pode mudar exames, isolamento e tratamento.'], ['Não confundir', 'Não é um quadro para automedicação ou espera prolongada.']] },
  { id: 'raiva', title: 'Raiva', code: 'VIRAL', area: 'Neuroinfecção', filters: ['cerebro', 'imune'], summary: 'Infecção viral que alcança o sistema nervoso central, geralmente após mordida ou arranhão de animal infectado; é prevenível se o cuidado começar antes dos sintomas.', detail: 'A raiva é uma urgência de saúde pública. Após possível exposição, a ferida deve ser lavada imediatamente e a pessoa deve buscar atendimento urgente para avaliar profilaxia pós-exposição. Quando os sinais clínicos começam, a doença é quase sempre fatal.', facts: [['Transmissão', 'Principalmente por mordidas ou arranhões de animais infectados.'], ['Prevenção', 'Lavagem da ferida e avaliação rápida para imunoglobulina e vacina, quando indicadas.'], ['Alerta', 'Não espere sintomas e não tente decidir o risco sozinho.']] },
  { id: 'tetano', title: 'Tétano', code: 'TOXINA', area: 'Neuroinfecção', filters: ['imune'], summary: 'Infecção causada por toxina de C. tetani que interfere no sistema nervoso e provoca rigidez e espasmos musculares; pode ser prevenida por vacinação.', detail: 'Os esporos entram por uma ruptura da pele e a toxina atua em locais do sistema nervoso central, medula e terminações motoras. Trismo, rigidez, espasmos e dificuldade para engolir ou respirar exigem atendimento médico. A vacinação e a avaliação adequada de feridas são centrais na prevenção.', facts: [['Causa', 'Toxina produzida por Clostridium tetani após entrada por uma ferida.'], ['Ponto de estudo', 'A toxina bloqueia impulsos inibitórios e favorece contrações musculares não controladas.'], ['Prevenção', 'Manter vacinação em dia e buscar orientação após ferimentos de risco.']] },
  { id: 'cjd-atlas', title: 'CJD e doenças priônicas', code: 'PRIÔNICA', area: 'Neurodegeneração rara', filters: ['cerebro'], summary: 'Trilha especializada do NeuroAtlas para CJD clássica, vCJD, insônia fatal, kuru e BSE.', detail: 'A CJD permanece como o módulo de aprofundamento da página principal. Ela é uma doença priônica rara e rapidamente progressiva, diferente de muitas condições neurológicas mais comuns.', facts: [['Sistema mais envolvido', 'Cérebro e redes neurológicas.'], ['Ponto de estudo', 'Príons envolvem alteração de conformação proteica.'], ['Não confundir', 'CJD não é sinônimo de neuropatia periférica.']] }
];

const grid = document.querySelector('#atlas-grid');
const search = document.querySelector('#atlas-search');
const empty = document.querySelector('#atlas-empty');
const dialog = document.querySelector('#atlas-dialog');
const dialogContent = document.querySelector('#atlas-dialog-content');
let activeFilter = 'all';

function renderCatalog() {
  const term = search.value.trim().toLowerCase();
  const visible = atlasConditions.filter((item) => {
    const matchesFilter = activeFilter === 'all' || item.filters.includes(activeFilter);
    const haystack = [item.title, item.code, item.area, item.summary, item.detail].join(' ').toLowerCase();
    return matchesFilter && haystack.includes(term);
  });
  grid.innerHTML = visible.map((item, index) => `<article class="atlas-condition-card ${index === 0 ? 'card-wide' : ''}"><div class="atlas-condition-top"><span class="atlas-area-label">${item.area}</span><span>${item.code}</span></div><h3>${item.title}</h3><p>${item.summary}</p><div class="atlas-condition-footer"><span>${String(index + 1).padStart(2, '0')} / ficha</span><button type="button" data-open-condition="${item.id}">abrir ficha ↗</button></div></article>`).join('');
  empty.hidden = visible.length > 0;
}

function openCondition(id) {
  const item = atlasConditions.find((condition) => condition.id === id);
  if (!item) return;
  dialogContent.innerHTML = `<div class="dialog-body"><p class="kicker">atlas neurológico · ${item.code}</p><h2>${item.title}</h2><p>${item.detail}</p><div class="dialog-facts">${item.facts.map(([label, value]) => `<div class="dialog-fact"><strong>${label}</strong><span>${value}</span></div>`).join('')}</div></div>`;
  dialog.showModal();
}

document.addEventListener('click', (event) => {
  const button = event.target.closest('[data-open-condition]');
  if (button) openCondition(button.dataset.openCondition);
  const systemButton = event.target.closest('[data-system-filter]');
  if (systemButton) {
    activeFilter = systemButton.dataset.systemFilter;
    document.querySelectorAll('.atlas-filter').forEach((item) => item.classList.toggle('active', item.dataset.filter === activeFilter));
    document.querySelector('#catalogo').scrollIntoView({ behavior: 'smooth' });
    renderCatalog();
  }
});
search.addEventListener('input', renderCatalog);
document.querySelectorAll('.atlas-filter').forEach((button) => button.addEventListener('click', () => {
  activeFilter = button.dataset.filter;
  document.querySelectorAll('.atlas-filter').forEach((item) => item.classList.toggle('active', item === button));
  renderCatalog();
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
document.querySelector('.nav-toggle').addEventListener('click', (event) => {
  const expanded = event.currentTarget.getAttribute('aria-expanded') === 'true';
  event.currentTarget.setAttribute('aria-expanded', String(!expanded));
  document.querySelector('.main-nav').classList.toggle('open');
});
document.querySelectorAll('.main-nav a').forEach((link) => link.addEventListener('click', () => document.querySelector('.main-nav').classList.remove('open')));
renderCatalog();
