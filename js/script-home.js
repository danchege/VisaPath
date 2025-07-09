// Animated Slogan Typewriter Effect
const slogans = [
  'Jobs...',
  'Visas...',
  'New Beginnings.'
];
const sloganEl = document.getElementById('slogan-text');
let sloganIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeSlogan() {
  const current = slogans[sloganIndex];
  if (!isDeleting) {
    sloganEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      setTimeout(() => { isDeleting = true; typeSlogan(); }, 1200);
    } else {
      setTimeout(typeSlogan, 80);
    }
  } else {
    sloganEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      sloganIndex = (sloganIndex + 1) % slogans.length;
      setTimeout(typeSlogan, 400);
    } else {
      setTimeout(typeSlogan, 40);
    }
  }
}
if (sloganEl) typeSlogan();

// Rotating icons are animated via CSS keyframes
// Optionally, you can add JS for extra effects (e.g., hover pop)
document.querySelectorAll('.rotating-icons .icon').forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.style.transform = 'scale(1.25) rotate(10deg)';
    icon.style.transition = 'transform 0.2s';
  });
  icon.addEventListener('mouseleave', () => {
    icon.style.transform = '';
    icon.style.transition = '';
  });
});

// --- Parallax Effect for Hero Section ---
(function() {
  const layers = [
    document.querySelector('.parallax-layer1'),
    document.querySelector('.parallax-layer2'),
    document.querySelector('.parallax-layer3')
  ];
  if (!layers[0] || !layers[1] || !layers[2]) return;
  function parallax(e) {
    const w = window.innerWidth, h = window.innerHeight;
    let x = 0, y = 0;
    if (e.type === 'mousemove') {
      x = (e.clientX - w/2) / (w/2);
      y = (e.clientY - h/2) / (h/2);
    } else if (e.type === 'deviceorientation' && e.gamma && e.beta) {
      x = e.gamma / 45; // gamma: left-right
      y = e.beta / 90 - 0.5; // beta: front-back
    }
    layers[0].style.transform = `translate(${x*30}px, ${y*20}px)`;
    layers[1].style.transform = `translate(${-x*40}px, ${-y*30}px)`;
    layers[2].style.transform = `translate(${x*60}px, ${-y*10}px)`;
  }
  window.addEventListener('mousemove', parallax);
  window.addEventListener('deviceorientation', parallax);
})();

// --- Hero Background Slideshow ---
(function() {
  const bgImages = [
    'assets/images/background/visa 1.jpg',
    'assets/images/background/visa 2.jpg',
    'assets/images/background/visa 3.jpg'
  ];
  const heroBg = document.querySelector('.hero-bg');
  if (!heroBg) return;
  let current = 0;
  let imgEls = [];
  // Create img elements for each background
  bgImages.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'hero-bg-img';
    img.style.opacity = i === 0 ? '1' : '0';
    img.style.transition = 'opacity 1.2s ease';
    img.style.position = 'absolute';
    img.style.top = '0';
    img.style.left = '0';
    img.style.width = '100vw';
    img.style.height = '100vh';
    img.style.objectFit = 'cover';
    img.style.zIndex = '0';
    heroBg.appendChild(img);
    imgEls.push(img);
  });
  setInterval(() => {
    const prev = current;
    current = (current + 1) % bgImages.length;
    imgEls[prev].style.opacity = '0';
    imgEls[current].style.opacity = '1';
  }, 3000);
})();
