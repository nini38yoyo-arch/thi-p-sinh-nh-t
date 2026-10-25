const countdownTarget = new Date('2026-10-25T19:30:00+07:00');

const dayElement = document.getElementById('days');
const hourElement = document.getElementById('hours');
const minuteElement = document.getElementById('minutes');
const secondElement = document.getElementById('seconds');

function updateCountdown() {
  const now = new Date();
  const difference = countdownTarget - now;

  if (difference <= 0) {
    dayElement.textContent = '00';
    hourElement.textContent = '00';
    minuteElement.textContent = '00';
    secondElement.textContent = '00';

    const heading = document.querySelector('.countdown-header h3');
    if (heading) {
      heading.textContent = 'Đã đến ngày sinh nhật của em!';
    }
    return;
  }

  const totalSeconds = Math.floor(difference / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  dayElement.textContent = String(days).padStart(2, '0');
  hourElement.textContent = String(hours).padStart(2, '0');
  minuteElement.textContent = String(minutes).padStart(2, '0');
  secondElement.textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

const fireworksCanvas = document.getElementById('fireworks');
const ctx = fireworksCanvas.getContext('2d');
const particles = [];
const fireworks = [];
const colors = ['#ff4d7d', '#ffb8d9', '#8e60ff', '#ffd76a', '#7ce7ff', '#ffffff'];

function resizeCanvas() {
  fireworksCanvas.width = window.innerWidth;
  fireworksCanvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function createFirework() {
  const x = Math.random() * fireworksCanvas.width;
  const y = fireworksCanvas.height;
  const targetY = Math.random() * (fireworksCanvas.height * 0.45);

  fireworks.push({
    x,
    y,
    targetY,
    color: colors[Math.floor(Math.random() * colors.length)],
    speed: 4 + Math.random() * 3,
    radius: 2 + Math.random() * 2,
  });
}

function createBurst(x, y, color) {
  const count = 44 + Math.floor(Math.random() * 30);
  for (let i = 0; i < count; i += 1) {
    const angle = (Math.PI * 2 * i) / count;
    const speed = 1.5 + Math.random() * 3.2;
    particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 42 + Math.random() * 30,
      maxLife: 42 + Math.random() * 30,
      color,
      size: 2 + Math.random() * 2.5,
    });
  }
}

function animateFireworks() {
  ctx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);

  for (let i = fireworks.length - 1; i >= 0; i -= 1) {
    const firework = fireworks[i];
    firework.y -= firework.speed;

    if (firework.y <= firework.targetY) {
      createBurst(firework.x, firework.y, firework.color);
      fireworks.splice(i, 1);
      continue;
    }

    ctx.beginPath();
    ctx.fillStyle = firework.color;
    ctx.arc(firework.x, firework.y, firework.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  for (let i = particles.length - 1; i >= 0; i -= 1) {
    const particle = particles[i];
    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.vy += 0.04;
    particle.life -= 1;

    const alpha = particle.life / particle.maxLife;

    ctx.beginPath();
    ctx.fillStyle = particle.color;
    ctx.globalAlpha = alpha;
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;

    if (particle.life <= 0) {
      particles.splice(i, 1);
    }
  }

  if (Math.random() < 0.04) {
    createFirework();
  }

  requestAnimationFrame(animateFireworks);
}

animateFireworks();

const body = document.body;
for (let i = 0; i < 18; i += 1) {
  const heart = document.createElement('span');
  heart.textContent = i % 2 === 0 ? '❤' : '♡';
  heart.style.position = 'fixed';
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.top = `${Math.random() * 100}%`;
  heart.style.fontSize = `${Math.random() * 18 + 12}px`;
  heart.style.color = i % 2 === 0 ? 'rgba(255, 122, 182, 0.25)' : 'rgba(142, 96, 255, 0.18)';
  heart.style.pointerEvents = 'none';
  heart.style.animation = `float ${Math.random() * 8 + 8}s ease-in-out infinite`;
  heart.style.animationDelay = `${Math.random() * 2}s`;
  body.appendChild(heart);
}

const sparkleAnimation = document.createElement('style');
sparkleAnimation.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0) scale(1); opacity: 0.25; }
    50% { transform: translateY(-16px) scale(1.05); opacity: 1; }
  }
`;
document.head.appendChild(sparkleAnimation);

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
