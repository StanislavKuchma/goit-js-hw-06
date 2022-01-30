const buttonEl = document.querySelector('button');
const bodyColorEl = document.querySelector('span');
const bodyEl = document.querySelector(`body`);

buttonEl.addEventListener(`click`, onButtonClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
  };
function onButtonClick() {    

  const backColor = getRandomHexColor();
  bodyEl.setAttribute(`style`, `background-color: ${backColor}`);
  
  bodyColorEl.textContent = `${backColor}`;

  console.log(backColor);
};
