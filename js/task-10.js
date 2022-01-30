const buttonCreateEl = document.querySelector(`button[data-create]`);

const buttonDestroyEl = document.querySelector(`button[data-destroy]`);

let numberEl = document.querySelector(`input`);

const boxDiv = document.querySelector(`div[id="boxes"]`);

buttonCreateEl.addEventListener(`click`, createDiv);
buttonDestroyEl.addEventListener(`click`, destroyDiv);


function createDiv() {
    const elements = [];
    let widthDiv = 30;
    let heightDiv = 30;
for (let index = 1; index <= numberEl.value; index++) {
    const divEl = document.createElement(`div`);
 
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = `${widthDiv}px`;
    divEl.style.height = `${heightDiv}px`;
    
    elements.push(divEl);
 
    widthDiv += 10;
    heightDiv += 10;
}
    boxDiv.append(...elements);
};

function destroyDiv() {
    boxDiv.innerHTML = ``;
    numberEl.value = ``;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
























// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// const people = [{
//         name: 'Alex',
//         know: ['Alex', 'Jhon'],
//     },
//     {
//         name: 'Jhon',
//         know: []
//   },

//     {
//         name: 'Eva',
//         know: ['Alex', 'Jhon']
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Eva']
//     },
// ];

// // Зробити функцію яка буде повертати імя НАРЦИСА, функція приймає масив як параметр.
// // УТОЧНЕННЯ : НАРЦИСА знають всі, Нарцис не знає нікого

// const nar = people.filter(option => option.know.length === 0);
// const narcissusItem = people.find(option => option.know.length === 0);
// const arr1 = people.filter(option => option.know.length !== 0);
// let ttt;
// // console.log(nar[0].name)

// nar.length > 1 ? console.log("No Narcissus") : ttt = arr1.reduce((acc, element) => {
//   element.name.indexOf(narcissusItem.name);

//   return !!~element.know.indexOf(narcissusItem.name) ? acc : console.log("No Narcissus")

// }, [narcissusItem.name]);
// ttt ? console.log(`Narcissus: ${narcissusItem.name}`) : console.log("Да сделано очень криво Подучусь -- переделаю");