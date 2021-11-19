let colors1 = ["green", "red", "rgb(133, 122, 200, #f15025)"];

let btn = document.getElementById("btn");
let color = document.querySelector(".color");

function getRandomNumber() {
    return Math.floor(Math.random() * 4)
}
console.log(getRandomNumber());

btn.addEventListener("click", function() {
    let randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors1[randomNumber]
    color.textContent = colors1[randomNumber]
})
