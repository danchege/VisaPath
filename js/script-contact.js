// Contact form validation and submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    const fields = ['name', 'email', 'message'];
    fields.forEach(id => {
      const input = document.getElementById(id);
      if (!input.value.trim()) {
        input.style.borderColor = 'red';
        valid = false;
      } else {
        input.style.borderColor = '';
      }
    });
    if (!valid) {
      alert('Please fill in all required fields.');
      return;
    }
    // Simulate successful submission
    contactForm.reset();
    alert('Your message has been sent! We will contact you soon.');
  });
}
