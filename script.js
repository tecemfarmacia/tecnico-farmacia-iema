const modalData = {
  card1: "O Técnico em Farmácia prepara o estudante para atuar com cuidado, organização e conhecimento na área da saúde.",
  card2: "O laboratório é um dos pontos mais importantes do curso, porque une teoria, prática e biossegurança.",
  card3: "A rotina do curso mistura sala de aula, materiais de estudo e atividades voltadas para a prática profissional.",
  card4: "Professores e alunos fazem parte da experiência, com troca de conhecimento e aprendizado colaborativo."
};

const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => [...p.querySelectorAll(s)];

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
    openModal(btn.querySelector("strong").textContent, modalData[btn.dataset.modal]);
  });
});

modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", e => {
  if (e.target === modalBackdrop) closeModal();
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.14 });

$$(".reveal").forEach(el => revealObserver.observe(el));
