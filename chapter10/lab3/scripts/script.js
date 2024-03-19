/*
    Group Members: Jamal Williams, Eric Jones, Laura Smith, Sofia Perez
    File Name: script.js
    Date: May 20, 2021
*/

//Hamburger menu function
function menu() {
    var navlinks = document.getElementById("nav-links");
    var menuicon = document.getElementById("icon");
    if (navlinks.style.display === "block") {
        navlinks.style.display = "none";
    } else {
        navlinks.style.display = "block";
        navlinks.style.backgroundColor = "#5371a9";
    }
}

//math function
function math() {
    var result = document.getElementById("number")
    result.innerHTML = Math.floor((Math.random() * 100) +1);
}
