// Apply Now button functionality
const applyBtns = document.querySelectorAll('.apply-btn');
applyBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const job = btn.getAttribute('data-job');
    if (confirm(`Do you meet the requirements for the position: ${job}?`)) {
      window.location.href = 'contact.html';
    }
  });
});
// Animate job cards on hover
const jobCards = document.querySelectorAll('.job-card');
jobCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.03)';
    card.style.boxShadow = '0 4px 24px rgba(30,144,255,0.18)';
    card.style.transition = 'transform 0.2s, box-shadow 0.2s';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.boxShadow = '';
    card.style.transition = '';
  });
});
