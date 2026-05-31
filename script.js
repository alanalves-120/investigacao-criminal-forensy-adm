/* ══════════════════════════════════════════════
   CASO LINHA VERMELHA — script.js
══════════════════════════════════════════════ */

const DOSSIÊS = {
  alana:{
    badge:'DOSSIÊ I · INTRODUÇÃO À INVESTIGAÇÃO CRIMINAL',
    name:'Alana & Laura',photo:'fotos/alana.jpeg',
    sub:'Introdução à Investigação Criminal',
    team:'🔦 Alana & Laura',req:true,
    text:`Antes de começar, deixa eu perguntar uma coisa: quem aqui gosta de séries de investigação, documentários criminais ou podcasts de crimes reais? Muita gente gosta porque tenta entender o que aconteceu, ligar pistas e descobrir quem está por trás do caso.

Mas na vida real, uma investigação criminal não funciona como nas séries. Os casos não são resolvidos em poucos minutos, e os investigadores não trabalham apenas com suspeitas. Tudo precisa ser analisado através de evidências, padrões e métodos científicos.

É justamente aí que entra a <strong>ciência forense</strong>.

A ciência forense utiliza áreas como biologia, química, medicina, tecnologia e psicologia para analisar vestígios e reconstruir acontecimentos dentro de uma investigação criminal.

E diferente do que muita gente imagina, os casos não começam encontrando o culpado. Eles começam com perguntas:

— O que aconteceu?
— Como aconteceu?
— Quem esteve naquele local?
— O que as evidências revelam?
— E principalmente: o que pode ser comprovado cientificamente?

A partir dessas perguntas, começa o processo investigativo. Cada detalhe passa a importar: comportamentos, vestígios físicos, padrões, registros digitais e até pequenas evidências que poderiam passar despercebidas.

E para mostrar como tudo isso funciona na prática, nós criamos um <strong>caso fictício interativo</strong> inspirado em métodos reais da investigação forense.`
  },

  gaby:{
    badge:'DOSSIÊ II · PERÍCIA BIOLÓGICA & DNA',
    name:'Gaby & Bia',photo:'fotos/gaby.jpeg',
    sub:'Perícia Biológica e DNA',
    team:'🧬 Gaby Fonseca & Bianca',req:true,
    text:`A perícia biológica é responsável por analisar vestígios deixados pelo corpo humano em uma investigação criminal. Esses vestígios podem estar presentes em sangue, saliva, fios de cabelo, suor, unhas, tecidos e diversos outros materiais encontrados na cena do crime.

A partir dessas amostras, os peritos conseguem extrair o <strong>DNA</strong>, que funciona como uma espécie de identidade biológica. Com exceção de gêmeos idênticos, cada pessoa possui uma combinação genética única, o que torna o DNA uma das formas mais seguras de identificação humana.

Mas o trabalho da perícia não acontece de forma simples como muitas séries mostram. Antes da análise, os vestígios precisam ser coletados cuidadosamente para evitar contaminações. Por isso, os peritos utilizam luvas, máscaras, embalagens específicas e protocolos rigorosos para preservar o material biológico encontrado.

Mesmo pequenas quantidades de material genético podem ser suficientes para uma análise. Uma gota de sangue, saliva deixada em um copo ou células presentes em um fio de cabelo podem permitir a identificação de uma pessoa através da comparação genética.

Depois da coleta, o DNA extraído é analisado em laboratório e comparado com amostras de suspeitos, vítimas ou bancos de dados forenses. Através dessa comparação, os investigadores conseguem estabelecer vínculos entre pessoas, objetos e a cena do crime.

Outro ponto importante é que o DNA nem sempre deve ser analisado sozinho. Existe algo chamado <strong>transferência secundária</strong>, que acontece quando o material genético de uma pessoa é transferido indiretamente para um objeto. Isso significa que encontrar o DNA de alguém em um local <em>não prova automaticamente sua culpa</em>.

Além de ajudar na identificação de criminosos, a perícia biológica também é utilizada para reconhecer vítimas, solucionar casos antigos e até inocentar pessoas acusadas injustamente.

Assim, a análise de DNA se tornou uma das ferramentas mais precisas da ciência forense, transformando pequenos vestígios biológicos em evidências fundamentais para a busca da verdade.`
  },

  julia:{
    badge:'DOSSIÊ III · IMPRESSÕES DIGITAIS & EVIDÊNCIAS FÍSICAS',
    name:'Julia & Rafa',photo:'fotos/julia.jpeg',
    sub:'Impressões Digitais e Evidências Físicas',
    team:'🩹 Julia & Rafaela dos Passos',req:true,
    text:`As impressões digitais são consideradas uma das formas mais seguras de identificação humana, porque cada pessoa possui padrões únicos nos dedos. A área responsável pelo estudo dessas marcas é chamada de <strong>papiloscopia</strong>.

Os peritos analisam detalhes presentes nas digitais, como as cristas papilares e as minúcias, que são pequenas características usadas para comparar uma impressão encontrada na cena do crime com a de um suspeito.

Existem diferentes tipos de digitais. Algumas são visíveis, como marcas deixadas com sangue, tinta ou sujeira. Outras são chamadas de impressões latentes, que normalmente não podem ser vistas a olho nu e precisam ser reveladas com técnicas específicas, como pó revelador, luz forense e produtos químicos.

<em>( Mostrar na prática com o pó )</em>

Além das digitais, os peritos também analisam evidências físicas deixadas no local do crime, como fios de cabelo, pegadas, manchas de sangue, fibras de roupa, objetos quebrados e até partículas microscópicas.

A tecnologia forense também possui um papel importante nesse processo. Atualmente, softwares de comparação digital, bancos de dados, análise de DNA e imagens de câmeras de segurança ajudam os investigadores a cruzar informações com mais rapidez e precisão.

Mas para que todas essas provas tenham validade, a coleta precisa ser feita corretamente. Por isso, os peritos utilizam luvas, embalagens apropriadas e protocolos rigorosos para evitar contaminações e preservar a chamada <strong>cadeia de custódia</strong>, que garante que a evidência permaneça intacta desde a coleta até a análise no laboratório.

Assim, as impressões digitais, as evidências físicas e a tecnologia forense trabalham juntas para transformar vestígios em provas científicas, auxiliando diretamente na solução de crimes.`
  },

  keth:{
    badge:'DOSSIÊ IV · PSICOLOGIA CRIMINAL',
    name:'Keth & Luan',photo:'fotos/keth.jpeg',
    sub:'Psicologia Criminal e Análise Comportamental',
    team:'🧠 Kethelyn & Luan',req:true,
    text:`Vamos falar sobre psicologia criminal e análise comportamental, uma área que busca entender não apenas o que aconteceu em um crime, mas principalmente <strong>por que</strong> aquilo aconteceu.

Diferente do que muitas pessoas imaginam, a psicologia criminal não funciona como uma "leitura da mente" do criminoso. Ela utiliza estudos sobre comportamento humano, neurociência e padrões psicológicos para analisar ações, motivações e possíveis perfis envolvidos em uma investigação.

Um dos pontos mais importantes nessa análise é o funcionamento do cérebro. Áreas como o <strong>córtex pré-frontal</strong> e a <strong>amígdala cerebral</strong> possuem relação direta com comportamento, impulsividade, emoções e tomada de decisões.

O córtex pré-frontal é responsável por funções como controle emocional, planejamento, raciocínio lógico e noção de consequências. Alterações nessa região podem afetar impulsividade, agressividade e capacidade de autocontrole.

Já a amígdala cerebral está ligada ao processamento das emoções, principalmente medo, ameaça e respostas emocionais intensas.

Outro fator importante é a <strong>dopamina</strong>, neurotransmissor relacionado ao sistema de recompensa do cérebro. Situações de risco, poder, controle ou violência podem estimular esse sistema em alguns indivíduos, criando padrões repetitivos de comportamento.

O comportamento criminal normalmente surge da <em>combinação entre fatores neurológicos, psicológicos, sociais e ambientais</em>.

Dentro das investigações, os analistas comportamentais observam padrões como:
— impulsividade ou planejamento excessivo
— dificuldade de empatia e manipulação social
— necessidade de controle e frieza emocional
— repetição de métodos e escolha específica de vítimas

Existe também uma diferença importante entre <strong>modus operandi</strong> (forma prática do crime) e <strong>assinatura criminal</strong> (comportamento com significado emocional que se repete).

Por isso, a psicologia criminal é tão importante: ela transforma comportamentos e padrões em informações que auxiliam diretamente na solução de crimes.`
  },

  emili:{
    badge:'DOSSIÊ V · IDENTIFICAÇÃO FORENSE',
    name:'Sofia & Emili',photo:'fotos/emili.jpeg',
    sub:'Identificação Forense',
    team:'🔬 Sofia & Emili',req:true,
    text:`Vamos falar sobre a <strong>identificação forense</strong>, uma das áreas mais importantes da ciência forense.

A identificação forense é responsável por descobrir a identidade de uma pessoa através de evidências biológicas e físicas, principalmente em casos criminais, acidentes e desastres.

Para isso, os peritos analisam características únicas do corpo humano, como impressões digitais, estrutura óssea, arcada dentária e reconhecimento facial.

Quando o corpo está em avançado estado de decomposição, entra a <strong>antropologia forense</strong>, área que utiliza os ossos para reconstruir o perfil biológico da vítima. Através da análise óssea, é possível estimar idade, altura, sexo biológico e até identificar sinais de fraturas, traumas ou violência antes da morte.

Na diferenciação entre esqueletos masculinos e femininos, a <strong>pelve</strong> é uma das estruturas mais importantes. A pelve feminina costuma ser mais larga e com maior abertura pélvica, enquanto a masculina apresenta uma estrutura mais estreita e robusta.

Outro método muito utilizado é a <strong>odontologia forense</strong>. Os dentes possuem grande resistência física e química, conseguindo permanecer preservados mesmo em incêndios ou decomposição extrema. Por isso, os peritos realizam comparações entre a arcada dentária da vítima e registros odontológicos, como radiografias e prontuários.

Além das investigações criminais, a identificação forense também é fundamental em acidentes aéreos, desastres naturais e casos de pessoas desaparecidas.

Assim, a identificação forense combina ciência, biologia e investigação para <em>transformar vestígios em respostas concretas para a justiça</em>.`
  },

  nayme:{
    badge:'DOSSIÊ VI · RECONSTRUÇÃO DO CASO',
    name:'Nay & Jhulie',photo:'fotos/nayme.jpeg',
    sub:'Reconstrução do Caso + Interação com o Público',
    team:'🕶️ Nayme & Jhulie',req:true,
    text:`Agora a investigação entra em uma das etapas mais importantes: a <strong>reconstrução do caso</strong>.

Depois que todas as evidências são analisadas, os investigadores começam a conectar as informações encontradas para entender o que realmente aconteceu.

Nenhuma prova resolve o caso sozinha. Uma impressão digital isolada, uma câmera de segurança ou uma amostra de DNA podem indicar caminhos, mas é a <em>ligação entre todas as evidências</em> que permite reconstruir a história do crime.

Por isso, diferentes áreas trabalham juntas durante a investigação:

— A perícia analisa os vestígios encontrados na cena.
— A medicina legal ajuda a identificar lesões, causas da morte e informações sobre a vítima.
— Os investigadores cruzam provas, depoimentos e conexões entre suspeitos.
— A psicologia criminal auxilia na análise de comportamentos e possíveis padrões do criminoso.

Com todas essas informações reunidas, os investigadores conseguem reconstruir os acontecimentos e entender o que ocorreu antes, durante e depois do crime.

<strong>E é exatamente isso que vamos fazer agora.</strong>

A partir das pistas encontradas ao longo da apresentação, vamos analisar os suspeitos envolvidos no caso e tentar descobrir quem realmente está por trás dos acontecimentos.

Porque em uma investigação criminal, aparência, comportamento e até álibis podem enganar.

<em>O que realmente define a verdade são as evidências.</em>`
  }
};

/* ── PROGRESSO ── */
const REQ = Object.entries(DOSSIÊS).filter(([,v])=>v.req).map(([k])=>k);
const seen = new Set();
function markSeen(k){
  if(REQ.includes(k)) seen.add(k);
  const n=seen.size,t=REQ.length;
  document.getElementById('hud-n').textContent=n;
  document.getElementById('hud-fill').style.width=(n/t*100)+'%';
}

/* ── MODAL ── */
function openModal(key){
  const d=DOSSIÊS[key]; if(!d) return;
  markSeen(key);
  document.getElementById('modal-badge').textContent=d.badge;
  const ph=d.photo?`<div class="mh-photo" style="background-image:url('${d.photo}')"></div>`:'';
  document.getElementById('modal-body').innerHTML=`
    <div class="mh">
      ${ph}
      <div>
        <div class="mh-title">${d.name}</div>
        <div class="mh-sub">${d.sub}</div>
        <div class="mh-team">${d.team}</div>
      </div>
    </div>
    <div class="m-text">${d.text.replace(/\n/g,'<br>')}</div>`;
  document.getElementById('modal-ov').classList.add('on');
  document.body.style.overflow='hidden';
  document.getElementById('modal').scrollTop=0;
}
function closeModal(){
  document.getElementById('modal-ov').classList.remove('on');
  document.body.style.overflow='';
}
document.getElementById('modal-ov').addEventListener('click',e=>{
  if(e.target===document.getElementById('modal-ov')) closeModal();
});
document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeModal(); });

/* ── CLIQUES ── */
document.querySelectorAll('[data-key]').forEach(el=>{
  // doc-center não tem mais data-key, então só as polaroids
  el.addEventListener('click',e=>{ e.stopPropagation(); openModal(el.dataset.key); });
});

/* ── LIGHTBOX — clicar na foto da polaroid amplia ── */
function openLightbox(src){
  const lb=document.getElementById('lightbox');
  const img=document.getElementById('lightbox-img');
  img.src=src;
  lb.classList.add('on');
  document.body.style.overflow='hidden';
}
function closeLightbox(){
  document.getElementById('lightbox').classList.remove('on');
  document.body.style.overflow='';
}
window.closeLightbox=closeLightbox;

document.querySelectorAll('.dp-photo').forEach(el=>{
  el.style.cursor='zoom-in';
  el.addEventListener('click',e=>{
    e.stopPropagation();
    const bg=el.style.backgroundImage;
    const match=bg.match(/url\(['"]?([^'"]+)['"]?\)/);
    if(match && match[1] && !match[1].includes('undefined')){
      openLightbox(match[1]);
    }
  });
});

/* ── ENTER SITE ── */
function enterSite(){
  const cover=document.getElementById('cover');
  cover.style.transition='opacity .8s,visibility .8s';
  cover.classList.add('gone');
  setTimeout(()=>{
    cover.style.display='none';
    const interior=document.getElementById('interior');
    interior.style.display='block';
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      interior.classList.add('show');
      setTimeout(()=>{ animateCards(); drawDeskLines(); }, 400);
    }));
  },850);
}
window.enterSite=enterSite;

/* ── ROTAÇÕES E HOVER DOS CARDS ── */
function applyRot(){
  document.querySelectorAll('.d-polaroid').forEach(el=>{
    const rot=parseFloat(el.dataset.rot)||0;
    el.style.transform=`rotate(${rot}deg)`;
    el.addEventListener('mouseenter',()=>{
      el.style.transition='transform .25s cubic-bezier(.34,1.56,.64,1),box-shadow .25s';
      el.style.transform=`rotate(0deg) scale(1.1) translateY(-8px)`;
      el.style.boxShadow='8px 16px 48px rgba(0,0,0,.9),0 0 30px rgba(192,57,43,.2)';
    });
    el.addEventListener('mouseleave',()=>{
      el.style.transition='transform .3s cubic-bezier(.34,1.56,.64,1),box-shadow .3s';
      el.style.transform=`rotate(${rot}deg)`;
      el.style.boxShadow='';
    });
  });
}
applyRot();

/* ── ANIMAÇÃO ENTRADA CARDS ── */
function animateCards(){
  document.querySelectorAll('.d-polaroid').forEach((el,i)=>{
    const rot=parseFloat(el.dataset.rot)||0;
    el.style.opacity='0';
    el.style.transform=`rotate(${rot}deg) translateY(30px) scale(.9)`;
    el.style.transition='none';
    setTimeout(()=>{
      el.style.transition='opacity .5s ease, transform .5s cubic-bezier(.34,1.56,.64,1)';
      el.style.opacity='1';
      el.style.transform=`rotate(${rot}deg)`;
    }, i*120+100);
  });
}

/* ── LINHAS DA CAPA — saem do pin real ── */
function drawCoverLines(){
  const svg=document.getElementById('cover-svg');
  const frame=document.getElementById('cover-frame');
  if(!svg||!frame) return;
  svg.innerHTML='';
  const fr=frame.getBoundingClientRect();

  /* pega centro do pin de um elemento */
  const getPinC=id=>{
    const el=document.getElementById(id); if(!el) return null;
    const pin=el.querySelector('.cpin');
    if(pin){
      const pr=pin.getBoundingClientRect();
      return{x:pr.left-fr.left+pr.width/2, y:pr.top-fr.top+pr.height/2};
    }
    const r=el.getBoundingClientRect();
    return{x:r.left-fr.left+r.width/2, y:r.top-fr.top+r.height/2};
  };

  const poster=getPinC('c-poster');
  const pols=['cp-alana','cp-gaby','cp-julia','cp-keth','cp-emili','cp-nayme'];

  pols.forEach((id,i)=>{
    const c=getPinC(id); if(!c||!poster) return;
    const mx=(c.x+poster.x)/2;
    const my=(c.y+poster.y)/2 - 20;
    const p=document.createElementNS('http://www.w3.org/2000/svg','path');
    p.setAttribute('d',`M ${c.x} ${c.y} Q ${mx} ${my} ${poster.x} ${poster.y}`);
    p.setAttribute('fill','none');
    p.setAttribute('stroke','#c0392b');
    p.setAttribute('stroke-width','1.5');
    p.setAttribute('stroke-opacity','0.8');
    const len=700;
    p.style.strokeDasharray=len;
    p.style.strokeDashoffset=len;
    p.style.transition=`stroke-dashoffset ${1+i*0.15}s ease ${i*0.1}s`;
    svg.appendChild(p);
    requestAnimationFrame(()=>requestAnimationFrame(()=>{ p.style.strokeDashoffset='0'; }));
  });
}

/* ── LINHAS DA MESA (fios saem do PIN real de cada card) ── */
function drawDeskLines(){
  const svg=document.getElementById('desk-svg');
  const scene=document.getElementById('scene');
  if(!svg||!scene) return;
  svg.innerHTML='';
  const w=scene.offsetWidth, h=scene.offsetHeight;
  svg.setAttribute('viewBox',`0 0 ${w} ${h}`);
  const sr=scene.getBoundingClientRect();

  /* pega centro de qualquer elemento relativo ao scene */
  const getC=id=>{
    const el=document.getElementById(id); if(!el) return null;
    const er=el.getBoundingClientRect();
    return{x:er.left-sr.left+er.width/2, y:er.top-sr.top+er.height/2};
  };

  /* pega posição do PIN (primeiro filho .dpin) do card */
  const getPinC=id=>{
    const card=document.getElementById(id); if(!card) return null;
    const pin=card.querySelector('.dpin');
    if(!pin) return getC(id);
    const pr=pin.getBoundingClientRect();
    return{x:pr.left-sr.left+pr.width/2, y:pr.top-sr.top+pr.height/2};
  };

  /* pega pin do doc-center (primeiro .dpin filho) */
  const centerPin=getPinC('doc-center');
  if(!centerPin) return;

  const cards=['dp-alana','dp-gaby','dp-julia','dp-keth','dp-emili','dp-nayme'];

  cards.forEach((id,i)=>{
    const pin=getPinC(id); if(!pin) return;

    /* curva leve e controlada — ponto de controle levemente para cima do meio,
       sem random para não cruzar sobre as fotos */
    const mx=(pin.x+centerPin.x)/2;
    const my=(pin.y+centerPin.y)/2 - 30; /* leve arco para cima */

    /* fio principal */
    const path=document.createElementNS('http://www.w3.org/2000/svg','path');
    path.setAttribute('d',`M ${pin.x} ${pin.y} Q ${mx} ${my} ${centerPin.x} ${centerPin.y}`);
    path.setAttribute('fill','none');
    path.setAttribute('stroke','#c0392b');
    path.setAttribute('stroke-width','1.8');
    path.setAttribute('stroke-opacity','0.75');
    const len=900;
    path.style.strokeDasharray=len;
    path.style.strokeDashoffset=len;
    path.style.transition=`stroke-dashoffset 1.3s ease ${i*0.12}s`;
    svg.appendChild(path);

    requestAnimationFrame(()=>requestAnimationFrame(()=>{ path.style.strokeDashoffset='0'; }));
  });

  /* fio extra: alana ↔ gaby */
  const pa=getPinC('dp-alana'), pg=getPinC('dp-gaby');
  if(pa&&pg){
    const l=document.createElementNS('http://www.w3.org/2000/svg','line');
    l.setAttribute('x1',pa.x);l.setAttribute('y1',pa.y);
    l.setAttribute('x2',pg.x);l.setAttribute('y2',pg.y);
    l.setAttribute('stroke','#c0392b');l.setAttribute('stroke-width','1.3');
    l.setAttribute('stroke-opacity','0.4');
    svg.appendChild(l);
  }
  /* fio extra: keth ↔ emili */
  const pk=getPinC('dp-keth'), pe=getPinC('dp-emili');
  if(pk&&pe){
    const l=document.createElementNS('http://www.w3.org/2000/svg','line');
    l.setAttribute('x1',pk.x);l.setAttribute('y1',pk.y);
    l.setAttribute('x2',pe.x);l.setAttribute('y2',pe.y);
    l.setAttribute('stroke','#c0392b');l.setAttribute('stroke-width','1.3');
    l.setAttribute('stroke-opacity','0.4');
    svg.appendChild(l);
  }
}

window.addEventListener('resize',()=>{ drawCoverLines(); drawDeskLines(); });

/* ── INIT ── */
window.addEventListener('load',()=>{ setTimeout(drawCoverLines, 600); });


/* ══════════════════════════════════════════════
   SISTEMA DE SOM — Web Audio API (sem arquivos externos)
══════════════════════════════════════════════ */

let audioCtx = null;
let ambienceNode = null;
let ambienceGain = null;
let muteBtn = null;
let isMuted = false;

/* Cria o AudioContext após interação do usuário */
function getAudioCtx(){
  if(!audioCtx){
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if(audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

/* ── SOM DE PAPEL ── */
function soundPaper(){
  if(isMuted) return;
  const ctx = getAudioCtx();
  const buf = ctx.createBuffer(1, ctx.sampleRate * 0.18, ctx.sampleRate);
  const data = buf.getChannelData(0);
  for(let i=0;i<data.length;i++){
    /* ruído branco com envelope de decaimento */
    const env = Math.pow(1 - i/data.length, 1.8);
    data[i] = (Math.random()*2-1) * env * 0.55;
  }
  /* filtro passa-alta para dar caráter de papel/farfalhar */
  const src = ctx.createBufferSource();
  src.buffer = buf;
  const filter = ctx.createBiquadFilter();
  filter.type = 'highpass';
  filter.frequency.value = 1200;
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.7, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);
  src.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  src.start();
}

/* ── SOM DE CÂMERA / FLASH ── */
function soundCamera(){
  if(isMuted) return;
  const ctx = getAudioCtx();

  /* clique mecânico — ruído curto grave */
  const bufLen = Math.floor(ctx.sampleRate * 0.06);
  const buf = ctx.createBuffer(1, bufLen, ctx.sampleRate);
  const data = buf.getChannelData(0);
  for(let i=0;i<bufLen;i++){
    const env = i < bufLen*0.1 ? i/(bufLen*0.1) : Math.pow(1-(i-bufLen*0.1)/(bufLen*0.9), 2.5);
    data[i] = (Math.random()*2-1) * env;
  }
  const src = ctx.createBufferSource();
  src.buffer = buf;
  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.value = 600;
  filter.Q.value = 0.6;
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.9, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
  src.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  src.start();

  /* "motor" do flash — tom agudo brevíssimo depois do clique */
  setTimeout(()=>{
    const ctx2 = getAudioCtx();
    const osc = ctx2.createOscillator();
    const g2 = ctx2.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(3200, ctx2.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, ctx2.currentTime + 0.07);
    g2.gain.setValueAtTime(0.18, ctx2.currentTime);
    g2.gain.exponentialRampToValueAtTime(0.001, ctx2.currentTime + 0.07);
    osc.connect(g2);
    g2.connect(ctx2.destination);
    osc.start();
    osc.stop(ctx2.currentTime + 0.07);
  }, 40);

  /* efeito visual de flash na tela */
  flashEffect();
}

function flashEffect(){
  let fl = document.getElementById('camera-flash');
  if(!fl){
    fl = document.createElement('div');
    fl.id = 'camera-flash';
    fl.style.cssText = `
      position:fixed;inset:0;background:#fff;
      pointer-events:none;z-index:9999;
      opacity:0;transition:opacity 0.04s;
    `;
    document.body.appendChild(fl);
  }
  fl.style.transition = 'opacity 0.04s';
  fl.style.opacity = '0.85';
  setTimeout(()=>{ fl.style.transition = 'opacity 0.25s'; fl.style.opacity = '0'; }, 40);
}

/* ── TRILHA AMBIENTE DE SUSPENSE ── */
function startAmbience(){
  if(isMuted || ambienceNode) return;
  const ctx = getAudioCtx();

  /* Master gain do ambiente */
  ambienceGain = ctx.createGain();
  ambienceGain.gain.setValueAtTime(0, ctx.currentTime);
  ambienceGain.gain.linearRampToValueAtTime(0.22, ctx.currentTime + 3);
  ambienceGain.connect(ctx.destination);

  /* Drone grave — base sinistra */
  function makeDrone(freq, gainVal, detune=0){
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = freq;
    osc.detune.value = detune;
    g.gain.value = gainVal;
    osc.connect(g);
    g.connect(ambienceGain);
    osc.start();
    return osc;
  }

  const d1 = makeDrone(55, 0.5);       /* Lá1 — grave */
  const d2 = makeDrone(55.3, 0.3, 8);  /* levíssimo detuning para bater */
  const d3 = makeDrone(82.4, 0.2);     /* Mi2 — quinta justa */
  const d4 = makeDrone(110, 0.12);     /* Lá2 — oitava acima */

  /* Ruído branco filtrado — "vento" de fundo */
  const bufSize = ctx.sampleRate * 4;
  const noiseBuf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
  const nd = noiseBuf.getChannelData(0);
  for(let i=0;i<bufSize;i++) nd[i] = Math.random()*2-1;
  const noiseLoop = ()=>{
    const ns = ctx.createBufferSource();
    ns.buffer = noiseBuf;
    ns.loop = true;
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 280;
    const ng = ctx.createGain();
    ng.gain.value = 0.06;
    ns.connect(lp);
    lp.connect(ng);
    ng.connect(ambienceGain);
    ns.start();
    return ns;
  };
  const noise = noiseLoop();

  /* Pulso LFO lento no drone — faz o grave "respirar" */
  const lfo = ctx.createOscillator();
  const lfoGain = ctx.createGain();
  lfo.type = 'sine';
  lfo.frequency.value = 0.07; /* ciclo de ~14s */
  lfoGain.gain.value = 0.15;
  lfo.connect(lfoGain);
  lfoGain.connect(ambienceGain.gain);
  lfo.start();

  /* Guarda referências para poder parar */
  ambienceNode = { oscs:[d1,d2,d3,d4,lfo], noise };
}

function stopAmbience(){
  if(!ambienceNode || !audioCtx) return;
  ambienceGain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 1.5);
  setTimeout(()=>{
    try{
      ambienceNode.oscs.forEach(o=>o.stop());
      ambienceNode.noise.stop();
    }catch(e){}
    ambienceNode = null;
  }, 1600);
}

/* ── BOTÃO MUDO ── */
function createMuteBtn(){
  muteBtn = document.createElement('button');
  muteBtn.id = 'mute-btn';
  muteBtn.innerHTML = '🔊';
  muteBtn.title = 'Silenciar / Ativar som';
  muteBtn.addEventListener('click', ()=>{
    isMuted = !isMuted;
    muteBtn.innerHTML = isMuted ? '🔇' : '🔊';
    muteBtn.classList.toggle('muted', isMuted);
    if(isMuted){
      stopAmbience();
    } else {
      startAmbience();
    }
  });
  document.body.appendChild(muteBtn);
}

/* ── INTEGRAÇÃO COM OS EVENTOS EXISTENTES ── */

/* Som de papel ao clicar nas polaroids */
document.querySelectorAll('[data-key]').forEach(el=>{
  el.addEventListener('click', soundPaper, true);
});

/* Som de câmera + flash ao abrir lightbox */
const _openLightbox = openLightbox;
window.openLightbox = function(src){
  soundCamera();
  _openLightbox(src);
};

/* Som de papel ao clicar no botão de entrar */
const enterBtnEl = document.getElementById('enter-btn');
if(enterBtnEl){
  enterBtnEl.addEventListener('click', ()=>{
    soundPaper();
    /* inicia ambiente ao entrar no site */
    setTimeout(startAmbience, 900);
  }, true);
}

/* ── INIT SONS ── */
createMuteBtn();
