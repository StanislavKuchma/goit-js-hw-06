const input = document.querySelector('input');

const dataLength = input.getAttribute(`data-length`);

input.addEventListener(`blur`, onInput);
input.addEventListener(`focus`, onFocusInput);

function onInput() {
    input.value.length == dataLength ?
        input.classList.add(`valid`) :
        input.classList.add(`invalid`);
};
  
function onFocusInput() {
     input.classList.remove(`valid`)
    input.classList.remove(`invalid`)
};

