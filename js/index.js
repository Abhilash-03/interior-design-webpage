const submitForm = document.getElementById('form');
const inputName = document.getElementById('name')
const inputEmail = document.getElementById('email')
const inputPhone = document.getElementById('phone')
const inputMsg = document.getElementById('message')
const errorMsg = document.getElementById('error');
const successMsg = document.getElementById('success');

//Note: For sending an email we can use emailjs.

function handleSubmitForm(e){
   e.preventDefault();
   if(!inputName.value || !inputEmail.value || !inputPhone.value || !inputMsg.value ){
     errorMsg.style.display = 'block';
   } else {
      successMsg.style.display = 'block';
   }

   setTimeout(() => {
    errorMsg.style.display = 'none';
    successMsg.style.display = 'none';

   }, 1200);

   inputName.value = '';
   inputEmail.value = '';
   inputPhone.value = '';
   inputMsg.value = '';
}

submitForm.addEventListener('submit', handleSubmitForm);