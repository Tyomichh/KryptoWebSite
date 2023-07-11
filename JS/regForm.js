const regform = document.querySelector('.reg_form'),
  passwordInput = document.querySelector('#userpass'),
  confirmPasswordInput = document.querySelector('#confirmuserpass'),
  emailInput = document.querySelector('#useremail');

regform.addEventListener('submit', function (event) {
  event.preventDefault();

  const passwordValue = passwordInput.value;
  const confirmPasswordValue = confirmPasswordInput.value;
  const emailValue = emailInput.value;

  if (passwordValue.length < 6) {
    alert('Password should be at least 6 characters long');
    return;
  }
  
  if (passwordValue !== confirmPasswordValue) {
    alert('Passwords do not match');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailValue)) {
    alert('Invalid email address');
    return;
  }

  const payButton = document.querySelector('.payment_button');
  const spinnerLoader = document.createElement('div');
  spinnerLoader.classList.add('spinner-loader');

  payButton.style.opacity = '0';
  payButton.style.pointerEvents = 'none';
  payButton.parentNode.insertBefore(spinnerLoader, payButton.nextSibling);
  setTimeout(function () {
    regform.submit();
  }, 1000);
});



