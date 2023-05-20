/*Form valid*/
let formLabels = document.querySelectorAll('.labelValid'),
formInputs = document.querySelectorAll('.validInput'),
form = document.querySelector('.syteForm');

form.addEventListener('submit', function(event) {
event.preventDefault();

formInputs.forEach(function(input, index) {
    if (input.value === '') {
    formLabels[index].classList.add('Inline');
    console.log('Wrong');
    } else {
    formLabels[index].classList.remove('Inline');
    }
});
});