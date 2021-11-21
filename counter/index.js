// Set initial count
let count = 0;

// Select value and buttons
const value = document.querySelector("#value")
 const btn = document.querySelectorAll(".btn")

 btn.forEach(x => {
    x.addEventListener("click", function (y) {
        const styles = y.currentTarget.classList;
        if(styles.contains("decrease")) {  
            count--;
        }
        
        else if (styles.contains("increase")) {
            count++;
            
        }
        else {
            count = 0;
        }
        if(count > 0) {
            value.style.color = "green";
        } else if(count < 0) {
            value.style.color = "red"
        } else {
            value.style.color = "black";
        }
        value.textContent = count; 
    });
 });