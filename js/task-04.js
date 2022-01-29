
const buttomMinus = document.querySelector(`button[data-action="decrement"]`);
const buttomPlus = document.querySelector(`button[data-action="increment"]`);
const acc = document.querySelector(`span[id="value"]`);

let counterValue = 0;
buttomMinus.addEventListener(`click`, onButtomMinusClick )
buttomPlus.addEventListener(`click`, onButtomPlusClick)

function onButtomMinusClick() {
    counterValue -= 1
    acc.textContent = `${counterValue}`
}
function onButtomPlusClick() {
    counterValue += 1
    acc.textContent = `${counterValue}`
}

