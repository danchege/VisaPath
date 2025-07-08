// Tab switching
const showLoginBtn = document.getElementById('showLogin');
const showRegisterBtn = document.getElementById('showRegister');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const authMessage = document.getElementById('authMessage');

showLoginBtn.onclick = function() {
  showLoginBtn.classList.add('active');
  showRegisterBtn.classList.remove('active');
  loginForm.style.display = '';
  registerForm.style.display = 'none';
  authMessage.textContent = '';
};
showRegisterBtn.onclick = function() {
  showRegisterBtn.classList.add('active');
  showLoginBtn.classList.remove('active');
  registerForm.style.display = '';
  loginForm.style.display = 'none';
  authMessage.textContent = '';
};

// Login
loginForm.onsubmit = function(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      authMessage.textContent = 'Login successful! Redirecting...';
      window.location.href = 'index.html';
    })
    .catch(err => {
      authMessage.textContent = err.message;
    });
};

// Register
registerForm.onsubmit = function(e) {
  e.preventDefault();
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      authMessage.textContent = 'Registration successful! You can now log in.';
      showLoginBtn.click();
    })
    .catch(err => {
      authMessage.textContent = err.message;
    });
};

// Google Sign-In
const googleBtn = document.getElementById('googleSignInBtn');
if (googleBtn) {
  googleBtn.onclick = function() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(() => {
        authMessage.textContent = 'Registration/Login successful! Redirecting...';
        window.location.href = 'index.html';
      })
      .catch(err => {
        authMessage.textContent = err.message;
      });
  };
} 