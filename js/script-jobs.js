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

document.addEventListener('DOMContentLoaded', function() {
  const countryCards = document.querySelectorAll('.country-card-grid .country-card');
  const jobsList = document.querySelector('.jobs-list');
  const countryGroups = document.querySelectorAll('.country-group');
  const backToCountries = document.querySelector('.back-to-countries');
  const backCard = document.querySelector('.back-card');
  function showCountryJobs(countryKey) {
    console.log('Country selected:', countryKey);
    // Hide country grid
    document.querySelector('.country-card-grid').style.display = 'none';
    // Show jobs list
    jobsList.classList.add('active');
    jobsList.style.display = 'block';
    // Hide all country groups
    countryGroups.forEach((g, i) => {
      g.classList.remove('active');
      g.style.display = 'none';
    });
    // Show the selected country group
    let group = null;
    switch(countryKey) {
      case 'canada': group = countryGroups[0]; break;
      case 'germany': group = countryGroups[1]; break;
      case 'uae': group = countryGroups[2]; break;
      case 'qatar': group = countryGroups[3]; break;
      case 'saudi-arabia': group = countryGroups[4]; break;
      case 'oman': group = countryGroups[5]; break;
      case 'uk': group = countryGroups[6]; break;
      case 'bahrain': group = countryGroups[7]; break;
      case 'turkey': group = countryGroups[8]; break;
      case 'us': group = countryGroups[9]; break;
      case 'australia': group = countryGroups[10]; break;
      case 'new-zealand': group = countryGroups[11]; break;
      case 'south-africa': group = countryGroups[12]; break;
      case 'italy': group = countryGroups[13]; break;
      case 'france': group = countryGroups[14]; break;
      case 'norway': group = countryGroups[15]; break;
      case 'sweden': group = countryGroups[16]; break;
      case 'japan': group = countryGroups[17]; break;
      case 'china': group = countryGroups[18]; break;
    }
    if(group) {
      group.classList.add('active');
      group.style.display = 'block';
      console.log('Group activated:', group.querySelector('.country-heading').innerText);
    } else {
      console.log('No group found for', countryKey);
    }
    // Show back button
    backToCountries.style.display = 'flex';
  }
  countryCards.forEach(card => {
    card.addEventListener('click', function() {
      const country = card.getAttribute('data-country');
      showCountryJobs(country);
    });
  });
  backCard.addEventListener('click', function() {
    // Hide jobs list and all country groups
    jobsList.classList.remove('active');
    jobsList.style.display = 'none';
    countryGroups.forEach(g => {
      g.classList.remove('active');
      g.style.display = 'none';
    });
    // Hide back button
    backToCountries.style.display = 'none';
    // Show country grid
    document.querySelector('.country-card-grid').style.display = 'grid';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  // On load, ensure all country groups are hidden
  countryGroups.forEach(g => {
    g.classList.remove('active');
    g.style.display = 'none';
  });
});
