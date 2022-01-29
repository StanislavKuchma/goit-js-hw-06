const categoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach(callback);

function callback(element) {
    const title = element.querySelector("h2").textContent;
    const elements = element.querySelectorAll("li").length;
    console.log(`Category: ${title}`);

    console.log(`Elements: ${elements}`);
};