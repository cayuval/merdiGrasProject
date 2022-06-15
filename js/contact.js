const form = document.querySelector('form');
console.log(form);
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const freeText = document.getElementById('freeText');

function showError(input,messege){
    const field = input.parentElement;
    field.className = 'formControll error'
    const small = field.querySelector('small')
    small.innerHTML = messege
}
function showSucsses(input){
    const field = input.parentElement;
    field.className = 'formControll sucsses'
    const small = field.querySelector('small')
    small.innerHTML = ''
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (firstName.value === '') {
        showError(firstName,'Enter first name')
    }else{
        showSucsses(firstName)
    }
    if (lastName.value === '') {
        showError(lastName,'Enter last name')
    }else{
        showSucsses(lastName)
    }
    if (freeText.value === '') {
        showError(freeText,'Enter your request/feedback')
    }else{
        showSucsses(freeText)
    }
    if(email.value===''||email.value.indexOf('@')==-1){
        showError(email,'Enter VALID email')
    }else{
        showSucsses(email)
    }

})

