const form = document.querySelector('form');
console.log(form);
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const freeText = document.getElementById('freeText');
const button = document.querySelector('.submitFile');
console.log(button);

let validFirstName,validLastName,validEmail,validFreeText

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
        validFirstName=false
    }else{
        showSucsses(firstName)
        validFirstName=true
    }
    if (lastName.value === '') {
        showError(lastName,'Enter last name')
        validLastName=false
    }else{
        showSucsses(lastName)
        validLastName=true
    }
    if (freeText.value === '') {
        showError(freeText,'Enter your request/feedback')
        validFreeText=false
    }else{
        showSucsses(freeText)
        validFreeText=true
    }
    if(email.value===''||email.value.indexOf('@')==-1){
        showError(email,'Enter VALID email')
        validEmail=false
    }else{
        showSucsses(email)
        validEmail=true
    }
    if(validEmail===true&&validFirstName===true&&validLastName===true&&validFreeText==true){
        alert(`Thank you ${firstName.value} ${lastName.value} for your feedback, we will be in touch soon!`)
    }
})

