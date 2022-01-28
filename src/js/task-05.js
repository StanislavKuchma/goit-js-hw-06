let input = document.querySelector('input');

const paragraph = document.querySelector(`span`);

input.addEventListener(`input`, onInput);

function onInput() {
  paragraph.textContent = input.value;
    if (paragraph.textContent.length === 0) {
        paragraph.textContent = "Anonymous"
    }
  
}