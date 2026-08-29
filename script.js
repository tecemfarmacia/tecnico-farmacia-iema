/* =========================================================
   TÉCNICO EM FARMÁCIA | IEMA VIANA
   JavaScript Vanilla — versão completa
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";


    /* =====================================================
       UTILITÁRIOS
    ===================================================== */

    const $ = (selector, parent = document) =>
        parent.querySelector(selector);

    const $$ = (selector, parent = document) =>
        [...parent.querySelectorAll(selector)];


    /* =====================================================
       HEADER + SCROLL
    ===================================================== */

    const header = $("#siteHeader");
    const progress = $("#scrollProgress");

    function updateScrollUI() {

        const scrollTop =
            window.scrollY || document.documentElement.scrollTop;

        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const percentage =
            documentHeight > 0
                ? (scrollTop / documentHeight) * 100
                : 0;

        if (progress) {
            progress.style.width = `${percentage}%`;
        }

        if (header) {
            header.classList.toggle(
                "scrolled",
                scrollTop > 30
            );
        }
    }

    window.addEventListener(
        "scroll",
        updateScrollUI,
        { passive: true }
    );

    updateScrollUI();


    /* =====================================================
       MENU MOBILE
    ===================================================== */

    const menuToggle = $("#menuToggle");
    const mobileMenu = $("#mobileMenu");

    function closeMobileMenu() {

        if (!mobileMenu) return;

        mobileMenu.classList.remove("open");

        mobileMenu.setAttribute(
            "aria-hidden",
            "true"
        );

        menuToggle?.setAttribute(
            "aria-expanded",
            "false"
        );
    }

    function openMobileMenu() {

        if (!mobileMenu) return;

        mobileMenu.classList.add("open");

        mobileMenu.setAttribute(
            "aria-hidden",
            "false"
        );

        menuToggle?.setAttribute(
            "aria-expanded",
            "true"
        );
    }

    menuToggle?.addEventListener(
        "click",
        () => {

            const isOpen =
                mobileMenu.classList.contains("open");

            if (isOpen) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        }
    );

    $$(".mobile-menu a").forEach(link => {

        link.addEventListener(
            "click",
            closeMobileMenu
        );

    });


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    $$('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            const headerHeight =
                header?.offsetHeight || 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight -
                12;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });


    /* =====================================================
       INTERSECTION OBSERVER
    ===================================================== */

    const revealElements =
        $$(".reveal");

    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "visible"
                            );

                            revealObserver.unobserve(
                                entry.target
                            );
                        }

                    });

                },
                {
                    threshold: 0.12,
                    rootMargin: "0px 0px -40px 0px"
                }
            );

        revealElements.forEach(
            element =>
                revealObserver.observe(element)
        );

    } else {

        revealElements.forEach(
            element =>
                element.classList.add("visible")
        );

    }


    /* =====================================================
       CARDS EXPANSÍVEIS — APRENDIZADOS
    ===================================================== */

    $$(".subject-trigger").forEach(trigger => {

        trigger.addEventListener(
            "click",
            () => {

                const card =
                    trigger.closest(".subject-card");

                if (!card) return;

                const isOpen =
                    card.classList.contains("open");

                card.classList.toggle(
                    "open",
                    !isOpen
                );

                trigger.setAttribute(
                    "aria-expanded",
                    String(!isOpen)
                );

            }
        );

    });


    /* =====================================================
       CARDS EXPANSÍVEIS — ORIENTAÇÕES
    ===================================================== */

    $$(".tip-trigger").forEach(trigger => {

        trigger.addEventListener(
            "click",
            () => {

                const card =
                    trigger.closest(".tip-card");

                if (!card) return;

                const isOpen =
                    card.classList.contains("open");

                card.classList.toggle(
                    "open",
                    !isOpen
                );

                trigger.setAttribute(
                    "aria-expanded",
                    String(!isOpen)
                );

            }
        );

    });


    /* =====================================================
       CURSO — CARROSSEL
    ===================================================== */

    const courseTrack =
        $(".course-track");

    const courseSlides =
        $$(".course-slide");

    const courseDots =
        $$(".course-dot");

    let currentCourseSlide = 0;

    function goToCourseSlide(index) {

        if (!courseTrack || !courseSlides.length) {
            return;
        }

        currentCourseSlide =
            Math.max(
                0,
                Math.min(
                    index,
                    courseSlides.length - 1
                )
            );

        courseTrack.style.transform =
            `translateX(-${currentCourseSlide * 100}%)`;

        courseSlides.forEach(
            (slide, i) => {

                slide.classList.toggle(
                    "active",
                    i === currentCourseSlide
                );

            }
        );

        courseDots.forEach(
            (dot, i) => {

                dot.classList.toggle(
                    "active",
                    i === currentCourseSlide
                );

            }
        );
    }

    courseDots.forEach(dot => {

        dot.addEventListener(
            "click",
            () => {

                const index =
                    Number(
                        dot.dataset.slide
                    );

                goToCourseSlide(index);

            }
        );

    });


    /* =====================================================
       SWIPE DO CARROSSEL DO CURSO
    ===================================================== */

    let courseTouchStartX = 0;
    let courseTouchEndX = 0;

    courseTrack?.addEventListener(
        "touchstart",
        event => {

            courseTouchStartX =
                event.changedTouches[0].screenX;

        },
        { passive: true }
    );

    courseTrack?.addEventListener(
        "touchend",
        event => {

            courseTouchEndX =
                event.changedTouches[0].screenX;

            const distance =
                courseTouchStartX -
                courseTouchEndX;

            if (Math.abs(distance) < 45) {
                return;
            }

            if (distance > 0) {
                goToCourseSlide(
                    currentCourseSlide + 1
                );
            } else {
                goToCourseSlide(
                    currentCourseSlide - 1
                );
            }

        },
        { passive: true }
    );


    /* =====================================================
       EXPLORER CARDS
    ===================================================== */

    $$(".explorer-card").forEach(card => {

        card.addEventListener(
            "click",
            () => {

                const targetSelector =
                    card.dataset.target;

                const target =
                    document.querySelector(
                        targetSelector
                    );

                if (!target) return;

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                card.animate(
                    [
                        {
                            transform: "scale(1)"
                        },
                        {
                            transform: "scale(.97)"
                        },
                        {
                            transform: "scale(1)"
                        }
                    ],
                    {
                        duration: 300,
                        easing: "ease-out"
                    }
                );

            }
        );

    });


    /* =====================================================
       GALERIA
    ===================================================== */

    const galleryTrack =
        $("#galleryTrack");

    const galleryPrev =
        $(".gallery-prev");

    const galleryNext =
        $(".gallery-next");

    function galleryScroll(direction) {

        if (!galleryTrack) return;

        const item =
            $(".gallery-item", galleryTrack);

        const amount =
            item
                ? item.offsetWidth + 14
                : 300;

        galleryTrack.scrollBy({
            left: direction * amount,
            behavior: "smooth"
        });
    }

    galleryPrev?.addEventListener(
        "click",
        () => galleryScroll(-1)
    );

    galleryNext?.addEventListener(
        "click",
        () => galleryScroll(1)
    );


    /* =====================================================
       LIGHTBOX
    ===================================================== */

    const lightbox =
        $("#lightbox");

    const lightboxImage =
        $("#lightboxImage");

    const lightboxCaption =
        $("#lightboxCaption");

    const lightboxClose =
        $("#lightboxClose");

    const lightboxPrev =
        $("#lightboxPrev");

    const lightboxNext =
        $("#lightboxNext");


    let lightboxItems = [];
    let currentLightboxIndex = 0;
    let previousFocusedElement = null;


    function collectLightboxItems() {

        lightboxItems =
            $$(
                "[data-image]"
            ).filter(
                element =>
                    element.dataset.image
            );
    }


    function imageExists(url) {

        return new Promise(resolve => {

            const image =
                new Image();

            image.onload =
                () => resolve(true);

            image.onerror =
                () => resolve(false);

            image.src = url;

        });

    }


    function updateLightbox() {

        if (
            !lightboxImage ||
            !lightboxItems.length
        ) {
            return;
        }

        const item =
            lightboxItems[currentLightboxIndex];

        if (!item) return;

        const imageUrl =
            item.dataset.image;

        const title =
            item.dataset.title ||
            "Imagem";

        lightboxImage.src =
            imageUrl;

        lightboxImage.alt =
            title;

        lightboxCaption.textContent =
            title;

        /*
         * Se a imagem não existir, o próprio
         * lightbox mostra uma indicação.
         */
        lightboxImage.onerror = () => {

            lightboxImage.removeAttribute("src");

            lightboxCaption.textContent =
                `${title} — imagem ainda não adicionada`;

        };

    }


    function openLightbox(item) {

        if (!lightbox || !item) return;

        collectLightboxItems();

        currentLightboxIndex =
            lightboxItems.indexOf(item);

        if (currentLightboxIndex < 0) {
            currentLightboxIndex = 0;
        }

        previousFocusedElement =
            document.activeElement;

        updateLightbox();

        lightbox.hidden = false;

        document.body.style.overflow =
            "hidden";

        setTimeout(
            () =>
                lightboxClose?.focus(),
            50
        );

    }


    function closeLightbox() {

        if (!lightbox) return;

        lightbox.hidden = true;

        document.body.style.overflow =
            "";

        if (
            previousFocusedElement &&
            typeof previousFocusedElement.focus === "function"
        ) {
            previousFocusedElement.focus();
        }

    }


    function nextLightboxImage() {

        if (!lightboxItems.length) return;

        currentLightboxIndex =
            (
                currentLightboxIndex + 1
            ) %
            lightboxItems.length;

        updateLightbox();

    }


    function previousLightboxImage() {

        if (!lightboxItems.length) return;

        currentLightboxIndex =
            (
                currentLightboxIndex -
                1 +
                lightboxItems.length
            ) %
            lightboxItems.length;

        updateLightbox();

    }


    $$("[data-image]").forEach(item => {

        item.addEventListener(
            "click",
            event => {

                /*
                 * Evita abrir o lightbox quando
                 * o elemento é um link.
                 */
                if (
                    item.tagName === "A"
                ) {
                    return;
                }

                event.preventDefault();

                openLightbox(item);

            }
        );

    });


    lightboxClose?.addEventListener(
        "click",
        closeLightbox
    );

    lightboxNext?.addEventListener(
        "click",
        nextLightboxImage
    );

    lightboxPrev?.addEventListener(
        "click",
        previousLightboxImage
    );


    lightbox?.addEventListener(
        "click",
        event => {

            if (
                event.target === lightbox
            ) {
                closeLightbox();
            }

        }
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                !lightbox ||
                lightbox.hidden
            ) {
                return;
            }

            if (event.key === "Escape") {
                closeLightbox();
            }

            if (event.key === "ArrowRight") {
                nextLightboxImage();
            }

            if (event.key === "ArrowLeft") {
                previousLightboxImage();
            }

        }
    );


    /* =====================================================
       SWIPE LIGHTBOX
    ===================================================== */

    let lightboxStartX = 0;

    lightbox?.addEventListener(
        "touchstart",
        event => {

            lightboxStartX =
                event.changedTouches[0].screenX;

        },
        { passive: true }
    );

    lightbox?.addEventListener(
        "touchend",
        event => {

            const endX =
                event.changedTouches[0].screenX;

            const distance =
                lightboxStartX - endX;

            if (Math.abs(distance) < 50) {
                return;
            }

            if (distance > 0) {
                nextLightboxImage();
            } else {
                previousLightboxImage();
            }

        },
        { passive: true }
    );


    /* =====================================================
       DETECÇÃO DO VÍDEO
    ===================================================== */

    const mainVideo =
        $("#mainVideo");

    const videoContainer =
        $("#videoContainer");

    function setupVideo() {

        if (!mainVideo) return;

        /*
         * O evento loadedmetadata é acionado
         * quando o vídeo realmente existe e
         * conseguiu carregar.
         */
        mainVideo.addEventListener(
            "loadedmetadata",
            () => {

                videoContainer?.classList.add(
                    "video-ready"
                );

            }
        );

        mainVideo.addEventListener(
            "error",
            () => {

                videoContainer?.classList.remove(
                    "video-ready"
                );

            }
        );

        /*
         * Também tentamos carregar.
         */
        mainVideo.load();

    }

    setupVideo();


    /* =====================================================
       QUIZ
    ===================================================== */

    const quizQuestions = [

        {
            question:
                "Onde colocamos muitos dos conhecimentos em prática?",

            options: [
                "Biblioteca",
                "Laboratório",
                "Quadra"
            ],

            answer: 1
        },

        {
            question:
                "O curso combina principalmente:",

            options: [
                "Teoria e prática",
                "Apenas teoria",
                "Apenas atividades práticas"
            ],

            answer: 0
        },

        {
            question:
                "Qual dessas áreas faz parte dos conteúdos estudados?",

            options: [
                "Farmacologia",
                "Astronomia",
                "Arquitetura"
            ],

            answer: 0
        },

        {
            question:
                "Qual conteúdo está relacionado à prevenção de riscos no ambiente de trabalho?",

            options: [
                "Biossegurança",
                "Astronomia",
                "Literatura"
            ],

            answer: 0
        },

        {
            question:
                "Quem faz parte da experiência do curso?",

            options: [
                "Professores e alunos",
                "Apenas visitantes",
                "Apenas funcionários"
            ],

            answer: 0
        }

    ];


    const quizCounter =
        $("#quizCounter");

    const quizScore =
        $("#quizScore");

    const quizProgress =
        $("#quizProgress");

    const quizQuestion =
        $("#quizQuestion");

    const quizOptions =
        $("#quizOptions");

    const quizFeedback =
        $("#quizFeedback");

    const quizNext =
        $("#quizNext");

    const quizResult =
        $("#quizResult");

    const finalScore =
        $("#finalScore");

    const quizRestart =
        $("#quizRestart");


    let quizCurrent = 0;
    let score = 0;
    let answered = false;


    function renderQuizQuestion() {

        if (!quizQuestion) return;

        const current =
            quizQuestions[quizCurrent];

        if (!current) return;

        answered = false;

        quizCounter.textContent =
            `PERGUNTA ${quizCurrent + 1} / ${quizQuestions.length}`;

        quizProgress.style.width =
            `${(
                (quizCurrent + 1) /
                quizQuestions.length
            ) * 100}%`;

        quizScore.textContent =
            score;

        quizQuestion.textContent =
            current.question;

        quizOptions.innerHTML =
            "";

        quizFeedback.textContent =
            "";

        quizFeedback.className =
            "quiz-feedback";

        quizNext.hidden =
            true;


        current.options.forEach(
            (option, index) => {

                const button =
                    document.createElement(
                        "button"
                    );

                button.type =
                    "button";

                button.className =
                    "quiz-option";

                button.innerHTML = `
                    <span class="quiz-option-letter">
                        ${String.fromCharCode(65 + index)}
                    </span>

                    <span>
                        ${option}
                    </span>
                `;

                button.addEventListener(
                    "click",
                    () =>
                        answerQuiz(
                            index,
                            button
                        )
                );

                quizOptions.appendChild(
                    button
                );

            }
        );

    }


    function answerQuiz(
        selectedIndex,
        selectedButton
    ) {

        if (answered) return;

        answered = true;

        const current =
            quizQuestions[quizCurrent];

        const allOptions =
            $$(".quiz-option", quizOptions);

        allOptions.forEach(
            button =>
                button.classList.add(
                    "disabled"
                )
        );


        const correctButton =
            allOptions[current.answer];

        if (selectedIndex === current.answer) {

            score++;

            selectedButton.classList.add(
                "correct"
            );

            quizFeedback.textContent =
                "✓ Resposta correta!";

            quizFeedback.classList.add(
                "correct"
            );

        } else {

            selectedButton.classList.add(
                "wrong"
            );

            correctButton?.classList.add(
                "correct"
            );

            quizFeedback.textContent =
                "A resposta correta foi destacada.";

            quizFeedback.classList.add(
                "wrong"
            );

        }

        quizScore.textContent =
            score;

        if (
            quizCurrent <
            quizQuestions.length - 1
        ) {

            quizNext.hidden =
                false;

        } else {

            setTimeout(
                finishQuiz,
                650
            );

        }

    }


    function finishQuiz() {

        quizQuestion.hidden =
            true;

        quizOptions.hidden =
            true;

        quizFeedback.hidden =
            true;

        quizNext.hidden =
            true;

        quizResult.hidden =
            false;

        finalScore.textContent =
            score;

    }


    function restartQuiz() {

        quizCurrent = 0;

        score = 0;

        quizQuestion.hidden =
            false;

        quizOptions.hidden =
            false;

        quizFeedback.hidden =
            false;

        quizResult.hidden =
            true;

        renderQuizQuestion();

    }


    quizNext?.addEventListener(
        "click",
        () => {

            quizCurrent++;

            renderQuizQuestion();

        }
    );


    quizRestart?.addEventListener(
        "click",
        restartQuiz
    );


    renderQuizQuestion();


    /* =====================================================
       ACESSIBILIDADE — PAINEL
    ===================================================== */

    const accessibilityToggle =
        $("#accessibilityToggle");

    const accessibilityPanel =
        $("#accessibilityPanel");

    const closeAccessibility =
        $("#closeAccessibility");


    function openAccessibility() {

        if (!accessibilityPanel) return;

        accessibilityPanel.hidden =
            false;

        accessibilityToggle?.setAttribute(
            "aria-expanded",
            "true"
        );

    }


    function closeAccessibilityPanel() {

        if (!accessibilityPanel) return;

        accessibilityPanel.hidden =
            true;

        accessibilityToggle?.setAttribute(
            "aria-expanded",
            "false"
        );

    }


    accessibilityToggle?.addEventListener(
        "click",
        () => {

            if (accessibilityPanel.hidden) {
                openAccessibility();
            } else {
                closeAccessibilityPanel();
            }

        }
    );


    closeAccessibility?.addEventListener(
        "click",
        closeAccessibilityPanel
    );


    /* =====================================================
       TAMANHO DA FONTE
    ===================================================== */

    const fontIncrease =
        $("#fontIncrease");

    const fontDecrease =
        $("#fontDecrease");

    let fontScale = 1;


    fontIncrease?.addEventListener(
        "click",
        () => {

            fontScale =
                Math.min(
                    fontScale + .1,
                    1.3
                );

            document.documentElement.style
                .setProperty(
                    "--font-scale",
                    fontScale
                );

        }
    );


    fontDecrease?.addEventListener(
        "click",
        () => {

            fontScale =
                Math.max(
                    fontScale - .1,
                    .85
                );

            document.documentElement.style
                .setProperty(
                    "--font-scale",
                    fontScale
                );

        }
    );


    /* =====================================================
       ALTO CONTRASTE
    ===================================================== */

    const contrastToggle =
        $("#contrastToggle");

    contrastToggle?.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "high-contrast"
            );

            const active =
                document.body.classList.contains(
                    "high-contrast"
                );

            contrastToggle.setAttribute(
                "aria-pressed",
                String(active)
            );

        }
    );


    /* =====================================================
       REDUZIR ANIMAÇÕES
    ===================================================== */

    const motionToggle =
        $("#motionToggle");

    motionToggle?.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "reduce-motion"
            );

            const active =
                document.body.classList.contains(
                    "reduce-motion"
                );

            motionToggle.setAttribute(
                "aria-pressed",
                String(active)
            );

        }
    );


    /* =====================================================
       SPEECH SYNTHESIS
    ===================================================== */

    const speechStart =
        $("#speechStart");

    const speechPause =
        $("#speechPause");

    const speechStop =
        $("#speechStop");


    const speechSupported =
        "speechSynthesis" in window &&
        "SpeechSynthesisUtterance" in window;


    let speechUtterance =
        null;


    function getMainTextForSpeech() {

        const main =
            document.querySelector("main");

        if (!main) return "";

        /*
         * Pegamos somente textos visíveis
         * e excluímos textos de botões
         * e elementos puramente decorativos.
         */
        const clone =
            main.cloneNode(true);

        clone
            .querySelectorAll(
                "button, script, video"
            )
            .forEach(
                element =>
                    element.remove()
            );

        return clone.innerText
            .replace(/\s+/g, " ")
            .trim();

    }


    speechStart?.addEventListener(
        "click",
        () => {

            if (!speechSupported) {

                alert(
                    "A leitura de texto não é suportada neste navegador."
                );

                return;
            }

            window.speechSynthesis.cancel();

            const text =
                getMainTextForSpeech();

            speechUtterance =
                new SpeechSynthesisUtterance(
                    text
                );

            speechUtterance.lang =
                "pt-BR";

            speechUtterance.rate =
                .95;

            speechUtterance.pitch =
                1;

            window.speechSynthesis.speak(
                speechUtterance
            );

        }
    );


    speechPause?.addEventListener(
        "click",
        () => {

            if (!speechSupported) return;

            window.speechSynthesis.pause();

        }
    );


    speechStop?.addEventListener(
        "click",
        () => {

            if (!speechSupported) return;

            window.speechSynthesis.cancel();

        }
    );


    /* =====================================================
       VLIBRAS
    ===================================================== */

    function initializeVLibras() {

        /*
         * O script oficial é carregado com defer.
         * Pequeno atraso para garantir que o objeto
         * esteja disponível.
         */

        if (
            window.VLibras &&
            typeof window.VLibras.Widget === "function"
        ) {

            try {

                new window.VLibras.Widget(
                    "https://vlibras.gov.br/app"
                );

            } catch (error) {

                console.warn(
                    "Não foi possível inicializar o VLibras:",
                    error
                );

            }

            return true;
        }

        return false;
    }


    let vlibrasAttempts = 0;

    const vlibrasInterval =
        setInterval(
            () => {

                vlibrasAttempts++;

                if (initializeVLibras()) {

                    clearInterval(
                        vlibrasInterval
                    );

                }

                if (vlibrasAttempts >= 20) {

                    clearInterval(
                        vlibrasInterval
                    );

                }

            },
            500
        );


    /* =====================================================
       FECHAR PAINEL DE ACESSIBILIDADE AO CLICAR FORA
    ===================================================== */

    document.addEventListener(
        "click",
        event => {

            if (
                !accessibilityPanel ||
                accessibilityPanel.hidden
            ) {
                return;
            }

            const clickedInside =
                accessibilityPanel.contains(
                    event.target
                );

            const clickedToggle =
                accessibilityToggle?.contains(
                    event.target
                );

            if (
                !clickedInside &&
                !clickedToggle
            ) {

                closeAccessibilityPanel();

            }

        }
    );


    /* =====================================================
       TECLADO — LIGHTBOX + MENU
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeMobileMenu();

                if (
                    accessibilityPanel &&
                    !accessibilityPanel.hidden
                ) {
                    closeAccessibilityPanel();
                }

            }

        }
    );


    /* =====================================================
       PREVENÇÃO DE DRAG ACIDENTAL NAS FOTOS
    ===================================================== */

    $$(
        ".photo-card img, " +
        ".people-feature img, " +
        ".teacher-photo img, " +
        ".lab-photo img, " +
        ".gallery-item img"
    ).forEach(image => {

        image.addEventListener(
            "dragstart",
            event => {
                event.preventDefault();
            }
        );

    });


    /* =====================================================
       MICROINTERAÇÃO DOS BOTÕES
    ===================================================== */

    $$(".btn, .explorer-card").forEach(
        element => {

            element.addEventListener(
                "pointerdown",
                () => {

                    if (
                        document.body.classList.contains(
                            "reduce-motion"
                        )
                    ) {
                        return;
                    }

                    element.animate(
                        [
                            {
                                transform: "scale(1)"
                            },
                            {
                                transform: "scale(.98)"
                            },
                            {
                                transform: "scale(1)"
                            }
                        ],
                        {
                            duration: 220,
                            easing: "ease-out"
                        }
                    );

                }
            );

        }
    );


    /* =====================================================
       DETECÇÃO DE IMAGENS AUSENTES
    ===================================================== */

    $$("img").forEach(image => {

        image.addEventListener(
            "error",
            () => {

                /*
                 * O HTML já possui placeholders.
                 * Aqui apenas garantimos que uma imagem
                 * quebrada nunca cause overflow.
                 */
                image.style.display =
                    "none";

            }
        );

    });


    /* =====================================================
       REDIMENSIONAMENTO
    ===================================================== */

    let resizeTimer;

    window.addEventListener(
        "resize",
        () => {

            clearTimeout(resizeTimer);

            resizeTimer =
                setTimeout(
                    () => {

                        updateScrollUI();

                    },
                    100
                );

        }
    );


    /* =====================================================
       INICIALIZAÇÃO
    ===================================================== */

    goToCourseSlide(0);

    updateScrollUI();

});
