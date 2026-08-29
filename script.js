:root{
  --green:#214d36;
  --green-dark:#153326;
  --green-light:#eaf1e7;
  --gold:#e5bd45;
  --gold-light:#f5df91;
  --cream:#fffdf7;
  --white:#ffffff;
  --text:#202820;
  --muted:#69736c;
  --border:#dfe4dc;
  --shadow:0 20px 50px rgba(25,55,38,.12);
}

*{
  box-sizing:border-box;
}

html{
  scroll-behavior:smooth;
}

body{
  margin:0;
  background:var(--cream);
  color:var(--text);
  font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
  line-height:1.55;
}

button,
a{
  font:inherit;
}

button{
  cursor:pointer;
}

a{
  color:inherit;
}

.skip-link{
  position:fixed;
  top:-100px;
  left:15px;
  z-index:9999;
  background:#000;
  color:#fff;
  padding:12px 18px;
  border-radius:8px;
}

.skip-link:focus{
  top:15px;
}

.header{
  position:sticky;
  top:0;
  z-index:100;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:13px 6vw;
  background:rgba(255,253,247,.92);
  backdrop-filter:blur(15px);
  border-bottom:1px solid var(--border);
}

.brand{
  display:flex;
  align-items:center;
  gap:10px;
  text-decoration:none;
}

.brand-symbol{
  width:43px;
  height:43px;
  border-radius:13px;
  background:var(--gold);
  display:grid;
  place-items:center;
  overflow:hidden;
  flex-shrink:0;
}

.brand-symbol img{
  width:100%;
  height:100%;
  object-fit:contain;
}

.brand-symbol span,
.placeholder-symbol{
  font-size:25px;
  color:var(--green-dark);
}

.brand strong{
  display:block;
  font-size:14px;
  letter-spacing:.08em;
}

.brand small{
  display:block;
  font-size:10px;
  color:var(--muted);
}

.nav{
  display:flex;
  gap:25px;
}

.nav a{
  text-decoration:none;
  font-size:13px;
  font-weight:800;
}

.nav a:hover{
  color:#678b5f;
}

.menu-button{
  display:none;
  border:1px solid var(--border);
  background:white;
  border-radius:10px;
  padding:8px 12px;
}

.hero{
  min-height:720px;
  padding:85px 7vw;
  display:grid;
  grid-template-columns:1fr 1fr;
  align-items:center;
  gap:60px;
  overflow:hidden;
  background:
    radial-gradient(circle at 80% 15%,rgba(229,189,69,.22),transparent 30%),
    radial-gradient(circle at 10% 80%,rgba(68,120,79,.14),transparent 30%),
    var(--cream);
}

.eyebrow{
  color:#547b5b;
  font-size:10px;
  font-weight:900;
  letter-spacing:.18em;
}

.hero h1{
  font-size:clamp(52px,7vw,88px);
  line-height:.94;
  margin:20px 0;
  max-width:750px;
  letter-spacing:-.05em;
}

.hero h1 span,
.section-heading h2 span,
.quiz-container h2 span,
.instagram-content h2 span{
  color:#668d60;
  font-family:Georgia,serif;
  font-style:italic;
}

.hero p{
  max-width:620px;
  font-size:18px;
  color:var(--muted);
}

.hero-buttons{
  display:flex;
  gap:12px;
  flex-wrap:wrap;
  margin-top:28px;
}

.button{
  display:inline-block;
  border-radius:999px;
  padding:13px 20px;
  text-decoration:none;
  font-weight:850;
  font-size:13px;
  border:1px solid var(--green);
}

.button-primary{
  background:var(--green);
  color:white;
}

.button-primary:hover{
  background:var(--green-dark);
}

.button-outline{
  background:transparent;
  color:var(--green);
}

.hero-tags{
  display:flex;
  flex-wrap:wrap;
  gap:8px;
  margin-top:25px;
}

.hero-tags span{
  padding:7px 11px;
  border:1px solid #d9dfd5;
  border-radius:999px;
  background:white;
  font-size:11px;
  font-weight:800;
}

.hero-art{
  min-height:500px;
  display:grid;
  place-items:center;
  position:relative;
}

.hero-card{
  position:relative;
  z-index:2;
  width:min(390px,90%);
  padding:35px;
  border-radius:30px;
  background:white;
  box-shadow:var(--shadow);
  border:1px solid #e4e5dc;
  transform:rotate(2deg);
}

.card-label,
.tag{
  font-size:10px;
  font-weight:900;
  letter-spacing:.14em;
  color:#608060;
}

.big-pharmacy-symbol{
  width:125px;
  height:125px;
  border-radius:35px;
  background:var(--gold-light);
  margin:30px 0 25px;
  display:grid;
  place-items:center;
  overflow:hidden;
}

.big-pharmacy-symbol img{
  width:100%;
  height:100%;
  object-fit:contain;
}

.big-pharmacy-symbol span{
  font-size:80px;
  color:var(--green);
}

.hero-card h3{
  font:32px/1.05 Georgia,serif;
  margin:0;
}

.hero-card p{
  color:var(--muted);
}

.mini-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:7px;
  margin-top:25px;
}

.mini-grid div{
  text-align:center;
  padding:10px 3px;
  border-radius:12px;
  background:#f3f5ef;
  font-size:21px;
}

.mini-grid small{
  display:block;
  font-size:9px;
  font-weight:800;
  color:#68726b;
}

.floating-shape{
  position:absolute;
  border-radius:50%;
}

.shape-one{
  width:300px;
  height:300px;
  border:1px solid #b9cbb6;
}

.shape-two{
  width:420px;
  height:420px;
  border:1px dashed #d4c078;
}

.section{
  padding:90px 7vw;
}

.section-heading{
  max-width:820px;
  margin-bottom:40px;
}

.section-heading h2{
  font:clamp(38px,5vw,62px)/1.02 Georgia,serif;
  margin:10px 0;
}

.section-heading p{
  color:var(--muted);
  font-size:16px;
}

.video-section{
  background:#fff;
}

.main-video-layout{
  display:grid;
  grid-template-columns:1.5fr 1fr;
  gap:25px;
  align-items:stretch;
}

.video-placeholder{
  min-height:390px;
  border-radius:26px;
  background:
    linear-gradient(135deg,#254f38,#496e52);
  color:white;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center;
  padding:35px;
  box-shadow:var(--shadow);
}

.play-circle{
  width:78px;
  height:78px;
  border-radius:50%;
  display:grid;
  place-items:center;
  background:var(--gold);
  color:var(--green-dark);
  font-size:25px;
  margin-bottom:20px;
}

.video-placeholder h3{
  font:30px Georgia,serif;
  margin:0 0 7px;
}

.video-placeholder p{
  color:#dbe6dc;
}

.video-placeholder small{
  color:#d1ded3;
}

.video-info{
  border:1px solid var(--border);
  border-radius:26px;
  padding:30px;
  background:#fbfcf8;
}

.video-info h3{
  font:31px Georgia,serif;
  margin:10px 0;
}

.video-info ul{
  list-style:none;
  padding:0;
  margin:25px 0;
}

.video-info li{
  padding:8px 0;
  font-size:14px;
}

.video-note{
  padding:13px;
  border-radius:12px;
  background:#e8f0e4;
  font-size:12px;
  font-weight:800;
}

.green-section{
  background:var(--green);
  color:white;
}

.green-section .section-heading p{
  color:#c8d6cc;
}

.green-section .eyebrow{
  color:var(--gold);
}

.interactive-cards{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:15px;
}

.info-card{
  min-height:260px;
  padding:24px;
  text-align:left;
  background:#2c5b42;
  color:white;
  border:1px solid #537560;
  border-radius:22px;
  transition:.25s;
}

.info-card:hover{
  transform:translateY(-7px);
  background:#315f46;
}

.info-card>span{
  float:right;
  color:#a9c0ad;
  font-size:11px;
}

.info-card>b{
  display:block;
  font-size:38px;
  margin:20px 0;
}

.info-card h3{
  margin:0;
  font-size:21px;
}

.info-card p{
  color:#c6d5ca;
  font-size:13px;
}

.info-card strong{
  font-size:12px;
  color:var(--gold);
}

.subject-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:13px;
}

.subject-grid button{
  min-height:130px;
  text-align:left;
  padding:20px;
  border:1px solid var(--border);
  border-radius:18px;
  background:white;
  transition:.2s;
}

.subject-grid button:hover{
  transform:translateY(-4px);
  border-color:#769579;
  box-shadow:var(--shadow);
}

.subject-grid b{
  display:block;
  font-size:16px;
}

.subject-grid small{
  display:block;
  color:var(--muted);
  margin-top:8px;
  font-size:12px;
}

.practice-section{
  background:#f5f0dd;
}

.challenge-card{
  background:var(--green);
  color:white;
  border-radius:27px;
  padding:32px;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:25px;
}

.challenge-card h3{
  font:34px Georgia,serif;
  margin:10px 0;
}

.challenge-card p{
  color:#cbd8ce;
}

.challenge-options{
  display:grid;
  gap:9px;
}

.challenge-options button{
  border:1px solid #66826e;
  background:#2c5b42;
  color:white;
  border-radius:12px;
  padding:14px;
  text-align:left;
}

.challenge-options button:hover{
  background:#3a684d;
}

.feedback{
  grid-column:1/-1;
  min-height:25px;
  font-weight:850;
}

.practice-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:20px;
  margin-top:20px;
}

.practice-box{
  padding:30px;
  border-radius:23px;
  background:white;
  border:1px solid #deded5;
}

.practice-box.yellow{
  background:var(--gold);
  border-color:#d6ad35;
}

.practice-box h3{
  font:28px Georgia,serif;
  margin:8px 0;
}

.soft-section{
  background:#eef3ea;
}

.detective-layout{
  display:grid;
  grid-template-columns:1fr 1fr;
  align-items:center;
  gap:60px;
}

.fake-package{
  width:min(320px,100%);
  height:430px;
  margin:auto;
  position:relative;
  background:#f6edcf;
  border:8px solid #315a40;
  border-radius:10px;
  box-shadow:15px 15px 0 var(--gold);
}

.package-top{
  padding:14px;
  background:#315a40;
  color:white;
  font-weight:900;
}

.package-top span{
  color:var(--gold);
}

.fake-package>strong{
  display:block;
  font:50px Georgia,serif;
  margin:55px 20px 0;
}

.fake-package>small{
  margin-left:20px;
}

.spot{
  position:absolute;
  width:39px;
  height:39px;
  border-radius:50%;
  border:3px solid white;
  background:var(--gold);
  color:var(--green-dark);
  font-weight:900;
}

.spot:nth-of-type(1){top:20%;left:10%}
.spot:nth-of-type(2){top:40%;right:12%}
.spot:nth-of-type(3){top:60%;left:10%}
.spot:nth-of-type(4){bottom:10%;right:12%}
.spot:nth-of-type(5){top:34%;left:42%}

.spot:disabled{
  background:var(--green);
  color:white;
}

.progress{
  height:10px;
  background:#d7dfd4;
  border-radius:99px;
  overflow:hidden;
}

.progress span{
  display:block;
  width:0;
  height:100%;
  background:var(--green);
  transition:.3s;
}

.found-item{
  padding:7px 0;
  border-bottom:1px solid #d9dfd5;
  font-size:12px;
}

.gallery{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:14px;
}

.gallery-item{
  min-height:220px;
  border-radius:20px;
  border:1px dashed #bdc9bb;
  background:#edf2e9;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center;
  color:#657167;
  transition:.2s;
}

.gallery-item:hover{
  transform:scale(1.02);
  background:#e5ece1;
}

.gallery-item.large{
  grid-column:span 2;
}

.gallery-item div{
  font-size:55px;
  margin-bottom:10px;
}

.gallery-item span{
  font-size:12px;
  font-weight:800;
}

.instagram-section{
  padding:90px 7vw;
  background:
    radial-gradient(circle at 80% 20%,rgba(229,189,69,.3),transparent 30%),
    #e8efe3;
}

.instagram-content{
  max-width:900px;
  margin:auto;
}

.instagram-content h2{
  font:clamp(38px,5vw,60px)/1.03 Georgia,serif;
  margin:12px 0;
}

.instagram-content>p{
  color:var(--muted);
}

.instagram-buttons{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:13px;
  margin-top:30px;
}

.instagram-card{
  display:flex;
  align-items:center;
  gap:15px;
  text-decoration:none;
  background:white;
  border:1px solid var(--border);
  padding:20px;
  border-radius:18px;
  transition:.2s;
}

.instagram-card:hover{
  transform:translateY(-4px);
  box-shadow:var(--shadow);
}

.instagram-card>span{
  font-size:30px;
}

.instagram-card div{
  flex:1;
}

.instagram-card small{
  display:block;
  color:#758077;
  font-size:9px;
  font-weight:900;
  letter-spacing:.1em;
}

.instagram-card strong{
  display:block;
  font-size:16px;
}

.instagram-card>b{
  font-size:20px;
}

.quiz-section{
  padding:95px 7vw;
  background:var(--green-dark);
  color:white;
}

.quiz-container{
  max-width:800px;
  margin:auto;
}

.quiz-container .eyebrow{
  color:var(--gold);
}

.quiz-container h2{
  font:55px Georgia,serif;
  margin:10px 0;
}

#quizQuestion{
  font-size:23px;
  margin:35px 0 20px;
}

.quiz-meta{
  display:flex;
  justify-content:space-between;
  color:#bdccc1;
  font-size:12px;
}

.quiz-progress{
  height:8px;
  background:#31533f;
  border-radius:99px;
  margin:13px 0 23px;
  overflow:hidden;
}

.quiz-progress span{
  display:block;
  width:0;
  height:100%;
  background:var(--gold);
  transition:.3s;
}

.quiz-options{
  display:grid;
  gap:9px;
}

.quiz-options button{
  padding:15px;
  text-align:left;
  border:1px solid #567261;
  border-radius:12px;
  background:#244734;
  color:white;
}

.quiz-options button.correct{
  background:#46764f;
}

.quiz-options button.wrong{
  background:#774b43;
}

.quiz-feedback{
  min-height:30px;
  font-weight:800;
}

.quiz-result{
  padding:22px;
  border:1px solid #597565;
  border-radius:16px;
}

.hidden{
  display:none!important;
}

footer{
  padding:35px 7vw;
  background:#10261b;
  color:white;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:20px;
}

.footer-brand{
  display:flex;
  align-items:center;
  gap:10px;
}

.footer-brand strong,
.footer-brand small{
  display:block;
}

footer p,
footer>small{
  color:#bdc9c0;
  font-size:12px;
}

.accessibility-button{
  position:fixed;
  right:18px;
  bottom:18px;
  z-index:200;
  border:0;
  border-radius:999px;
  background:var(--green);
  color:white;
  padding:12px 17px;
  font-weight:850;
  box-shadow:0 10px 30px #0003;
}

.accessibility-panel{
  position:fixed;
  right:18px;
  bottom:72px;
  z-index:201;
  width:min(340px,calc(100% - 36px));
  background:white;
  border:1px solid var(--border);
  border-radius:20px;
  padding:20px;
  box-shadow:0 20px 60px #0003;
  display:none;
}

.accessibility-panel.open{
  display:block;
}

.accessibility-header{
  display:flex;
  align-items:center;
  justify-content:space-between;
}

.accessibility-header h2{
  margin:0;
  font-size:20px;
}

.accessibility-header button{
  border:0;
  background:none;
  font-size:27px;
}

.accessibility-panel>button{
  width:100%;
  display:block;
  margin:6px 0;
  padding:10px;
  text-align:left;
  background:#f2f5ef;
  border:1px solid #dce2d9;
  border-radius:9px;
}

.accessibility-note{
  margin-top:12px;
  padding-top:12px;
  border-top:1px solid var(--border);
}

.accessibility-note p{
  font-size:11px;
  color:var(--muted);
}

.big-text{
  font-size:112%;
}

.small-text{
  font-size:92%;
}

.high-contrast,
.high-contrast *{
  background:#000!important;
  color:#fff!important;
  border-color:#fff!important;
}

.highlight-links a,
.highlight-links button{
  outline:3px solid var(--gold)!important;
  outline-offset:2px;
}

.reduced-motion *{
  animation:none!important;
  transition:none!important;
  scroll-behavior:auto!important;
}

.modal{
  position:fixed;
  inset:0;
  z-index:500;
  display:grid;
  place-items:center;
  padding:20px;
  background:rgba(12,34,23,.75);
}

.modal-box{
  position:relative;
  width:min(560px,100%);
  background:var(--cream);
  padding:35px;
  border-radius:23px;
  box-shadow:var(--shadow);
}

.modal-box h2{
  font:38px Georgia,serif;
}

.modal-close{
  position:absolute;
  right:14px;
  top:8px;
  border:0;
  background:none;
  font-size:28px;
}

@media(max-width:950px){

  .nav{
    display:none;
    position:absolute;
    top:69px;
    left:0;
    right:0;
    flex-direction:column;
    background:var(--cream);
    padding:20px 7vw;
    border-bottom:1px solid var(--border);
  }

  .nav.open{
    display:flex;
  }

  .menu-button{
    display:block;
  }

  .hero{
    grid-template-columns:1fr;
  }

  .interactive-cards,
  .subject-grid{
    grid-template-columns:repeat(2,1fr);
  }

  .main-video-layout,
  .detective-layout{
    grid-template-columns:1fr;
  }

}

@media(max-width:650px){

  .section,
  .instagram-section,
  .quiz-section{
    padding:65px 5vw;
  }

  .hero{
    padding:60px 5vw;
  }

  .hero h1{
    font-size:51px;
  }

  .interactive-cards,
  .subject-grid,
  .practice-grid,
  .instagram-buttons{
    grid-template-columns:1fr;
  }

  .challenge-card{
    grid-template-columns:1fr;
  }

  .gallery{
    grid-template-columns:1fr;
  }

  .gallery-item.large{
    grid-column:span 1;
  }

  .mini-grid{
    grid-template-columns:repeat(2,1fr);
  }

  .hero-art{
    min-height:390px;
  }

  .hero-card{
    width:95%;
  }

  .accessibility-button span{
    display:none;
  }

  footer{
    flex-direction:column;
    align-items:flex-start;
  }

}
