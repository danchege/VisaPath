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

// --- Creative Mobile Navigation ---
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navOverlay = document.querySelector('.mobile-nav-overlay');

if (navToggle && navLinks && navOverlay) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('active', isOpen);
    navOverlay.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  navOverlay.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('active');
    navOverlay.classList.remove('active');
    document.body.style.overflow = '';
    navToggle.setAttribute('aria-expanded', 'false');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('active');
      navOverlay.classList.remove('active');
      document.body.style.overflow = '';
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
