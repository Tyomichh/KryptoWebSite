const cardNumberInput = document.querySelector('#card-number'),
    expiryDateInput = document.querySelector('#expiry-date'),
    cvvInput = document.querySelector('#cvv'),
    payform = document.querySelector('.payment_form');

payform.addEventListener('submit', function (event) {
    const payButton = document.querySelector('.payment_button');
    const spinnerLoader = document.createElement('div');
    spinnerLoader.classList.add('spinner-loader');

    event.preventDefault();

    if (cardNumberInput.value.length >= 19 && expiryDateInput.value.length >= 5 && cvvInput.value.length >= 4) {
        payButton.style.opacity = '0';
        payButton.style.pointerEvents = 'none';
        payButton.parentNode.insertBefore(spinnerLoader, payButton.nextSibling);
        setTimeout(function () {
            payform.submit();
        }, 1000);
    } else {
        alert('Please fill in all fields correctly.');
    }
});

cardNumberInput.addEventListener('input', function (e) {
    let value = e.target.value.replace(/\s/g, '');
    let formattedValue = '';

    for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formattedValue += ' ';
        }
        formattedValue += value[i];
    }

    e.target.value = formattedValue;
});