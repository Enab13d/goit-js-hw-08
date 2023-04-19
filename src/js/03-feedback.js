import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');
const submitBtn = document.querySelector('button[type=submit]');
let obj;
let parsedObj;
const {
  elements: { email, message },
} = formEl;
const onInput = () => {
  obj = { email: email.value, message: message.value };
  console.log(obj);
  try {
    stringifiedObj = JSON.stringify(obj);
    console.log();
  } catch (error) {
    error.name;
  }
  localStorage.setItem('feedback-form-state', stringifiedObj);
};
onSubmit = e => {
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
      error.name;
    }
  }
};

formEl.addEventListener('submit', onSubmit);
formEl.addEventListener('input', throttle(onInput, 500));
checkLocalStorage();
