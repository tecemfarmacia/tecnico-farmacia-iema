/* =========================================
   PRELOADER
========================================= */

const preloader = document.getElementById("preloader");

window.addEventListener("load", () => {

  setTimeout(() => {

    if (preloader) {

      preloader.style.opacity = "0";

      preloader.style.pointerEvents = "none";

      setTimeout(() => {

        preloader.remove();

      }, 450);

    }

  }, 350);

});


/* =========================================
   CABEÇALHO
========================================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

  if (!header) return;

  if (window.scrollY > 20) {

    header.classList.add("scrolled");

  } else {

    header.classList.remove("scrolled");

  }

});


/* =========================================
   MENU MOBILE
========================================= */

const menuToggle = document.getElementById("menuToggle");

const mainNav = document.getElementById("mainNav");


if (menuToggle && mainNav) {

  menuToggle.addEventListener("click", () => {

    const isOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  });


  document
    .querySelectorAll(".main-nav a")
    .forEach((link) => {

      link.addEventListener("click", () => {

        mainNav.classList.remove("open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

      });

    });

}


/* =========================================
   ANIMAÇÕES AO ROLAR
========================================= */

const revealElements =
  document.querySelectorAll(".reveal");


const revealObserver =
  new IntersectionObserver(
    (entries, observer) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach((element, index) => {

  element.style.transitionDelay =
    `${Math.min(index * 35, 220)}ms`;

  revealObserver.observe(element);

});


/* =========================================
   BOTÃO VOLTAR AO TOPO
========================================= */

const backTop =
  document.getElementById("backTop");


window.addEventListener("scroll", () => {

  if (!backTop) return;

  if (window.scrollY > 500) {

    backTop.classList.add("show");

  } else {

    backTop.classList.remove("show");

  }

});


if (backTop) {

  backTop.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}


/* =========================================
   ANO AUTOMÁTICO
========================================= */

const year =
  document.getElementById("year");


if (year) {

  year.textContent =
    new Date().getFullYear();

}
