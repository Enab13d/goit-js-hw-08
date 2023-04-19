import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');
let obj;
let parsedObj;
let stringifiedObj;
const {
  elements: { email, message },
} = formEl;
const onInput = () => {
  obj = { email: email.value, message: message.value };
  console.log(obj);
  try {
    stringifiedObj = JSON.stringify(obj);
  } catch (error) {
    console.log(error.message);
  }
  localStorage.setItem('feedback-form-state', stringifiedObj);
};
const onSubmit = e => {
  e.preventDefault();
  console.log(obj);
  e.currentTarget.reset();
};
const checkLocalStorage = () => {
  if (localStorage) {
    try {
      parsedObj = JSON.parse(localStorage.getItem('feedback-form-state'));
      email.value = parsedObj.email;
      message.value = parsedObj.message;
      return;
    } catch (error) {
      console.log(error.message);
    }
  }
};
formEl.addEventListener('submit', onSubmit);
formEl.addEventListener('input', throttle(onInput, 500));
checkLocalStorage();
