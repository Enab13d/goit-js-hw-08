import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');
let parsedObj;
const {
  elements: { email, message },
} = formEl;
let obj = {};

const onInput = () => {
  obj.email = email.value;
  obj.message = message.value;
  try {
    localStorage.setItem('feedback-form-state', JSON.stringify(obj));
  } catch (error) {
    console.log(error.message);
  }
};
const onSubmit = e => {
  e.preventDefault();
  if (email.value === '' || message.value === '') {
    return alert('All fields should be fulfilled');
  } else {
    try {
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    e.currentTarget.reset();
    localStorage.clear();
    obj = {};
  } catch (error) {
    console.log(error.message);
  }
}
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
