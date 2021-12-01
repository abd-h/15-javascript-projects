// ClassList - shows/gets all classes
// Contains - checks all classList for specific class
// Add  -   add class 
// Remove - remove class
 
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function() {
    console.log(links.classList.contains("links"));  
    // (links.classList.contains("show-links"))? links.classList.remove("show-links")
    // : links.classList.add("show-links")
   
    // The code below works as well. for simplisty i commented out previous code because actually instead of writing afew lines of code I can just type out one liner
    
    links.classList.toggle("show-links")

})
