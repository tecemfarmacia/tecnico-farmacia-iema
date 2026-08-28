const videoData = [
  { titulo: "Rotina do Técnico em Farmácia", descricao: "Um olhar rápido sobre o dia a dia da área.", link: "" },
  { titulo: "Biossegurança na prática", descricao: "Cuidados essenciais em laboratório e saúde.", link: "" },
  { titulo: "Educação em saúde", descricao: "Orientações simples que fazem diferença.", link: "" }
];

const modalData = {
  medicamentos: "O Técnico em Farmácia apoia a organização e a rotina relacionada aos medicamentos, sempre com responsabilidade e atenção às orientações da equipe e da legislação.",
  laboratorio: "No contexto técnico, o laboratório exige organização, higiene, identificação de materiais e respeito às boas práticas de segurança.",
  ciencia: "A Farmácia reúne ciência, saúde e tecnologia para compreender produtos, processos e o cuidado com as pessoas.",
  cuidado: "Cuidar também é orientar com clareza, respeitar limites profissionais e contribuir para o uso responsável de recursos de saúde.",
  sus: "Estuda a estrutura e os princípios do Sistema Único de Saúde, entendendo seu papel na organização da saúde pública.",
  anatomia: "Ajuda a compreender o corpo humano para relacionar estruturas, funções e necessidades de saúde.",
  seguranca: "Aborda prevenção de riscos, organização do ambiente e atitudes seguras no trabalho.",
  biosseguranca: "Reúne hábitos e normas que ajudam a proteger pessoas, materiais e ambientes.",
  micro: "Mostra como microrganismos e parasitas se relacionam com saúde, prevenção e análise.",
  legis: "Apresenta regras e princípios que orientam o funcionamento do SUS e suas práticas.",
  biofarm: "Conecta substâncias, metabolismo e mecanismos de ação dos medicamentos no organismo.",
  epi: "Analisa como os eventos de saúde se distribuem em populações e como isso ajuda no planejamento."
};

const tfData = [
  { answer: false, text: "Não. Compartilhar medicamento pode ser perigoso e inadequado." },
  { answer: false, text: "Não. Mudar dose por conta própria pode trazer riscos à saúde." },
  { answer: false, text: "Não. Medicamento vencido não deve ser usado." },
  { answer: true, text: "Sim. Conferir a validade é uma atitude básica de segurança." },
  { answer: true, text: "Sim. Seguir a conservação indicada ajuda a manter o produto adequado." }
];

const matchData = {
  micro: "Microbiologia e Parasitologia.",
  farmaco: "Bioquímica e Farmacologia.",
  epi: "Epidemiologia."
};

const discardData = {
  lixo: { ok: false, text: "Não é o destino ideal quando houver ponto de coleta apropriado. Siga as orientações locais para medicamentos vencidos ou sem uso." },
  pia: { ok: false, text: "Não. Descartar na pia ou no vaso sanitário pode contaminar água e ambiente." },
  coleta: { ok: true, text: "Correto. Medicamentos vencidos ou sem uso devem ser encaminhados conforme os sistemas de coleta existentes e orientações locais." }
};

const storeData = {
  banheiro: { ok: false, text: "Evite banheiro: umidade e variações de temperatura podem prejudicar a conservação." },
  janela: { ok: false, text: "Luz direta e calor podem comprometer o medicamento." },
  fogao: { ok: false, text: "Perto do fogão há calor excessivo e risco de conservação inadequada." },
  armario: { ok: true, text: "Boa escolha. Um armário adequado, seco e longe de calor costuma ser melhor, sempre respeitando a bula/embalagem." }
};

const quizQuestions = [
  { q: "Qual atitude é correta ao encontrar um medicamento vencido?", a: ["Usar mesmo assim", "Descartar conforme orientação local e coleta apropriada", "Misturar com lixo comum sempre"], c: 1 },
  { q: "Qual disciplina ajuda a entender microrganismos?", a: ["Farmacologia", "Microbiologia e Parasitologia", "Legislação do SUS"], c: 1 },
  { q: "O que deve ser observado na conservação?", a: ["Só a cor da caixa", "A orientação da embalagem/bula", "A opinião de qualquer pessoa"], c: 1 },
  { q: "Seguir biossegurança significa:", a: ["Ignorar higiene", "Adotar medidas de proteção e cuidado", "Usar materiais sem orientação"], c: 1 },
  { q: "Epidemiologia estuda:", a: ["A distribuição de eventos de saúde nas populações", "A embalagem do remédio", "A cor do laboratório"], c: 0 }
];

const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => [...p.querySelectorAll(s)];

const html = document.documentElement;
const navToggle = $("#navToggle");
const navMenu = $("#navMenu");
const modalBackdrop = $("#modalBackdrop");
const modalTitle = $("#modalTitle");
const modalText = $("#modalText");
const modalClose = $("#modalClose");

function openModal(title, text) {
  modalTitle.textContent = title;
  modalText.textContent = text;
  modalBackdrop.hidden = false;
  modalClose.focus();
}
function closeModal() {
  modalBackdrop.hidden = true;
}
$$("[data-modal]").forEach(btn => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.modal;
    openModal(btn.textContent.trim(), modalData[key] || "Informação indisponível.");
  });
});

navToggle.addEventListener("click", () => {
  const open = navMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});
$$(".nav-menu a").forEach(a => a.addEventListener("click", () => {
  navMenu.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
}));

modalBackdrop.addEventListener("click", (e) => {
  if (e.target === modalBackdrop) closeModal();
});
modalClose.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
    accessPanel.classList.remove("open");
    accessPanel.setAttribute("aria-hidden", "true");
  }
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.14 });
$$(".reveal").forEach(el => revealObserver.observe(el));

const videoGrid = $("#videoGrid");
const template = $("#videoTemplate");
videoData.forEach(v => {
  const node = template.content.cloneNode(true);
  $("h3", node).textContent = v.titulo;
  $("p", node).textContent = v.descricao;
  const a = $(".video-link", node);
  if (v.link && v.link.trim()) {
    a.href = v.link;
    a.style.pointerEvents = "auto";
    a.style.opacity = "1";
    a.textContent = "Assistir no Instagram";
  } else {
    a.href = "#videos";
    a.style.pointerEvents = "none";
    a.style.opacity = ".45";
    a.textContent = "Link em breve";
  }
  videoGrid.appendChild(node);
});

const discardFeedback = $("#discardFeedback");
$$("[data-discard]").forEach(btn => btn.addEventListener("click", () => {
  const r = discardData[btn.dataset.discard];
  discardFeedback.textContent = r.text;
  discardFeedback.style.background = r.ok ? "rgba(63,125,74,.12)" : "rgba(244,183,162,.18)";
}));

const storeFeedback = $("#storeFeedback");
$$("[data-store]").forEach(btn => btn.addEventListener("click", () => {
  const r = storeData[btn.dataset.store];
  storeFeedback.textContent = r.text;
  storeFeedback.style.background = r.ok ? "rgba(63,125,74,.12)" : "rgba(244,183,162,.18)";
}));

const tfFeedback = $("#tfFeedback");
$$("[data-tf]").forEach(btn => btn.addEventListener("click", () => {
  const r = tfData[Number(btn.dataset.tf)];
  tfFeedback.textContent = r.text;
  tfFeedback.style.background = r.answer ? "rgba(63,125,74,.12)" : "rgba(244,183,162,.18)";
}));

let found = new Set();
const pkgCount = $("#pkgCount");
const pkgBar = $("#pkgBar");
const pkgFeedback = $("#packageFeedback");
$$(".package-hotspot").forEach(btn => btn.addEventListener("click", () => {
  const key = btn.dataset.hotspot;
  btn.classList.add("active");
  found.add(key);
  const total = found.size;
  pkgCount.textContent = `${total}/5 informações encontradas`;
  pkgBar.style.width = `${(total / 5) * 100}%`;
  const labels = {
    validade: "Você encontrou a validade.",
    lote: "Você encontrou o lote.",
    conservacao: "Você encontrou a conservação.",
    principio: "Você encontrou o princípio ativo.",
    uso: "Você encontrou as informações de uso."
  };
  pkgFeedback.textContent = labels[key];
  if (total === 5) pkgFeedback.textContent = "Você encontrou tudo!";
}));

const labFeedback = $("#labFeedback");
$$("[data-lab]").forEach(btn => btn.addEventListener("click", () => {
  const good = btn.dataset.lab === "1";
  labFeedback.textContent = good ? "Correto. Medidas de biossegurança protegem pessoas, materiais e ambientes." : "Não é a melhor escolha. Segurança e orientação vêm primeiro.";
  labFeedback.style.background = good ? "rgba(63,125,74,.12)" : "rgba(244,183,162,.18)";
}));

const matchFeedback = $("#matchFeedback");
$$("[data-match]").forEach(btn => btn.addEventListener("click", () => {
  matchFeedback.textContent = matchData[btn.dataset.match];
  matchFeedback.style.background = "rgba(200,165,54,.12)";
}));

let quizIndex = 0;
let score = 0;
const quizQuestion = $("#quizQuestion");
const quizOptions = $("#quizOptions");
const quizCounter = $("#quizCounter");
const quizScore = $("#quizScore");
const quizBar = $("#quizBar");
const quizFeedback = $("#quizFeedback");
const quizRestart = $("#quizRestart");

function renderQuiz() {
  const item = quizQuestions[quizIndex];
  quizCounter.textContent = `Pergunta ${quizIndex + 1} de 5`;
  quizScore.textContent = `${score} pontos`;
  quizQuestion.textContent = item.q;
  quizBar.style.width = `${(quizIndex / quizQuestions.length) * 100}%`;
  quizOptions.innerHTML = "";
  quizFeedback.textContent = "";
  item.a.forEach((opt, i) => {
    const b = document.createElement("button");
    b.className = "quiz-option";
    b.textContent = opt;
    b.addEventListener("click", () => answerQuiz(i, b));
    quizOptions.appendChild(b);
  });
}
function answerQuiz(i, btn) {
  const item = quizQuestions[quizIndex];
  const correct = i === item.c;
  $$(".quiz-option", quizOptions).forEach((o, idx) => {
    o.disabled = true;
    if (idx === item.c) o.classList.add("correct");
    if (idx === i && !correct) o.classList.add("wrong");
  });
  if (correct) score++;
  quizFeedback.textContent = correct ? "Resposta correta!" : "Resposta incorreta.";
  quizFeedback.style.background = correct ? "rgba(63,125,74,.12)" : "rgba(244,183,162,.18)";
  quizScore.textContent = `${score} pontos`;
  setTimeout(() => {
    quizIndex++;
    if (quizIndex < quizQuestions.length) renderQuiz();
    else finishQuiz();
  }, 900);
}
function finishQuiz() {
  quizCounter.textContent = "Quiz finalizado";
  quizBar.style.width = "100%";
  quizOptions.innerHTML = "";
  quizQuestion.textContent = score === 5 ? "Você acertou tudo!" : score >= 3 ? "Mandou muito bem!" : "Hora de explorar mais!";
  quizFeedback.textContent = `Pontuação final: ${score}/5.`;
  quizRestart.hidden = false;
}
quizRestart.addEventListener("click", () => {
  quizIndex = 0; score = 0; quizRestart.hidden = true; renderQuiz();
});
renderQuiz();

const accessFab = $("#accessFab");
const accessPanel = $("#accessPanel");
const accessClose = $("#accessClose");

accessFab.addEventListener("click", () => {
  accessPanel.classList.toggle("open");
  accessPanel.setAttribute("aria-hidden", String(!accessPanel.classList.contains("open")));
});
accessClose.addEventListener("click", () => {
  accessPanel.classList.remove("open");
  accessPanel.setAttribute("aria-hidden", "true");
});

let utterance = null;
function speakPage() {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const text = [
    $(".hero h1").textContent,
    $(".hero .lead").textContent,
    $("#curso h2").textContent,
    $("#materias h2").textContent,
    $("#diaadia h2").textContent,
    $("#experiencias h2").textContent,
    $("#videos h2").textContent,
    $("#quiz h2").textContent
  ].join(". ");
  utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "pt-BR";
  utterance.rate = 0.95;
  window.speechSynthesis.speak(utterance);
}
function stopSpeak() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
}
$$(".access-btn").forEach(btn => btn.addEventListener("click", () => {
  const action = btn.dataset.action;
  html.classList.remove("text-sm", "text-lg", "high-contrast", "reading-mode", "highlight-links");
  if (action === "text-sm") html.classList.add("text-sm");
  if (action === "text-lg") html.classList.add("text-lg");
  if (action === "contrast") html.classList.toggle("high-contrast");
  if (action === "reading") html.classList.toggle("reading-mode");
  if (action === "motion") document.body.classList.toggle("reduced-motion");
  if (action === "links") html.classList.toggle("highlight-links");
  if (action === "speak") speakPage();
  if (action === "stop") stopSpeak();
}));

const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
if (mq.matches) document.body.classList.add("reduced-motion");
