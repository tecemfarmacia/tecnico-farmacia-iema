/* =========================================================
   TÉCNICO EM FARMÁCIA — IEMA VIANA
   STYLE.CSS
   ========================================================= */

:root {
  --gold-1: #ffd84d;
  --gold-2: #f5b800;
  --gold-3: #d99500;
  --yellow: #fff3a6;
  --white: #ffffff;
  --off-white: #fffdf5;
  --green: #3b8c68;
  --green-light: #dff4e8;
  --text: #302813;
  --text-soft: #6d6244;
  --dark-gold: #6b4d00;
  --shadow: 0 20px 60px rgba(180, 130, 0, 0.15);
  --shadow-small: 0 10px 30px rgba(180, 130, 0, 0.12);
  --radius: 24px;
  --radius-small: 16px;
  --max-width: 1180px;
  --header-height: 74px;
  --transition: 0.3s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 90px;
}

body {
  font-family: Inter, Arial, Helvetica, sans-serif;
  color: var(--text);
  background:
    radial-gradient(circle at 10% 10%, rgba(255, 216, 77, 0.2), transparent 28%),
    radial-gradient(circle at 90% 30%, rgba(245, 184, 0, 0.12), transparent 30%),
    var(--off-white);
  line-height: 1.6;
  overflow-x: hidden;
}

body.high-contrast {
  --text: #000000;
  --text-soft: #111111;
  --white: #ffffff;
  --off-white: #ffffff;
  --yellow: #ffff00;
  --gold-1: #ffff00;
  --gold-2: #ffcc00;
  --gold-3: #000000;
  --green: #006400;
  filter: contrast(1.15);
}

body.reduce-motion *,
body.reduce-motion *::before,
body.reduce-motion *::after {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
  scroll-behavior: auto !important;
}

img,
video {
  max-width: 100%;
  display: block;
}

button,
a,
input {
  font: inherit;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

button:focus-visible,
a:focus-visible,
input:focus-visible {
  outline: 4px solid rgba(59, 140, 104, 0.55);
  outline-offset: 3px;
}

/* =========================================================
   ACESSIBILIDADE
   ========================================================= */

.skip-link {
  position: fixed;
  left: 16px;
  top: -100px;
  z-index: 99999;
  background: var(--gold-2);
  color: #211800;
  padding: 12px 18px;
  border-radius: 10px;
  font-weight: 800;
  transition: top 0.2s;
}

.skip-link:focus {
  top: 15px;
}

.accessibility-toggle {
  position: fixed;
  right: 18px;
  bottom: 88px;
  width: 48px;
  height: 48px;
  border: 1px solid rgba(217, 149, 0, 0.35);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.94);
  color: var(--dark-gold);
  box-shadow: var(--shadow-small);
  z-index: 9000;
}

.accessibility-panel {
  position: fixed;
  right: 18px;
  bottom: 145px;
  width: min(310px, calc(100vw - 36px));
  padding: 18px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid rgba(217, 149, 0, 0.3);
  box-shadow: var(--shadow);
  z-index: 8999;
  opacity: 0;
  visibility: hidden;
  transform: translateY(15px) scale(0.97);
  transition: var(--transition);
}

.accessibility-panel.open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0) scale(1);
}

.accessibility-panel h3 {
  font-size: 1rem;
  margin-bottom: 12px;
}

.accessibility-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.accessibility-actions button {
  border: 1px solid rgba(217, 149, 0, 0.25);
  background: #fffaf0;
  color: var(--text);
  padding: 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 700;
}

.accessibility-actions button:hover {
  background: var(--yellow);
}

.audio-controls {
  margin-top: 12px;
  display: flex;
  gap: 7px;
}

.audio-controls button {
  flex: 1;
  border: none;
  border-radius: 10px;
  padding: 9px;
  background: var(--gold-1);
  color: #3d2c00;
  font-weight: 800;
  font-size: 0.78rem;
}

/* =========================================================
   HEADER
   ========================================================= */

.site-header {
  position: fixed;
  inset: 0 0 auto;
  height: var(--header-height);
  z-index: 8000;
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(217, 149, 0, 0.13);
}

.header-inner {
  width: min(100% - 32px, var(--max-width));
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 900;
  letter-spacing: -0.03em;
}

.brand-symbol {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--gold-1), var(--gold-3));
  box-shadow: 0 8px 20px rgba(217, 149, 0, 0.22);
  color: white;
  font-weight: 900;
}

.brand small {
  display: block;
  font-size: 0.65rem;
  color: var(--text-soft);
  letter-spacing: 0.08em;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 6px;
}

.main-nav a {
  padding: 9px 11px;
  border-radius: 10px;
  font-size: 0.78rem;
  font-weight: 800;
  color: var(--text-soft);
  transition: var(--transition);
}

.main-nav a:hover,
.main-nav a.active {
  background: var(--yellow);
  color: var(--dark-gold);
}

.menu-toggle {
  display: none;
  width: 44px;
  height: 44px;
  border: 1px solid rgba(217, 149, 0, 0.25);
  background: white;
  border-radius: 12px;
}

.menu-toggle span {
  display: block;
  width: 20px;
  height: 2px;
  margin: 4px auto;
  background: var(--dark-gold);
  transition: var(--transition);
}

.progress-bar {
  position: absolute;
  left: 0;
  bottom: -2px;
  height: 3px;
  width: 0%;
  background: linear-gradient(90deg, var(--gold-3), var(--gold-1), var(--green));
}

/* =========================================================
   GERAL
   ========================================================= */

main {
  padding-top: var(--header-height);
}

.section {
  position: relative;
  padding: 100px 20px;
  overflow: hidden;
}

.section-inner {
  position: relative;
  width: min(100%, var(--max-width));
  margin: auto;
}

.section-header {
  max-width: 700px;
  margin-bottom: 45px;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 13px;
  padding: 7px 12px;
  border: 1px solid rgba(217, 149, 0, 0.3);
  border-radius: 999px;
  background: rgba(255, 216, 77, 0.18);
  color: var(--dark-gold);
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.section-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1;
  letter-spacing: -0.055em;
  margin-bottom: 16px;
}

.section-description {
  color: var(--text-soft);
  max-width: 650px;
}

.gold-text {
  background: linear-gradient(90deg, var(--gold-3), #e7a900, var(--gold-1));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.reveal {
  opacity: 0;
  transform: translateY(35px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  min-height: 48px;
  padding: 12px 20px;
  border-radius: 14px;
  border: 1px solid transparent;
  font-weight: 900;
  font-size: 0.82rem;
  transition: var(--transition);
}

.btn-primary {
  color: #3a2900;
  background: linear-gradient(135deg, var(--gold-1), var(--gold-2));
  box-shadow: 0 10px 25px rgba(217, 149, 0, 0.2);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(217, 149, 0, 0.28);
}

.btn-secondary {
  color: var(--dark-gold);
  background: white;
  border-color: rgba(217, 149, 0, 0.3);
}

.btn-secondary:hover {
  background: var(--yellow);
}

/* =========================================================
   HERO
   ========================================================= */

.hero {
  min-height: calc(100vh - var(--header-height));
  display: flex;
  align-items: center;
  padding-top: 65px;
  padding-bottom: 65px;
  background:
    radial-gradient(circle at 80% 20%, rgba(255, 216, 77, 0.5), transparent 25%),
    radial-gradient(circle at 10% 80%, rgba(59, 140, 104, 0.08), transparent 25%);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 50px;
  align-items: center;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-kicker {
  display: inline-flex;
  padding: 7px 13px;
  border-radius: 999px;
  background: white;
  border: 1px solid rgba(217, 149, 0, 0.25);
  color: var(--dark-gold);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  margin-bottom: 20px;
}

.hero h1 {
  font-size: clamp(3.2rem, 8vw, 6.7rem);
  line-height: 0.87;
  letter-spacing: -0.075em;
  margin-bottom: 25px;
}

.hero-subtitle {
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  font-weight: 800;
  margin-bottom: 15px;
}

.hero-description {
  max-width: 570px;
  color: var(--text-soft);
  margin-bottom: 28px;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.hero-visual {
  position: relative;
  min-height: 500px;
  display: grid;
  place-items: center;
}

.science-orbit {
  position: absolute;
  width: 400px;
  height: 400px;
  border: 1px dashed rgba(217, 149, 0, 0.38);
  border-radius: 50%;
  animation: spin 25s linear infinite;
}

.science-orbit::before,
.science-orbit::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  background: var(--gold-2);
  box-shadow: 0 0 30px rgba(245, 184, 0, 0.6);
}

.science-orbit::before {
  width: 13px;
  height: 13px;
  top: 25px;
  left: 50%;
}

.science-orbit::after {
  width: 9px;
  height: 9px;
  right: 45px;
  bottom: 70px;
}

.pharma-logo-placeholder {
  position: relative;
  width: 240px;
  height: 240px;
  border-radius: 35% 65% 55% 45%;
  background: linear-gradient(135deg, white, #fff7c9);
  border: 2px solid rgba(217, 149, 0, 0.35);
  box-shadow:
    0 30px 80px rgba(217, 149, 0, 0.22),
    inset 0 0 60px rgba(255, 216, 77, 0.18);
  display: grid;
  place-items: center;
  z-index: 2;
}

.pharma-logo-placeholder img {
  width: 70%;
  height: 70%;
  object-fit: contain;
}

.pharma-placeholder-text {
  text-align: center;
  padding: 20px;
  color: var(--dark-gold);
}

.pharma-placeholder-text strong {
  display: block;
  font-size: 3rem;
  line-height: 1;
}

.pharma-placeholder-text span {
  font-size: 0.65rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.floating-object {
  position: absolute;
  display: grid;
  place-items: center;
  width: 62px;
  height: 62px;
  border-radius: 20px;
  background: white;
  border: 1px solid rgba(217, 149, 0, 0.3);
  box-shadow: var(--shadow-small);
  color: var(--gold-3);
  z-index: 3;
  font-size: 1.5rem;
}

.floating-object.one {
  top: 8%;
  left: 8%;
  animation: float 4s ease-in-out infinite;
}

.floating-object.two {
  right: 3%;
  top: 25%;
  animation: float 5s ease-in-out infinite 0.5s;
}

.floating-object.three {
  bottom: 12%;
  left: 12%;
  animation: float 4.5s ease-in-out infinite 1s;
}

.floating-object.four {
  bottom: 8%;
  right: 10%;
  animation: float 5.5s ease-in-out infinite 0.8s;
}

.hero-scroll {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--text-soft);
  font-size: 0.72rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

/* =========================================================
   CURSO
   ========================================================= */

.course-section {
  background: white;
}

.course-carousel {
  position: relative;
  overflow: hidden;
  border-radius: 30px;
  background: linear-gradient(135deg, #fff8cf, white);
  border: 1px solid rgba(217, 149, 0, 0.2);
  box-shadow: var(--shadow);
}

.course-track {
  display: flex;
  transition: transform 0.5s ease;
}

.course-slide {
  min-width: 100%;
  padding: clamp(30px, 6vw, 70px);
  min-height: 350px;
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 30px;
  align-items: center;
}

.course-number {
  width: 78px;
  height: 78px;
  display: grid;
  place-items: center;
  border-radius: 24px;
  background: linear-gradient(135deg, var(--gold-1), var(--gold-3));
  color: white;
  font-weight: 1000;
  font-size: 1.2rem;
  box-shadow: 0 15px 30px rgba(217, 149, 0, 0.22);
}

.course-slide h3 {
  font-size: clamp(1.8rem, 4vw, 3rem);
  line-height: 1;
  margin-bottom: 15px;
}

.course-slide p {
  color: var(--text-soft);
  max-width: 700px;
}

.carousel-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px 25px;
}

.carousel-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(217, 149, 0, 0.25);
  background: white;
  color: var(--dark-gold);
}

.carousel-dots {
  display: flex;
  gap: 7px;
}

.carousel-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  border: none;
  background: #e4d9ad;
  padding: 0;
}

.carousel-dot.active {
  width: 26px;
  border-radius: 20px;
  background: var(--gold-2);
}

/* =========================================================
   CARDS DE APRENDIZADO
   ========================================================= */

.learning-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.learning-card {
  border: 1px solid rgba(217, 149, 0, 0.18);
  background: white;
  border-radius: var(--radius-small);
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(180, 130, 0, 0.06);
}

.learning-card:last-child {
  grid-column: span 2;
}

.learning-header {
  width: 100%;
  border: none;
  background: transparent;
  text-align: left;
  padding: 23px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.learning-icon {
  width: 50px;
  height: 50px;
  flex: 0 0 50px;
  display: grid;
  place-items: center;
  border-radius: 15px;
  background: linear-gradient(135deg, #fff4a9, white);
  border: 1px solid rgba(217, 149, 0, 0.2);
  font-size: 1.35rem;
}

.learning-title {
  flex: 1;
}

.learning-title strong {
  display: block;
  font-size: 0.94rem;
}

.learning-title span {
  display: block;
  margin-top: 2px;
  color: var(--text-soft);
  font-size: 0.73rem;
}

.learning-chevron {
  transition: transform var(--transition);
  font-size: 1.2rem;
  color: var(--gold-3);
}

.learning-card.open .learning-chevron {
  transform: rotate(180deg);
}

.learning-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease;
}

.learning-content-inner {
  padding: 0 23px 24px 88px;
  color: var(--text-soft);
  font-size: 0.9rem;
}

.learning-card.open {
  border-color: rgba(217, 149, 0, 0.42);
  box-shadow: var(--shadow-small);
}

/* =========================================================
   GALERIAS
   ========================================================= */

.gallery-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr;
  grid-auto-rows: 220px;
  gap: 13px;
}

.gallery-item {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background: linear-gradient(135deg, #fff3a1, white);
  border: 1px solid rgba(217, 149, 0, 0.18);
  cursor: pointer;
}

.gallery-item:first-child {
  grid-row: span 2;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-item:hover img {
  transform: scale(1.06);
}

.image-placeholder {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  padding: 20px;
  text-align: center;
  color: var(--dark-gold);
  background:
    radial-gradient(circle at 30% 20%, rgba(255,255,255,.8), transparent 25%),
    linear-gradient(135deg, #fff1a0, #fffdf4);
}

.image-placeholder-icon {
  font-size: 2.4rem;
  margin-bottom: 7px;
}

.image-placeholder strong {
  display: block;
  font-size: 0.9rem;
}

.image-placeholder span {
  display: block;
  font-size: 0.7rem;
  color: var(--text-soft);
  margin-top: 3px;
}

.gallery-overlay {
  position: absolute;
  inset: auto 0 0;
  padding: 25px 17px 15px;
  color: white;
  background: linear-gradient(transparent, rgba(40, 30, 0, 0.7));
  opacity: 0;
  transition: var(--transition);
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

/* =========================================================
   LABORATÓRIO
   ========================================================= */

.lab-section {
  background:
    radial-gradient(circle at 85% 20%, rgba(59, 140, 104, 0.11), transparent 28%),
    linear-gradient(135deg, #fff5ad, white 65%);
}

.lab-layout {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 40px;
  align-items: center;
}

.lab-visual {
  position: relative;
  min-height: 430px;
  display: grid;
  place-items: center;
}

.lab-beaker {
  width: 180px;
  height: 230px;
  position: relative;
  border: 4px solid rgba(59, 140, 104, 0.4);
  border-top: 0;
  border-radius: 15px 15px 55px 55px;
  background: linear-gradient(to top, rgba(59, 140, 104, 0.28) 35%, transparent 35%);
  transform: perspective(600px) rotate(-4deg);
  box-shadow: inset 0 0 30px rgba(59, 140, 104, 0.1);
}

.lab-beaker::before {
  content: "";
  position: absolute;
  width: 70px;
  height: 60px;
  border: 4px solid rgba(59, 140, 104, 0.4);
  border-bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  top: -55px;
  border-radius: 8px 8px 0 0;
}

.lab-bubble {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255,255,255,.7);
  animation: bubble 3s ease-in-out infinite;
}

.lab-bubble.b1 {
  bottom: 35%;
  left: 30%;
}

.lab-bubble.b2 {
  bottom: 50%;
  right: 30%;
  animation-delay: 1s;
}

.lab-bubble.b3 {
  bottom: 25%;
  left: 55%;
  animation-delay: .5s;
}

.lab-molecule {
  position: absolute;
  width: 120px;
  height: 120px;
  border: 2px dashed rgba(217, 149, 0, 0.5);
  border-radius: 50%;
  animation: spin 14s linear infinite;
}

.lab-molecule::before,
.lab-molecule::after {
  content: "";
  position: absolute;
  width: 14px;
  height: 14px;
  background: var(--gold-2);
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(245,184,0,.5);
}

.lab-molecule::before {
  top: -7px;
  left: 50%;
}

.lab-molecule::after {
  right: -7px;
  top: 50%;
}

.lab-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 13px;
}

.lab-card {
  padding: 23px;
  border-radius: 19px;
  background: rgba(255,255,255,.85);
  border: 1px solid rgba(217,149,0,.2);
  transition: var(--transition);
}

.lab-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-small);
}

.lab-card h3 {
  font-size: .9rem;
  margin-bottom: 8px;
  color: var(--dark-gold);
}

.lab-card p {
  color: var(--text-soft);
  font-size: .82rem;
}

/* =========================================================
   VÍDEO
   ========================================================= */

.video-section {
  background: white;
}

.video-wrapper {
  position: relative;
  aspect-ratio: 16 / 9;
  max-height: 650px;
  overflow: hidden;
  border-radius: 28px;
  background: #fff2a1;
  border: 1px solid rgba(217,149,0,.25);
  box-shadow: var(--shadow);
}

.video-wrapper video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #fff2a1;
}

.video-placeholder {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  text-align: center;
  padding: 30px;
  background:
    radial-gradient(circle at 50% 40%, rgba(255,255,255,.8), transparent 30%),
    linear-gradient(135deg, #ffe66b, #fffdf4);
  z-index: 2;
  transition: opacity .3s ease;
}

.video-placeholder.hidden {
  opacity: 0;
  pointer-events: none;
}

.play-circle {
  width: 90px;
  height: 90px;
  margin: 0 auto 15px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: white;
  color: var(--gold-3);
  font-size: 2rem;
  box-shadow: 0 15px 45px rgba(217,149,0,.25);
}

.video-placeholder h3 {
  font-size: clamp(1.5rem,4vw,2.5rem);
}

.video-placeholder p {
  color: var(--text-soft);
  font-size: .85rem;
}

/* =========================================================
   ORIENTAÇÕES
   ========================================================= */

.info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.info-card {
  border: 1px solid rgba(217,149,0,.18);
  border-radius: 20px;
  background: white;
  overflow: hidden;
  box-shadow: 0 7px 25px rgba(180,130,0,.05);
}

.info-card button {
  width: 100%;
  padding: 24px;
  background: transparent;
  border: none;
  text-align: left;
  display: flex;
  gap: 14px;
  align-items: center;
}

.info-icon {
  width: 45px;
  height: 45px;
  flex: 0 0 45px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: #fff4a4;
}

.info-card h3 {
  font-size: .9rem;
}

.info-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height .4s ease;
}

.info-content p {
  padding: 0 24px 24px 83px;
  color: var(--text-soft);
  font-size: .83rem;
}

.info-card.open {
  box-shadow: var(--shadow-small);
  border-color: rgba(217,149,0,.4);
}

/* =========================================================
   EXPLORAR
   ========================================================= */

.explore-section {
  background: linear-gradient(135deg, #fff2a0, white);
}

.explore-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

.explore-card {
  min-height: 190px;
  padding: 25px;
  border-radius: 24px;
  border: 1px solid rgba(217,149,0,.2);
  background: rgba(255,255,255,.75);
  transition: var(--transition);
  text-align: left;
  cursor: pointer;
}

.explore-card:hover {
  transform: translateY(-8px) rotate(-1deg);
  box-shadow: var(--shadow);
  background: white;
}

.explore-icon {
  font-size: 2.3rem;
  margin-bottom: 22px;
}

.explore-card h3 {
  font-size: 1rem;
  margin-bottom: 5px;
}

.explore-card span {
  font-size: .74rem;
  color: var(--text-soft);
}

/* =========================================================
   QUIZ
   ========================================================= */

.quiz-section {
  background: white;
}

.quiz-box {
  max-width: 800px;
  margin: auto;
  border-radius: 30px;
  padding: clamp(25px,5vw,55px);
  background:
    radial-gradient(circle at 90% 10%, rgba(255,216,77,.3), transparent 25%),
    #fffdf5;
  border: 1px solid rgba(217,149,0,.22);
  box-shadow: var(--shadow);
}

.quiz-progress {
  height: 7px;
  border-radius: 10px;
  background: #eee5c5;
  overflow: hidden;
  margin-bottom: 30px;
}

.quiz-progress-bar {
  width: 20%;
  height: 100%;
  background: linear-gradient(90deg,var(--gold-3),var(--gold-1));
  transition: width .35s ease;
}

.quiz-counter {
  color: var(--text-soft);
  font-size: .75rem;
  font-weight: 800;
  margin-bottom: 8px;
}

.quiz-question {
  font-size: clamp(1.5rem,4vw,2.5rem);
  line-height: 1.1;
  margin-bottom: 25px;
}

.quiz-options {
  display: grid;
  gap: 10px;
}

.quiz-option {
  width: 100%;
  text-align: left;
  padding: 16px;
  border-radius: 15px;
  background: white;
  border: 2px solid rgba(217,149,0,.15);
  transition: var(--transition);
  font-weight: 750;
}

.quiz-option:hover:not(:disabled) {
  border-color: var(--gold-2);
  background: #fff9d9;
  transform: translateX(4px);
}

.quiz-option.correct {
  border-color: var(--green);
  background: var(--green-light);
}

.quiz-option.wrong {
  border-color: #c85b43;
  background: #fff0ed;
}

.quiz-feedback {
  min-height: 30px;
  margin-top: 17px;
  font-weight: 800;
  font-size: .85rem;
}

.quiz-next {
  margin-top: 20px;
  display: none;
}

.quiz-next.show {
  display: inline-flex;
}

.quiz-result {
  text-align: center;
  display: none;
}

.quiz-result.show {
  display: block;
}

.quiz-result-score {
  font-size: 4rem;
  line-height: 1;
  font-weight: 1000;
  color: var(--gold-3);
  margin: 15px 0;
}

/* =========================================================
   INSTAGRAM
   ========================================================= */

.instagram-section {
  background:
    radial-gradient(circle at 20% 30%, rgba(255,216,77,.3), transparent 28%),
    var(--off-white);
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 18px;
}

.social-card {
  position: relative;
  padding: 30px;
  border-radius: 25px;
  background: white;
  border: 1px solid rgba(217,149,0,.18);
  box-shadow: var(--shadow-small);
  overflow: hidden;
  transition: var(--transition);
}

.social-card:hover {
  transform: translateY(-5px);
}

.social-card::after {
  content: "";
  position: absolute;
  width: 150px;
  height: 150px;
  right: -50px;
  top: -50px;
  border-radius: 50%;
  background: rgba(255,216,77,.25);
}

.social-icon {
  width: 55px;
  height: 55px;
  border-radius: 17px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg,var(--gold-1),var(--gold-3));
  color: white;
  font-size: 1.4rem;
  margin-bottom: 20px;
}

.social-card h3 {
  font-size: 1rem;
  margin-bottom: 4px;
}

.social-handle {
  color: var(--gold-3);
  font-weight: 900;
  margin-bottom: 15px;
}

/* =========================================================
   FOOTER
   ========================================================= */

.site-footer {
  position: relative;
  padding: 60px 20px 35px;
  background: #fff8cf;
  border-top: 1px solid rgba(217,149,0,.18);
}

.footer-inner {
  width: min(100%, var(--max-width));
  margin: auto;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  align-items: flex-end;
}

.footer-title {
  font-size: 1.7rem;
  font-weight: 1000;
  letter-spacing: -.04em;
}

.footer-subtitle {
  color: var(--text-soft);
  margin-top: 6px;
  font-size: .82rem;
}

.footer-links {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.footer-links a {
  padding: 9px 13px;
  border-radius: 10px;
  background: white;
  border: 1px solid rgba(217,149,0,.18);
  font-size: .75rem;
  font-weight: 800;
}

.footer-copy {
  width: min(100%, var(--max-width));
  margin: 35px auto 0;
  padding-top: 20px;
  border-top: 1px solid rgba(217,149,0,.15);
  color: var(--text-soft);
  font-size: .7rem;
}

/* =========================================================
   LIGHTBOX
   ========================================================= */

.lightbox {
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: grid;
  place-items: center;
  padding: 25px;
  background: rgba(20, 15, 0, .88);
  opacity: 0;
  visibility: hidden;
  transition: opacity .3s ease;
}

.lightbox.open {
  opacity: 1;
  visibility: visible;
}

.lightbox-content {
  position: relative;
  width: min(100%, 1000px);
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-image {
  max-width: 100%;
  max-height: 82vh;
  object-fit: contain;
  border-radius: 15px;
  box-shadow: 0 30px 100px rgba(0,0,0,.45);
}

.lightbox-close,
.lightbox-prev,
.lightbox-next {
  position: absolute;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: none;
  background: white;
  color: var(--dark-gold);
  font-size: 1.2rem;
  z-index: 3;
}

.lightbox-close {
  right: 0;
  top: -60px;
}

.lightbox-prev {
  left: -60px;
}

.lightbox-next {
  right: -60px;
}

.lightbox-caption {
  position: absolute;
  left: 0;
  bottom: -40px;
  color: white;
  font-size: .8rem;
}

/* =========================================================
   MODAIS
   ========================================================= */

.custom-modal {
  position: fixed;
  inset: 0;
  z-index: 9998;
  background: rgba(25,18,0,.7);
  display: grid;
  place-items: center;
  padding: 20px;
  opacity: 0;
  visibility: hidden;
  transition: var(--transition);
}

.custom-modal.open {
  opacity: 1;
  visibility: visible;
}

.modal-card {
  width: min(100%, 600px);
  max-height: 90vh;
  overflow-y: auto;
  background: white;
  border-radius: 26px;
  padding: 35px;
  position: relative;
  box-shadow: var(--shadow);
  transform: translateY(20px) scale(.97);
  transition: var(--transition);
}

.custom-modal.open .modal-card {
  transform: translateY(0) scale(1);
}

.modal-close {
  position: absolute;
  right: 15px;
  top: 15px;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: #fff4aa;
}

/* =========================================================
   ANIMAÇÕES
   ========================================================= */

@keyframes float {
  0%,100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes bubble {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  100% {
    transform: translateY(-90px);
    opacity: 0;
  }
}

/* =========================================================
   RESPONSIVIDADE
   ========================================================= */

@media (max-width: 980px) {
  .main-nav {
    position: fixed;
    top: calc(var(--header-height) + 8px);
    right: 16px;
    width: min(290px, calc(100vw - 32px));
    padding: 12px;
    flex-direction: column;
    align-items: stretch;
    background: rgba(255,255,255,.98);
    border: 1px solid rgba(217,149,0,.2);
    border-radius: 20px;
    box-shadow: var(--shadow);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: var(--transition);
  }

  .main-nav.open {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .main-nav a {
    padding: 13px;
  }

  .menu-toggle {
    display: block;
  }

  .hero-grid,
  .lab-layout {
    grid-template-columns: 1fr;
  }

  .hero {
    padding-top: 45px;
  }

  .hero-content {
    text-align: center;
  }

  .hero-description {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-buttons {
    justify-content: center;
  }

  .hero-visual {
    min-height: 390px;
  }

  .info-grid {
    grid-template-columns: repeat(2,1fr);
  }

  .explore-grid {
    grid-template-columns: repeat(2,1fr);
  }
}

@media (max-width: 700px) {
  .section {
    padding: 75px 16px;
  }

  .section-title {
    font-size: 2.3rem;
  }

  .hero h1 {
    font-size: clamp(3rem, 17vw, 5rem);
  }

  .hero-visual {
    min-height: 330px;
  }

  .science-orbit {
    width: 290px;
    height: 290px;
  }

  .pharma-logo-placeholder {
    width: 180px;
    height: 180px;
  }

  .floating-object {
    width: 48px;
    height: 48px;
    font-size: 1.1rem;
    border-radius: 15px;
  }

  .course-slide {
    grid-template-columns: 1fr;
    gap: 18px;
    min-height: 390px;
  }

  .learning-grid {
    grid-template-columns: 1fr;
  }

  .learning-card:last-child {
    grid-column: span 1;
  }

  .learning-content-inner {
    padding-left: 23px;
  }

  .gallery-grid {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 170px;
  }

  .gallery-item:first-child {
    grid-row: span 1;
  }

  .lab-cards {
    grid-template-columns: 1fr;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }

  .explore-grid {
    grid-template-columns: 1fr 1fr;
  }

  .social-grid {
    grid-template-columns: 1fr;
  }

  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .lightbox-prev {
    left: 8px;
    bottom: 10px;
    top: auto;
  }

  .lightbox-next {
    right: 8px;
    bottom: 10px;
    top: auto;
  }

  .lightbox-close {
    right: 0;
    top: -55px;
  }
}

@media (max-width: 430px) {
  .brand small {
    display: none;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .hero-buttons .btn {
    width: 100%;
  }

  .explore-grid {
    grid-template-columns: 1fr;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 210px;
  }

  .social-card {
    padding: 23px;
  }
}
