// Request a Job form validation and submission
const form = document.getElementById('job-request-form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    const fields = ['name', 'country', 'position', 'email', 'phone'];
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
    form.reset();
    alert('Your job request has been submitted! We will contact you soon.');
  });
}
