// ClassList - shows/gets all classes
// Contains - checks all classList for specific class
// Add  -   add class 
// Remove - remove class
 
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function() {
    // console.log(links.classList.contain s(".links"));  
    // if (links.classList.contains("show-links")) {
    //     links.classList.remove("show-links")
    // }
    // else {
    //     links.classList.add("show-links")
    // }
    links.classList.toggle("show-links")

})
