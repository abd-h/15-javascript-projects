let colors2 = [1, 2,3,4,5,6,7,8,9,"a", "b", "c", "d", "e","f"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function getRandomNumber2() {
       return Math.floor(Math.random() * colors2.length)
}

btn.addEventListener("click", function() {
    let hexColor = '#'
    const randomNumber = getRandomNumber2();
    for(let i = 0;  i < 6; i++) {
       hexColor += colors2[getRandomNumber2()]
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})