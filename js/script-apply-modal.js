// Modal logic for job application (shared for jobs.html and pages/jobs.html)
(function() {
  const modal = document.getElementById('applyModal');
  if (!modal) return;
  const closeModalBtn = document.getElementById('closeModalBtn');
  const jobTitleSpan = document.getElementById('modalJobTitle');
  const jobCountrySpan = document.getElementById('modalJobCountry');
  const jobInput = document.getElementById('modalJobInput');
  const countryInput = document.getElementById('modalCountryInput');
  const form = document.getElementById('jobApplicationForm');

  function openModal(job, country) {
    jobTitleSpan.textContent = job;
    jobCountrySpan.textContent = country;
    jobInput.value = job;
    countryInput.value = country;
    modal.style.display = 'block';
  }
  function closeModal() {
    modal.style.display = 'none';
    form.reset();
  }
  closeModalBtn.onclick = closeModal;
  window.onclick = function(event) {
    if (event.target === modal) closeModal();
  };

  // Attach to all .apply-btn
  const applyBtns = document.querySelectorAll('.apply-btn');
  applyBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      // Find job and country from card
      let card = btn.closest('.job-card');
      let job = card.querySelector('h2').textContent.trim();
      let country = '';
      // Try to get from .country-heading or .job-card p
      let group = card.closest('.country-group');
      if (group) {
        let heading = group.querySelector('.country-heading');
        if (heading) {
          let match = heading.textContent.match(/\(([^)]+)\)|([A-Za-z ]+)$/);
          country = match ? (match[1] || match[2]).trim() : '';
        }
      }
      if (!country) {
        let p = card.querySelector('p');
        if (p) {
          let loc = p.textContent.match(/Location:\s*(.*)/);
          if (loc) country = loc[1].trim();
        }
      }
      openModal(job, country);
    });
  });

  form.onsubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById('applicantName').value.trim();
    const email = document.getElementById('applicantEmail').value.trim();
    const phone = document.getElementById('applicantPhone').value.trim();
    const job = jobInput.value;
    const country = countryInput.value;
    const mailto = `mailto:danychege28@gmail.com?subject=Application for ${encodeURIComponent(job)} (${encodeURIComponent(country)})&body=Job Title: ${encodeURIComponent(job)}%0ACountry: ${encodeURIComponent(country)}%0A%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0APhone Number: ${encodeURIComponent(phone)}`;
    window.location.href = mailto;
    closeModal();
  };
})(); 