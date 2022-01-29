const form = document.querySelector(`form`);

const formEmailEl = document.querySelector(`input[type="email"]`);

const formPasswordlEl = document.querySelector(`input[type="password"]`);

form.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formEl = event.currentTarget.elements;

    const email = formEl.email.value;
    const password = formEl.password.value;
    // const formData = new FormData(event.currentTarget);
    // email.length === 0 || password.length === 0 ? outAlert() :
    //     outData();

    if (email.length === 0 || password.length === 0) { outAlert() }
    else{outData()}
    
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

    const data = {
        email: formEmailEl.value,
        password: formPasswordlEl.value,
    }
    console.dir(data)
    // console.dir(`email: ${formEmailEl.value} password: ${formPasswordlEl.value}`);
    formPasswordlEl.removeAttribute(`placeholder`);
    form.reset();
};
