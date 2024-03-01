//special countdown
let dayItem = document.querySelector("#days")
let hoursItem = document.querySelector("#hours")
let minItem = document.querySelector("#min")
let secItem = document.querySelector("#sec")

let countDown = () => {
    let futureDate = new Date(" 30 Feb 2024");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;

    let Days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let Hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
    let Min = Math.floor(myDate / 1000 / 60) % 60;
    let Sec = Math.floor(myDate / 1000) % 60;
    dayItem.innerHTML = Days
    hoursItem.innerHTML = Hours
    minItem.innerHTML = Min
    secItem.innerHTML = Sec
}
// countDown()
setInterval(countDown, 1000);
//scroll back to top
function scrollToTop() {
    var scrollBar = document.querySelector("#scrollUp");
    window.onscroll = function () {
        var scroll = document.documentElement.scrollTop;
        if (scroll >= 250) {
            scrollBar.classList.add("scrollActive")
        } else {
            scrollBar.classList.remove("scrollActive")
        }
    }
}
scrollToTop()

// navhide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar=collapse.collapse")
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show")
    })
})