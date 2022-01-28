const form = document.querySelector(`form`);

const formEmailEl = document.querySelector(`input[type="email"]`);
console.log(formEmailEl);
const formPasswordlEl = document.querySelector(`input[type="password"]`);

form.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formEl = event.currentTarget.elements;

    const email = formEl.email.value;
    const password = formEl.password.value;
    const formData = new FormData(event.currentTarget);
    email.length === 0 || password.length === 0 ? outAlert() :
        outData();

};

function outAlert() {
    if (formEmailEl.value.length === 0) {
     formEmailEl.value = `Введите email! `   
    }
    if (formPasswordlEl.value.length === 0) {
        formPasswordlEl.setAttribute(`placeholder`, `Введите password!`);
    }
};

function outData() {
    console.dir(`email: ${formEmailEl.value} password: ${formPasswordlEl.value}`);
    formPasswordlEl.removeAttribute(`placeholder`);
    form.reset();
};
