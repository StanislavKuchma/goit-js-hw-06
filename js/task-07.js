const input = document.querySelector('input');
const fontSize = document.querySelector('span');

input.addEventListener(`input`, onInput);

fontSize.setAttribute(`style`, `font-size : ${input.value}px`);
function onInput() {

       fontSize.setAttribute(`style`, `font-size : ${input.value}px`);
};