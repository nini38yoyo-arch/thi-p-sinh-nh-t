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
