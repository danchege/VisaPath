// Fade-in animation for testimonial cards
function revealTestimonials() {
  const cards = document.querySelectorAll('.testimonial-card');
  for (const card of cards) {
    const windowHeight = window.innerHeight;
    const elementTop = card.getBoundingClientRect().top;
    if (elementTop < windowHeight - 60) {
      card.classList.add('visible');
    }
  }
}
window.addEventListener('scroll', revealTestimonials);
window.addEventListener('DOMContentLoaded', revealTestimonials);
