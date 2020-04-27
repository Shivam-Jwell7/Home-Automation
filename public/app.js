const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener ('click', () => {
    navLinks.classList.toggle('open');
    links.forEach(link =>{
        link.classList.toggle('fade');
    });
});

var bulbImage = document.getElementById('myImage')
var lightOn = function () {
    console.log('Ligts on!');
    bulbImage.src = "assets/bulbon.gif";
    
}
var lightOff = function () {
    console.log('Lights off!');
    bulbImage.src = "assets/bulboff.gif";
}