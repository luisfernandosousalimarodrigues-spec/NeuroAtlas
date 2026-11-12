const diseases = [
  {
    id: 'cjd',
    title: 'CJD clássica',
    code: 'CJD',
    type: 'Esporádica / múltiplas formas',
    filters: ['esporadica', 'genetica', 'adquirida'],
    origin: 'Humana · geralmente esporádica',
    featured: true,
    summary: 'A forma humana mais comum de doença priônica. Na maioria dos casos, aparece sem uma causa identificável; uma parcela menor é genética ou iatrogênica.',
    detail: 'CJD significa doença de Creutzfeldt-Jakob. “Clássica” ajuda a não confundir essa entidade com a variante vCJD. O curso costuma ser rapidamente progressivo depois que os sintomas começam.',
    facts: [
      ['Origem', 'Geralmente esporádica; também pode ser familiar/genética ou iatrogênica.'],
      ['Padrão clínico', 'Demência rapidamente progressiva, ataxia, mioclonias e outros sinais neurológicos podem aparecer.'],
      ['Investigação', 'MRI, EEG, análise do líquor e exclusão de outras causas; RT-QuIC pode apoiar a avaliação em contextos apropriados.']
    ]
  },
  {
    id: 'vcjd',
    title: 'vCJD',
    code: 'vCJD',
    type: 'Variante / adquirida',
    filters: ['adquirida'],
    origin: 'Humana · ligada à BSE',
    featured: true,
    summary: 'Doença distinta da CJD clássica, associada à exposição a produtos de bovinos com encefalopatia espongiforme bovina (BSE).',
    detail: 'A variante da CJD ganhou atenção na década de 1990 durante a epidemia de BSE no Reino Unido. Em comparação com a forma clássica, pode começar com sintomas psiquiátricos e dor ou alterações sensitivas.',
    facts: [
      ['Origem', 'Associada à exposição alimentar a carne contaminada pelo agente da BSE.'],
      ['Padrão clínico', 'Sintomas psiquiátricos e sensitivos podem preceder sinais neurológicos posteriores.'],
      ['Não confundir', 'vCJD e CJD clássica têm nomes parecidos, mas são condições diferentes.']
    ]
  },
  {
    id: 'ffi',
    title: 'Insônia fatal familiar',
    code: 'FFI',
    type: 'Genética',
    filters: ['genetica'],
    origin: 'Humana · mutação herdada',
    summary: 'Doença priônica hereditária rara em que a alteração do sono é um elemento central do quadro, acompanhada por disfunção autonômica e neurológica.',
    detail: 'A FFI está ligada a uma mutação no gene PRNP. A palavra “familiar” aponta para a origem genética, não para um padrão comum na população. É estudada dentro do grupo das doenças priônicas humanas.',
    facts: [
      ['Origem', 'Genética, associada a uma mutação no gene PRNP.'],
      ['Padrão clínico', 'Distúrbio grave do sono, alterações autonômicas e progressão neurológica.'],
      ['Contexto', 'História familiar e aconselhamento genético podem ser relevantes na investigação especializada.']
    ]
  },
  {
    id: 'sfi',
    title: 'Insônia fatal esporádica',
    code: 'sFI',
    type: 'Esporádica',
    filters: ['esporadica'],
    origin: 'Humana · sem mutação familiar identificada',
    summary: 'Forma muito rara em que o quadro de insônia fatal ocorre sem o padrão familiar conhecido da FFI.',
    detail: 'A forma esporádica é diferente da insônia fatal familiar porque não depende de uma mutação herdada conhecida. Ela compartilha o grupo das doenças priônicas, mas não deve ser confundida com insônia comum.',
    facts: [
      ['Origem', 'Esporádica, sem história genética familiar obrigatória.'],
      ['Padrão clínico', 'Alteração importante do sono associada a sintomas neurológicos e autonômicos.'],
      ['Importante', 'Insônia comum não significa doença priônica; o contexto clínico é essencial.']
    ]
  },
  {
    id: 'kuru',
    title: 'Kuru',
    code: 'KURU',
    type: 'Adquirida / histórica',
    filters: ['adquirida'],
    origin: 'Humana · surto histórico',
    summary: 'Doença priônica humana historicamente descrita em Papua-Nova Guiné e associada a práticas rituais específicas; hoje é extremamente rara.',
    detail: 'O Kuru é importante para a história das doenças priônicas porque ajudou a demonstrar que um agente infeccioso não convencional poderia estar envolvido em uma doença neurodegenerativa.',
    facts: [
      ['Origem', 'Adquirida em um contexto cultural e histórico muito específico.'],
      ['Padrão clínico', 'Ataxia e progressão neurológica foram características descritas.'],
      ['Atualidade', 'Não é uma explicação geral para sintomas neurológicos atuais.']
    ]
  },
  {
    id: 'bse',
    title: 'BSE / “vaca louca”',
    code: 'BSE',
    type: 'Animal',
    filters: ['animal'],
    origin: 'Bovina · doença animal',
    summary: 'Encefalopatia espongiforme bovina, uma doença priônica de bovinos. A relação com vCJD é epidemiológica e não torna as duas condições sinônimas.',
    detail: '“Vaca louca” é o nome popular da BSE, uma doença animal. A vCJD é a doença humana associada à exposição ao agente da BSE. Separar os termos evita misturar espécie, doença e rota de exposição.',
    facts: [
      ['Espécie', 'Bovinos.'],
      ['Relação', 'A epidemia de BSE esteve associada ao surgimento da vCJD.'],
      ['Diferença', 'BSE é doença animal; vCJD é doença humana distinta.']
    ]
  }
];

const neuroCatalog = [
  { id: 'epilepsia', title: 'Epilepsia', code: 'CRISES', area: 'Crises', filters: ['cerebro', 'crises'], summary: 'Grupo de condições em que há predisposição a crises epilépticas recorrentes, com diferentes causas e manifestações.', detail: 'Epilepsia não é uma única doença. A avaliação considera o tipo de crise, a história clínica, exames como EEG e possíveis causas estruturais, genéticas, metabólicas ou desconhecidas.', facts: [['Sistema mais envolvido', 'Cérebro e redes elétricas neuronais.'], ['Ponto de estudo', 'Crises podem ter manifestações motoras, sensitivas, comportamentais ou de consciência.'], ['Não confundir', 'Uma crise isolada não define automaticamente epilepsia.']] },
  { id: 'avc', title: 'AVC', code: 'VASCULAR', area: 'Vascular', filters: ['cerebro', 'vascular'], summary: 'Alteração súbita do fluxo sanguíneo cerebral, por obstrução ou sangramento, que exige reconhecimento e atendimento rápidos.', detail: 'O acidente vascular cerebral pode ser isquêmico ou hemorrágico. Os sinais dependem da área afetada e podem incluir fraqueza de um lado, alteração da fala, visão ou equilíbrio.', facts: [['Sistema mais envolvido', 'Vasos sanguíneos e tecido cerebral.'], ['Ponto de estudo', 'Tempo é uma variável crítica para reduzir dano e orientar tratamento.'], ['Não confundir', 'Sintomas súbitos exigem urgência; não devem ser observados em casa.']] },
  { id: 'esclerose-multipla', title: 'Esclerose múltipla', code: 'IMUNE', area: 'Imune / desmielinizante', filters: ['cerebro', 'imune'], summary: 'Doença em que o sistema imune ataca a mielina e outras estruturas do sistema nervoso central, com sintomas que variam entre pessoas.', detail: 'A esclerose múltipla afeta cérebro, medula espinhal e nervos ópticos. A investigação pode envolver história clínica, exame neurológico, MRI e análise do líquor.', facts: [['Sistema mais envolvido', 'Sistema nervoso central e mielina.'], ['Ponto de estudo', 'Pode cursar com surtos, progressão ou combinação de padrões.'], ['Não confundir', 'Parestesia ou fadiga isoladas têm muitas causas possíveis.']] },
  { id: 'parkinson', title: 'Doença de Parkinson', code: 'MOVIMENTO', area: 'Movimento', filters: ['cerebro', 'movimento'], summary: 'Condição cerebral associada a alterações de movimento, sono, humor, dor e outras funções ao longo do tempo.', detail: 'A doença de Parkinson envolve circuitos cerebrais relacionados ao movimento e também pode produzir sintomas não motores. O diagnóstico é clínico e o tratamento é individualizado.', facts: [['Sistema mais envolvido', 'Circuitos cerebrais do movimento e redes não motoras.'], ['Ponto de estudo', 'Tremor é possível, mas não obrigatório nem suficiente para o diagnóstico.'], ['Não confundir', 'Nem todo tremor é Parkinson.']] },
  { id: 'neuropatia-diabetica', title: 'Neuropatia diabética', code: 'NERVOS', area: 'Nervos periféricos', filters: ['nervos'], summary: 'Complicação do diabetes que pode afetar nervos periféricos, com dor, queimação, dormência ou perda de sensibilidade.', detail: 'Neuropatia diabética costuma ser estudada junto do controle metabólico, exame dos pés e avaliação da distribuição dos sintomas. Outras causas de neuropatia também precisam ser consideradas.', facts: [['Sistema mais envolvido', 'Nervos periféricos.'], ['Ponto de estudo', 'A perda de sensibilidade aumenta o risco de lesões não percebidas.'], ['Não confundir', 'Dor ou formigamento persistente merecem avaliação, não uma conclusão automática.']] },
  { id: 'ela', title: 'Esclerose lateral amiotrófica', code: 'NEURÔNIO MOTOR', area: 'Neurônio motor', filters: ['cerebro', 'nervos'], summary: 'Doença que afeta neurônios responsáveis pelo controle dos músculos, com fraqueza progressiva e necessidades de cuidado multidisciplinar.', detail: 'A ELA envolve neurônios motores no cérebro e na medula. Fala, deglutição, respiração e mobilidade podem ser afetadas em ritmos diferentes.', facts: [['Sistema mais envolvido', 'Neurônios motores e vias motoras.'], ['Ponto de estudo', 'O cuidado envolve neurologia, fisioterapia, fonoaudiologia, nutrição e suporte respiratório.'], ['Não confundir', 'Fraqueza tem causas diversas e precisa de investigação.']] },
  { id: 'enxaqueca', title: 'Enxaqueca', code: 'CEFALEIA', area: 'Cérebro / dor', filters: ['cerebro'], summary: 'Distúrbio neurológico recorrente que pode envolver dor de cabeça, náusea e sensibilidade à luz, som ou movimento.', detail: 'Enxaqueca é uma condição neurológica, não apenas uma dor de cabeça comum. O padrão dos episódios e sinais de alerta orienta a avaliação.', facts: [['Sistema mais envolvido', 'Redes cerebrais de dor e processamento sensorial.'], ['Ponto de estudo', 'Pode ocorrer com ou sem aura.'], ['Não confundir', 'Uma dor de cabeça súbita e muito intensa é sinal de urgência.']] },
  { id: 'meningite', title: 'Meningite e encefalite', code: 'INFECCIOSA', area: 'Neuroinfecção', filters: ['cerebro', 'imune'], summary: 'Inflamação das membranas que envolvem o sistema nervoso ou do próprio tecido cerebral, com causas infecciosas e não infecciosas.', detail: 'Meningite e encefalite podem evoluir rapidamente. Febre, rigidez de nuca, confusão, convulsão ou alteração importante do estado mental exigem atendimento urgente.', facts: [['Sistema mais envolvido', 'Meninges, cérebro e, em alguns casos, medula.'], ['Ponto de estudo', 'A causa pode mudar exames, isolamento e tratamento.'], ['Não confundir', 'Não é um quadro para automedicação ou espera prolongada.']] },
  { id: 'raiva', title: 'Raiva', code: 'VIRAL', area: 'Neuroinfecção', filters: ['cerebro', 'imune'], summary: 'Infecção viral que alcança o sistema nervoso central, geralmente após mordida ou arranhão de animal infectado; é prevenível se o cuidado começar antes dos sintomas.', detail: 'A raiva é uma urgência de saúde pública. Após possível exposição, a ferida deve ser lavada imediatamente e a pessoa deve buscar atendimento urgente para avaliar profilaxia pós-exposição. Quando os sinais clínicos começam, a doença é quase sempre fatal.', facts: [['Transmissão', 'Principalmente por mordidas ou arranhões de animais infectados.'], ['Prevenção', 'Lavagem da ferida e avaliação rápida para imunoglobulina e vacina, quando indicadas.'], ['Alerta', 'Não espere sintomas e não tente decidir o risco sozinho.'] ] },
  { id: 'cjd-atlas', title: 'CJD e doenças priônicas', code: 'PRIÔNICA', area: 'Neurodegeneração rara', filters: ['cerebro'], summary: 'Trilha especializada do PrionLab para CJD clássica, vCJD, insônia fatal, kuru e BSE.', detail: 'A CJD permanece no atlas como um módulo de aprofundamento. Ela é uma doença priônica rara e rapidamente progressiva, diferente de muitas condições neurológicas mais comuns.', facts: [['Sistema mais envolvido', 'Cérebro e redes neurológicas.'], ['Ponto de estudo', 'Príons envolvem alteração de conformação proteica.'], ['Não confundir', 'CJD não é sinônimo de neuropatia periférica.']] }
];

const glossary = [
  ['Príon', 'Proteína em conformação anormal capaz de induzir alterações em proteínas semelhantes.'],
  ['PrPᶜ / PrPˢᶜ', 'Abreviações usadas para diferenciar a proteína priônica celular normal da forma associada à doença.'],
  ['Oligonucleotídeo antissenso', 'Fragmento de material genético desenhado para reduzir a produção de uma proteína específica. ION717 é um exemplo investigacional direcionado à proteína priônica.'],
  ['PrP-lowering', 'Expressão em inglês para estratégias que tentam diminuir a quantidade de proteína priônica normal no sistema nervoso. É uma hipótese terapêutica, não uma cura disponível.'],
  ['Ensaio clínico', 'Estudo em pessoas para avaliar segurança, dose e possíveis efeitos. Participar de um ensaio não significa receber tratamento comprovadamente eficaz.'],
  ['Ataxia', 'Perda de coordenação dos movimentos, podendo afetar marcha, equilíbrio e fala.'],
  ['Mioclonia', 'Contração muscular breve e involuntária, que pode ocorrer em diferentes doenças neurológicas.'],
  ['RT-QuIC', 'Método laboratorial que pode detectar atividade priônica em amostras como o líquor, dentro de uma avaliação especializada.'],
  ['BSE', 'Encefalopatia espongiforme bovina, a doença priônica conhecida popularmente como “vaca louca”.'],
  ['Iatrogênica', 'Relacionada a uma intervenção de saúde; em doenças priônicas, descreve transmissões muito raras associadas a procedimentos ou materiais contaminados.'],
  ['Espongiforme', 'Termo que descreve o aspecto de “esponja” observado no tecido cerebral afetado em doenças priônicas.']
];

const quizQuestions = [
  { question: 'Qual afirmação separa melhor CJD clássica de vCJD?', answers: ['São nomes diferentes para a mesma doença.', 'vCJD é uma doença distinta associada à BSE.', 'CJD clássica ocorre apenas em bovinos.', 'vCJD é sempre genética.'], correct: 1, explanation: 'A vCJD é uma entidade humana distinta, associada à exposição ao agente da BSE. A CJD clássica costuma ser esporádica e pode ter outras origens.' },
  { question: 'O que “esporádica” significa no contexto da CJD?', answers: ['Que é transmitida por contato casual.', 'Que aparece sem uma causa ou história familiar identificável na maioria dos casos.', 'Que acontece apenas em animais.', 'Que é sempre herdada.'], correct: 1, explanation: 'Esporádica indica que não há uma causa conhecida ou mutação familiar identificada para aquele caso. Não significa transmissão por contato casual.' },
  { question: 'Qual conjunto pode entrar na investigação especializada de CJD?', answers: ['Apenas um exame de sangue comum.', 'MRI, EEG, líquor e exclusão de outras causas.', 'Somente um teste genético.', 'Apenas observação em casa.'], correct: 1, explanation: 'O diagnóstico é uma composição clínica. MRI, EEG e exames do líquor podem contribuir, e outras causas de deterioração rápida precisam ser consideradas.' },
  { question: 'Qual é o foco do cuidado atualmente?', answers: ['Uma vacina curativa já disponível.', 'Cuidado de suporte, controle de sintomas e conforto.', 'Antibiótico para eliminar o príon.', 'Autotratamento com suplementos.'], correct: 1, explanation: 'Não há tratamento curativo estabelecido. O cuidado é de suporte e deve ser individualizado por uma equipe de saúde.' },
  { question: 'O que é BSE?', answers: ['Uma forma de insônia humana.', 'A encefalopatia espongiforme bovina, uma doença priônica de bovinos.', 'Um exame de líquor.', 'O gene relacionado à FFI.'], correct: 1, explanation: 'BSE é a sigla de bovine spongiform encephalopathy. Em português, é conhecida como encefalopatia espongiforme bovina ou “vaca louca”.' },
  { question: 'Qual linha de pesquisa tem resultados pré-clínicos especialmente promissores?', answers: ['Aumentar a proteína PrP normal.', 'Reduzir a produção de PrPᶜ.', 'Usar antibióticos comuns.', 'Tratar apenas a insônia.'], correct: 1, explanation: 'Reduzir PrPᶜ pode diminuir o substrato usado na conversão priônica. A estratégia é promissora em modelos, mas ION717 ainda está em ensaio clínico e não é uma cura aprovada.' }
];

const flashcards = [
  ['Qual é a diferença central entre CJD clássica e vCJD?', 'São entidades distintas: a vCJD está associada à exposição à BSE, enquanto a maioria da CJD clássica surge de forma esporádica.'],
  ['O que “iatrogênica” quer dizer?', 'Que a transmissão está relacionada a uma intervenção de saúde. Na CJD, são eventos muito raros e ligados a materiais ou procedimentos específicos.'],
  ['Por que MRI não é um diagnóstico isolado?', 'Porque achados de MRI podem apoiar a suspeita, mas o diagnóstico depende do conjunto clínico e da exclusão de outras causas.'],
  ['O que é RT-QuIC?', 'Um teste do líquor que pode detectar atividade relacionada a príons. Ele é interpretado em conjunto com a história e outros exames.'],
  ['Insônia fatal é o mesmo que insônia comum?', 'Não. As formas priônicas são raríssimas e envolvem um quadro neurológico progressivo. Insônia comum tem muitas outras causas.'],
  ['Qual é a ideia-chave sobre BSE?', 'BSE é uma doença de bovinos. A vCJD é a condição humana distinta que foi associada à exposição ao agente da BSE.'],
  ['O que uma eventual cura provavelmente precisaria fazer?', 'Idealmente, combinar redução de PrPᶜ, bloqueio ou remoção de PrPˢᶜ e proteção do neurônio — além de agir cedo. Isso é uma hipótese de pesquisa, não um tratamento disponível.']
];

const compareFields = [
  ['Tipo / origem', 'origin'],
  ['Resumo', 'summary'],
  ['Padrão clínico', 'facts', 1],
  ['É animal ou humana?', 'species'],
  ['O que não confundir', 'distinction']
];

const diseaseById = Object.fromEntries(diseases.map((disease) => [disease.id, disease]));

diseases.forEach((disease) => {
  disease.species = disease.id === 'bse' ? 'Animal' : 'Humana';
  disease.distinction = disease.id === 'vcjd' ? 'Não é a mesma coisa que CJD clássica.' : disease.id === 'bse' ? 'Não é uma doença humana.' : 'Sintomas não são exclusivos desta condição.';
});

const diseaseGrid = document.querySelector('#disease-grid');
const emptyState = document.querySelector('#empty-state');
const searchInput = document.querySelector('#disease-search');
let activeFilter = 'all';

function renderDiseaseCards() {
  const term = searchInput.value.trim().toLowerCase();
  const visible = diseases.filter((disease) => {
    const matchesFilter = activeFilter === 'all' || disease.filters.includes(activeFilter);
    const searchable = [disease.title, disease.code, disease.type, disease.origin, disease.summary].join(' ').toLowerCase();
    return matchesFilter && searchable.includes(term);
  });
  diseaseGrid.innerHTML = visible.map((disease) => `
    <article class="disease-card ${disease.featured ? 'featured' : ''}">
      <div class="card-top"><span class="type-label">${disease.type}</span><span class="disease-code">${disease.code}</span></div>
      <h3>${disease.title}</h3>
      <p>${disease.summary}</p>
      <div class="card-footer"><span class="origin">${disease.origin}</span><button class="open-card" type="button" data-open="${disease.id}">ver ficha ↗</button></div>
    </article>
  `).join('');
  emptyState.hidden = visible.length > 0;
}

const neuroById = Object.fromEntries(neuroCatalog.map((item) => [item.id, item]));
const neuroGrid = document.querySelector('#neuro-grid');
const neuroEmptyState = document.querySelector('#neuro-empty-state');
const neuroSearch = document.querySelector('#neuro-search');
let activeNeuroFilter = 'all';

function renderNeuroCards() {
  const term = neuroSearch.value.trim().toLowerCase();
  const visible = neuroCatalog.filter((item) => {
    const matchesFilter = activeNeuroFilter === 'all' || item.filters.includes(activeNeuroFilter);
    const searchable = [item.title, item.code, item.area, item.summary, item.detail].join(' ').toLowerCase();
    return matchesFilter && searchable.includes(term);
  });
  neuroGrid.innerHTML = visible.map((item) => `
    <article class="neuro-card">
      <div class="neuro-card-top"><span class="neuro-area">${item.area}</span><span class="disease-code">${item.code}</span></div>
      <h3>${item.title}</h3><p>${item.summary}</p>
      <div class="neuro-card-footer"><span>área: ${item.area.toLowerCase()}</span><button type="button" data-neuro-open="${item.id}">ver ficha ↗</button></div>
    </article>
  `).join('');
  neuroEmptyState.hidden = visible.length > 0;
}

neuroSearch.addEventListener('input', renderNeuroCards);
document.querySelectorAll('.neuro-filter').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.neuro-filter').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    activeNeuroFilter = button.dataset.neuroFilter;
    renderNeuroCards();
  });
});

searchInput.addEventListener('input', renderDiseaseCards);
document.querySelectorAll('.filter-pill').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-pill').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    activeFilter = button.dataset.filter;
    renderDiseaseCards();
  });
});

const compareA = document.querySelector('#compare-a');
const compareB = document.querySelector('#compare-b');
diseases.forEach((disease) => {
  compareA.add(new Option(disease.title, disease.id));
  compareB.add(new Option(disease.title, disease.id));
});
compareA.value = 'cjd';
compareB.value = 'vcjd';

function renderComparison() {
  const first = diseaseById[compareA.value];
  const second = diseaseById[compareB.value];
  document.querySelector('#comparison-table').innerHTML = compareFields.map(([label, key, factIndex]) => {
    const getValue = (disease) => {
      if (key === 'facts') return disease.facts[factIndex][1];
      return disease[key];
    };
    return `<div class="comparison-row"><div>${label}</div><div>${key === 'origin' || key === 'species' || key === 'distinction' ? `<strong>${getValue(first)}</strong>` : `<p>${getValue(first)}</p>`}</div><div>${key === 'origin' || key === 'species' || key === 'distinction' ? `<strong>${getValue(second)}</strong>` : `<p>${getValue(second)}</p>`}</div></div>`;
  }).join('');
}
compareA.addEventListener('change', renderComparison);
compareB.addEventListener('change', renderComparison);

const dialog = document.querySelector('#detail-dialog');
const dialogContent = document.querySelector('#dialog-content');
function openDetail(id) {
  const disease = diseaseById[id];
  if (!disease) return;
  dialogContent.innerHTML = `<div class="dialog-body"><p class="kicker">ficha de estudo · ${disease.code}</p><h2>${disease.title}</h2><p>${disease.detail}</p><div class="dialog-facts">${disease.facts.map(([label, value]) => `<div class="dialog-fact"><strong>${label}</strong><span>${value}</span></div>`).join('')}</div></div>`;
  dialog.showModal();
}
document.addEventListener('click', (event) => {
  const opener = event.target.closest('[data-open]');
  if (opener && diseaseById[opener.dataset.open]) openDetail(opener.dataset.open);
  const neuroOpener = event.target.closest('[data-neuro-open]');
  if (neuroOpener) {
    const item = neuroById[neuroOpener.dataset.neuroOpen];
    if (item) {
      dialogContent.innerHTML = `<div class="dialog-body"><p class="kicker">atlas neurológico · ${item.code}</p><h2>${item.title}</h2><p>${item.detail}</p><div class="dialog-facts">${item.facts.map(([label, value]) => `<div class="dialog-fact"><strong>${label}</strong><span>${value}</span></div>`).join('')}</div></div>`;
      dialog.showModal();
    }
  }
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });

const specialDetails = {
  cjd: diseaseById.cjd,
  vcjd: diseaseById.vcjd,
  sinais: { title: 'Sinais e investigação', code: 'CLÍNICA', detail: 'Sintomas como demência rapidamente progressiva, ataxia, mioclonias, alterações visuais ou psiquiátricas podem aparecer. Nenhum deles, isoladamente, confirma CJD. A investigação precisa considerar outras causas e ser conduzida por uma equipe especializada.', facts: [['Observe', 'Velocidade de progressão e combinação de sinais importam mais do que uma palavra isolada.'], ['Investigue', 'MRI, EEG e líquor podem contribuir para a avaliação clínica.'], ['Proteja', 'Informação não substitui consulta; sintomas neurológicos novos ou progressivos precisam de avaliação.']] }
};
document.querySelectorAll('.mini-card .card-link').forEach((button) => {
  button.addEventListener('click', () => {
    if (specialDetails[button.dataset.open]) {
      const item = specialDetails[button.dataset.open];
      dialogContent.innerHTML = `<div class="dialog-body"><p class="kicker">ficha de estudo · ${item.code}</p><h2>${item.title}</h2><p>${item.detail}</p><div class="dialog-facts">${item.facts.map(([label, value]) => `<div class="dialog-fact"><strong>${label}</strong><span>${value}</span></div>`).join('')}</div></div>`;
      dialog.showModal();
    }
  });
});

let quizIndex = 0;
let score = 0;
let quizAnswered = false;
const quizContent = document.querySelector('#quiz-content');
const quizProgressLabel = document.querySelector('#quiz-progress-label');
const quizScoreLabel = document.querySelector('#quiz-score-label');
const quizProgressBar = document.querySelector('#quiz-progress-bar');
function renderQuiz() {
  if (quizIndex >= quizQuestions.length) {
    quizProgressLabel.textContent = 'Revisão concluída';
    quizScoreLabel.textContent = `${score} de ${quizQuestions.length}`;
    quizProgressBar.style.width = '100%';
    quizContent.innerHTML = `<div class="quiz-result"><div><strong>${score}/${quizQuestions.length}</strong><p>${score >= 4 ? 'Boa leitura: você separou bem os conceitos.' : 'Vale mais uma rodada: volte às fichas e tente novamente.'}</p><button class="quiz-restart" type="button" id="quiz-restart">refazer quiz</button></div></div>`;
    document.querySelector('#quiz-restart').addEventListener('click', () => { quizIndex = 0; score = 0; quizAnswered = false; renderQuiz(); });
    return;
  }
  const current = quizQuestions[quizIndex];
  quizAnswered = false;
  quizProgressLabel.textContent = `Questão ${quizIndex + 1} de ${quizQuestions.length}`;
  quizScoreLabel.textContent = `${score} acertos`;
  quizProgressBar.style.width = `${((quizIndex + 1) / quizQuestions.length) * 100}%`;
  quizContent.innerHTML = `<p class="quiz-question">${current.question}</p><div class="answer-list">${current.answers.map((answer, index) => `<button class="answer-button" type="button" data-answer="${index}">${answer}</button>`).join('')}</div>`;
  quizContent.querySelectorAll('.answer-button').forEach((button) => button.addEventListener('click', () => answerQuiz(Number(button.dataset.answer))));
}
function answerQuiz(answer) {
  if (quizAnswered) return;
  quizAnswered = true;
  const current = quizQuestions[quizIndex];
  if (answer === current.correct) score += 1;
  quizContent.querySelectorAll('.answer-button').forEach((button, index) => {
    button.disabled = true;
    if (index === current.correct) button.classList.add('correct');
    else if (index === answer) button.classList.add('incorrect');
  });
  quizContent.insertAdjacentHTML('beforeend', `<p class="quiz-explanation">${current.explanation}</p><button class="quiz-next" type="button">${quizIndex === quizQuestions.length - 1 ? 'ver resultado' : 'próxima questão'} →</button>`);
  quizContent.querySelector('.quiz-next').addEventListener('click', () => { quizIndex += 1; renderQuiz(); });
}

let flashIndex = 0;
const flashcard = document.querySelector('#flashcard');
function renderFlashcard() {
  document.querySelector('#flashcard-count').textContent = `${String(flashIndex + 1).padStart(2, '0')} / ${String(flashcards.length).padStart(2, '0')}`;
  document.querySelector('#flashcard-front').textContent = flashcards[flashIndex][0];
  document.querySelector('#flashcard-back').textContent = flashcards[flashIndex][1];
  flashcard.classList.remove('flipped');
}
flashcard.addEventListener('click', () => flashcard.classList.toggle('flipped'));
flashcard.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); flashcard.classList.toggle('flipped'); } });
document.querySelector('#next-flashcard').addEventListener('click', () => { flashIndex = (flashIndex + 1) % flashcards.length; renderFlashcard(); });

const checklistItems = ['Explicar o que é um príon', 'Diferenciar CJD de vCJD', 'Citar duas formas de investigação', 'Descrever o foco do cuidado'];
const checklist = document.querySelector('#checklist');
const checklistKey = 'prionlab-checklist';
let checkedItems = JSON.parse(localStorage.getItem(checklistKey) || '[]');
function renderChecklist() {
  checklist.innerHTML = checklistItems.map((item, index) => `<label class="check-item ${checkedItems.includes(index) ? 'checked' : ''}"><input type="checkbox" data-check="${index}" ${checkedItems.includes(index) ? 'checked' : ''}/><span>${item}</span></label>`).join('');
  document.querySelector('#checklist-status').textContent = `${checkedItems.length} de ${checklistItems.length} concluídos`;
  checklist.querySelectorAll('input').forEach((input) => input.addEventListener('change', () => {
    const index = Number(input.dataset.check);
    checkedItems = input.checked ? [...new Set([...checkedItems, index])] : checkedItems.filter((item) => item !== index);
    localStorage.setItem(checklistKey, JSON.stringify(checkedItems));
    renderChecklist();
  }));
}
document.querySelector('#reset-checklist').addEventListener('click', () => { checkedItems = []; localStorage.removeItem(checklistKey); renderChecklist(); });

const glossaryList = document.querySelector('#glossary-list');
function renderGlossary(term = '') {
  const normalized = term.trim().toLowerCase();
  const items = glossary.filter(([title, definition]) => `${title} ${definition}`.toLowerCase().includes(normalized));
  glossaryList.innerHTML = items.map(([title, definition], index) => `<div class="glossary-item ${index === 0 && !normalized ? 'open' : ''}"><button class="glossary-trigger" type="button"><span class="glossary-term">${String(index + 1).padStart(2, '0')} / termo</span><span class="glossary-short">${title}</span><span class="glossary-symbol">+</span></button><div class="glossary-answer">${definition}</div></div>`).join('');
  glossaryList.querySelectorAll('.glossary-trigger').forEach((button) => button.addEventListener('click', () => button.parentElement.classList.toggle('open')));
}
document.querySelector('#glossary-search').addEventListener('input', (event) => renderGlossary(event.target.value));

document.querySelector('.nav-toggle').addEventListener('click', (event) => {
  const expanded = event.currentTarget.getAttribute('aria-expanded') === 'true';
  event.currentTarget.setAttribute('aria-expanded', String(!expanded));
  document.querySelector('.main-nav').classList.toggle('open');
});
document.querySelectorAll('[data-scroll-to]').forEach((button) => button.addEventListener('click', () => document.getElementById(button.dataset.scrollTo)?.scrollIntoView({ behavior: 'smooth' })));
document.querySelectorAll('.main-nav a').forEach((link) => link.addEventListener('click', () => document.querySelector('.main-nav').classList.remove('open')));

renderDiseaseCards();
renderNeuroCards();
renderComparison();
renderQuiz();
renderFlashcard();
renderChecklist();
renderGlossary();
