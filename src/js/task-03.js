const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const listImagesEl = document.querySelector(".gallery");

const imgEl = images.map(option => {

  
//   const imgEl = document.createElement("img");
//   imgEl.src = option.url;
//   imgEl.alt = option.alt;
//   imgEl.classList.add("item");

//   const liEl = document.createElement("li");
//   liEl.appendChild(imgEl)

//   console.log(liEl);

//   return liEl;
// })
// listImagesEl.append(...imgEl);

listImagesEl.insertAdjacentHTML("beforeend", `<li><img class= "item" src = ${option.url}, alt = ${option.alt}>
</li>`);
})
console.log(listImagesEl);




