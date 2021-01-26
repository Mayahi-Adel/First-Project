const navElement = document.getElementById("main");
const offset = navElement.offsetTop;
const logoElement = document.querySelector(".logo");

function setNavBarToTop() {
    if (window.scrollY > offset) {
        navElement.style.position = "fixed";
        navElement.style.top = "0px";
        logoElement.style.maxWidth = "200px";

    } else {
        navElement.style.position = "relative";
        logoElement.style.maxWidth = "0px";
        //navElement.style.top = "280px";
    }

}

window.addEventListener('scroll', setNavBarToTop);


// Add active class to the current button (highlight it)
var btns = navElement.getElementsByClassName("linknav");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.querySelectorAll(".active");
        current.forEach(element => {
            element.classList.remove("active");

        });

        this.classList.add("active");

    });
}