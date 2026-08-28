/* =========================================
   TÉCNICO EM FARMÁCIA — IEMA
   SCRIPT.JS
========================================= */


/* =========================================
   CARDS INTERATIVOS
========================================= */

function toggleCard(card) {

    card.classList.toggle("open");

}


/* =========================================
   LABORATÓRIO
========================================= */

function showLabInfo(title, description) {

    const result =
        document.getElementById("lab-result");

    result.innerHTML = `
        <strong>${title}</strong>
        <p>${description}</p>
    `;

}


/* =========================================
   MITO OU VERDADE
========================================= */

function mythAnswer(answer) {

    const result =
        document.getElementById("myth-result");

    if (answer === false) {

        result.innerHTML =
            "🎉 Acertou! É MITO. A área de atuação do Técnico em Farmácia pode envolver diferentes ambientes e atividades.";

    } else {

        result.innerHTML =
            "💡 Quase! É MITO. Existem diferentes possibilidades relacionadas à formação.";

    }

}


/* =========================================
   QUIZ
========================================= */

const questions = [

    {
        question:
            "Qual disciplina estuda os medicamentos e seus efeitos no organismo?",

        options: [
            "Farmacologia",
            "Geografia",
            "Literatura",
            "História"
        ],

        answer: 0
    },


    {
        question:
            "Qual sistema de saúde é estudado durante a formação?",

        options: [
            "SUS",
            "Sistema Solar",
            "Sistema Bancário",
            "Sistema Escolar"
        ],

        answer: 0
    },


    {
        question:
            "Qual disciplina aborda microrganismos e parasitas?",

        options: [
            "Matemática",
            "Microbiologia e Parasitologia",
            "Literatura",
            "Filosofia"
        ],

        answer: 1
    },


    {
        question:
            "Qual disciplina ajuda a compreender o funcionamento do corpo humano?",

        options: [
            "Anatomia e Fisiologia do Corpo Humano",
            "Legislação do SUS",
            "Epidemiologia",
            "Biossegurança"
        ],

        answer: 0
    },


    {
        question:
            "Qual dessas disciplinas está relacionada à prevenção e segurança?",

        options: [
            "Biossegurança, Higiene e Profilaxia",
            "Literatura",
            "História",
            "Artes"
        ],

        answer: 0
    },


    {
        question:
            "Qual disciplina está relacionada às reações químicas e aos processos do organismo?",

        options: [
            "Bioquímica",
            "Educação Física",
            "Geografia",
            "Sociologia"
        ],

        answer: 0
    },


    {
        question:
            "Qual disciplina estuda a ocorrência e distribuição de doenças nas populações?",

        options: [
            "Epidemiologia",
            "Anatomia",
            "Farmacologia",
            "Higiene"
        ],

        answer: 0
    }

];


let currentQuestion = 0;

let score = 0;

let answered = false;


/* =========================================
   CARREGAR QUIZ
========================================= */

function loadQuestion() {

    const question =
        questions[currentQuestion];

    const questionContainer =
        document.getElementById(
            "quiz-question"
        );

    const optionsContainer =
        document.getElementById(
            "quiz-options"
        );

    const feedback =
        document.getElementById(
            "quiz-feedback"
        );

    const nextButton =
        document.getElementById(
            "next-question"
        );


    answered = false;

    nextButton.hidden = true;

    feedback.innerHTML = "";


    questionContainer.innerHTML = `
        <h3>
            ${currentQuestion + 1}.
            ${question.question}
        </h3>
    `;


    optionsContainer.innerHTML = "";


    question.options.forEach(
        (option, index) => {

            const button =
                document.createElement(
                    "button"
                );

            button.className =
                "quiz-option";

            button.textContent =
                option;

            button.onclick = function () {

                answerQuestion(
                    index,
                    button
                );

            };

            optionsContainer.appendChild(
                button
            );

        }
    );

}


/* =========================================
   RESPONDER
========================================= */

function answerQuestion(
    selected,
    selectedButton
) {

    if (answered) {

        return;

    }


    answered = true;


    const question =
        questions[currentQuestion];


    const feedback =
        document.getElementById(
            "quiz-feedback"
        );


    const buttons =
        document.querySelectorAll(
            ".quiz-option"
        );


    buttons.forEach(
        button => {

            button.disabled = true;

        }
    );


    if (
        selected ===
        question.answer
    ) {

        score++;

        selectedButton.textContent =
            "✅ " +
            selectedButton.textContent;

        feedback.textContent =
            "🎉 Muito bem! Você acertou!";

    } else {

        selectedButton.textContent =
            "❌ " +
            selectedButton.textContent;

        feedback.textContent =
            "💡 Não foi dessa vez! A resposta correta é: " +
            question.options[
                question.answer
            ];

    }


    document.getElementById(
        "next-question"
    ).hidden = false;

}


/* =========================================
   PRÓXIMA PERGUNTA
========================================= */

function nextQuestion() {

    currentQuestion++;


    if (
        currentQuestion >=
        questions.length
    ) {

        showQuizResult();

        return;

    }


    loadQuestion();

}


/* =========================================
   RESULTADO DO QUIZ
========================================= */

function showQuizResult() {

    const questionContainer =
        document.getElementById(
            "quiz-question"
        );

    const optionsContainer =
        document.getElementById(
            "quiz-options"
        );

    const feedback =
        document.getElementById(
            "quiz-feedback"
        );

    const nextButton =
        document.getElementById(
            "next-question"
        );


    questionContainer.innerHTML = `
        <h3>
            🎉 Quiz concluído!
        </h3>
    `;


    optionsContainer.innerHTML = `
        <p>
            Você acertou
            <strong>
                ${score}
            </strong>
            de
            <strong>
                ${questions.length}
            </strong>
            perguntas.
        </p>
    `;


    if (
        score === questions.length
    ) {

        feedback.textContent =
            "🏆 Perfeito! Você já conhece muito sobre Farmácia!";

    } else if (
        score >= 4
    ) {

        feedback.textContent =
            "👏 Muito bem! Você está mandando muito bem.";

    } else {

        feedback.textContent =
            "💛 Continue explorando o site e descubra mais sobre o curso!";

    }


    nextButton.textContent =
        "↻ Refazer quiz";

    nextButton.hidden = false;

    nextButton.onclick =
        restartQuiz;

}


/* =========================================
   REINICIAR QUIZ
========================================= */

function restartQuiz() {

    currentQuestion = 0;

    score = 0;

    loadQuestion();

}


/* =========================================
   ACESSIBILIDADE
========================================= */

function openAccessibility() {

    const panel =
        document.getElementById(
            "accessibility-panel"
        );

    panel.classList.add("active");

}


function closeAccessibility() {

    const panel =
        document.getElementById(
            "accessibility-panel"
        );

    panel.classList.remove("active");

}


/* =========================================
   AUMENTAR TEXTO
========================================= */

let textScale = 1;


function increaseText() {

    if (textScale < 1.5) {

        textScale += 0.1;

        document.documentElement.style
            .fontSize =
            `${textScale * 100}%`;

    }

}


/* =========================================
   DIMINUIR TEXTO
========================================= */

function decreaseText() {

    if (textScale > 0.8) {

        textScale -= 0.1;

        document.documentElement.style
            .fontSize =
            `${textScale * 100}%`;

    }

}


/* =========================================
   ALTO CONTRASTE
========================================= */

function toggleContrast() {

    document.body.classList.toggle(
        "high-contrast"
    );

}


/* =========================================
   REDUZIR MOVIMENTO
========================================= */

function toggleMotion() {

    document.body.classList.toggle(
        "reduce-motion"
    );

}


/* =========================================
   DESTACAR LINKS
========================================= */

function highlightLinks() {

    document.body.classList.toggle(
        "highlight-links"
    );

}


/* =========================================
   RESTAURAR ACESSIBILIDADE
========================================= */

function resetAccessibility() {

    textScale = 1;

    document.documentElement.style
        .fontSize = "";

    document.body.classList.remove(
        "high-contrast"
    );

    document.body.classList.remove(
        "reduce-motion"
    );

    document.body.classList.remove(
        "highlight-links"
    );

}


/* =========================================
   FECHAR PAINEL COM ESC
========================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeAccessibility();

        }

    }
);


/* =========================================
   INICIAR QUIZ
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadQuestion();

    }
);
