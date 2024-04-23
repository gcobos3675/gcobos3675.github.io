//Global variables
var answer = document.querySelector("#answer p")
var heading = document.querySelector("#answer h2")

//Hamburger menu function
function menu() {
    var navlinks = document.getElementById("nav");
    var menuicon = document.getElementById("icon");
    if (navlinks.style.display === "block") {
        navlinks.style.display = "none";
        menuicon.style.color = "#000000";
    } else {
        navlinks.style.display = "block";
        menuicon.style.color = "#000000";
    }
}

//Fuction to display the first answer
function    ans1() {
    heading.style.display = "block"
    answer.textContent = "Purchasing a equiptment bundle is not neccessary. If you are contacting us about installing a security system, you can either purchase a bundle, or you can pick and choose the equiptment yourself.";
}

//Function to display the second answer
function ans2() {
    heading.style.display = "block";

    answer.textContent = "Our contracts come with a SIX MONTH money-back garuntee. We believe that one month simply isn't enough for most customers, so we give all our customers six months to cancel their service after the day of installation."
}

//Function to display the third answer
function ans3() {
    heading.style.display = "block";
    answer.textContent = "Of course! Depending on the security system, we can reused the sensors from your existing security system, making your overall price easier.";
}

//Function to display the fourth answer
function ans4() {
    heading.style.display = "block";
    answer.textContent = "it is definetly not neccessary. The sensors can be mounted on the wall or ceiling using double-sided tape while the security panel can be mounted on table stand to be rested on a table or shelf.";
}