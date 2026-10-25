* {
  box-sizing: border-box;
}

:root {
  --bg-1: #fffafc;
  --bg-2: #ffeaf4;
  --bg-3: #ffd7ea;
  --pink-1: #ff7ab6;
  --pink-2: #ff5ca8;
  --pink-3: #ffb8d9;
  --purple: #8e60ff;
  --rose: #ff4d7d;
  --text: #5e2742;
  --soft: #8b5f70;
  --white: #fff;
  --shadow: rgba(173, 76, 128, 0.18);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: "Be Vietnam Pro", sans-serif;
  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 30%, var(--bg-3) 100%);
  color: var(--text);
  position: relative;
  overflow-x: hidden;
}

#fireworks {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  pointer-events: none;
  z-index: 0;
}

.bg-decor {
  position: fixed;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 1;
}

.sparkle {
  position: absolute;
  font-size: clamp(1rem, 2vw, 2rem);
  color: rgba(255, 122, 182, 0.28);
  animation: float 8s ease-in-out infinite;
}

.s1 { top: 8%; left: 10%; }
.s2 { top: 28%; right: 16%; animation-delay: 1.5s; }
.s3 { bottom: 18%; left: 18%; animation-delay: 2s; }
.s4 { bottom: 12%; right: 20%; animation-delay: 2.8s; }

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.45; }
  50% { transform: translateY(-18px) rotate(8deg); opacity: 1; }
}

.page-shell {
  position: relative;
  z-index: 2;
  max-width: 1160px;
  margin: 0 auto;
  padding: 48px 20px 80px;
}

.hero {
  text-align: center;
  padding-top: 24px;
}

.eyebrow {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 122, 182, 0.25);
  color: var(--rose);
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 0.75rem;
}

.hero h1 {
  margin: 20px 0 0;
  font-family: "Dancing Script", cursive;
  font-size: clamp(3rem, 7vw, 7rem);
  line-height: 0.95;
  color: var(--rose);
  text-shadow: 0 8px 30px rgba(255, 93, 168, 0.2);
}

.hero h2 {
  margin: 12px 0 0;
  font-size: clamp(2rem, 5vw, 4rem);
  color: var(--text);
}

.subtitle {
  max-width: 780px;
  margin: 18px auto 0;
  font-size: 1.06rem;
  line-height: 1.8;
  color: var(--soft);
}

.countdown-card,
.card-letter,
.message-box,
.letter-block,
.tribute {
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(255, 122, 182, 0.25);
  border-radius: 30px;
  box-shadow: 0 22px 50px var(--shadow);
  backdrop-filter: blur(6px);
}

.countdown-card {
  max-width: 900px;
  margin: 42px auto 0;
  padding: 28px 24px 26px;
}

.countdown-header {
  text-align: center;
}

.countdown-header .label {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.76rem;
  color: var(--soft);
  font-weight: 700;
}

.countdown-header h3 {
  margin: 10px 0 0;
  font-size: clamp(1.5rem, 3vw, 2.4rem);
  color: var(--text);
}

.countdown-grid {
  margin-top: 26px;
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  gap: 18px;
}

.time-box {
  background: linear-gradient(135deg, rgba(255, 184, 217, 0.4), rgba(255, 255, 255, 0.75));
  border: 1px solid rgba(255, 122, 182, 0.2);
  border-radius: 22px;
  padding: 22px 16px;
  text-align: center;
}

.time-box span {
  display: block;
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 800;
  color: var(--rose);
}

.time-box small {
  display: inline-block;
  margin-top: 8px;
  color: var(--soft);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.card-letter {
  max-width: 980px;
  margin: 42px auto 0;
  padding: 26px 22px;
}

.card-frame {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.85), rgba(255, 236, 244, 0.88));
  border: 1px solid rgba(255, 122, 182, 0.2);
  border-radius: 28px;
  padding: 28px 24px;
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
}

.stamp,
.date {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255, 122, 182, 0.1);
  border: 1px solid rgba(255, 122, 182, 0.15);
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--pink-2);
}

.card-frame h3 {
  margin: 0;
  font-size: clamp(1.8rem, 3vw, 2.7rem);
  color: var(--text);
}

.card-frame p {
  color: var(--soft);
  line-height: 1.9;
  font-size: 1.02rem;
}

.signature {
  margin-top: 18px;
  color: var(--rose) !important;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.8rem !important;
}

.message-grid {
  margin-top: 42px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.message-box {
  padding: 26px 22px;
}

.message-box.highlight {
  background: linear-gradient(180deg, rgba(255, 122, 182, 0.12), rgba(255, 255, 255, 0.7));
}

.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: rgba(255, 122, 182, 0.12);
  font-size: 1.7rem;
}

.message-box h4 {
  margin: 18px 0 12px;
  font-size: 1.4rem;
}

.message-box p {
  margin: 0;
  line-height: 1.8;
  color: var(--soft);
}

.letter-block {
  max-width: 980px;
  margin: 42px auto 0;
  padding: 28px 28px 24px;
  text-align: center;
}

.quote-mark {
  font-family: "Dancing Script", cursive;
  font-size: 5rem;
  line-height: 1;
  color: var(--pink-2);
}

.letter-block p {
  margin: 0;
  font-size: 1.08rem;
  line-height: 1.9;
  color: var(--soft);
}

.tribute {
  max-width: 980px;
  margin: 42px auto 0;
  padding: 30px 28px;
  text-align: center;
}

.tribute h3 {
  margin: 0 0 8px;
  font-size: clamp(2rem, 3.5vw, 3rem);
  color: var(--text);
}

.tribute p {
  margin: 0;
  line-height: 1.9;
  color: var(--soft);
}

@media (max-width: 760px) {
  .page-shell {
    padding-top: 32px;
  }

  .countdown-grid,
  .message-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .card-top {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 520px) {
  .countdown-grid,
  .message-grid {
    grid-template-columns: 1fr;
  }

  .countdown-card,
  .card-letter,
  .letter-block,
  .tribute {
    padding-left: 16px;
    padding-right: 16px;
  }

  .hero h1 {
    font-size: 4rem;
  }
}
