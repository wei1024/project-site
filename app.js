const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navLink = document.querySelectorAll(".nav-links li");
const hamburgerLine = document.querySelector(".line");
document.querySelector(".info-list").style.borderTop = "1px solid grey";
document.querySelectorAll(".footer-select-list li");
hamburger.addEventListener("click", () => {
    
    // if(navLinks.style.display === "flex" ){
    //     navLinks.style.display = "none";
    //     document.querySelector("body").style.overflow = "auto";

    // }
    // else{
    //      navLinks.style.display = "flex";
    //      document.querySelector("body").style.overflow = "hidden";      
    // }  
    hamburgerLine.classList.toggle("openHam");
    navLinks.classList.toggle("open");
    if (document.getElementsByClassName("open")[0] == null) {
        console.log("YYY");
        document.querySelector("body").style.overflow = "auto";

    } else  {
        console.log("nono");
        document.querySelector("body").style.overflow = "hidden";
    }

    
});