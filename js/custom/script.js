/** TYPING CONTAINER */

let text = document.getElementById("text");
let string = "FRONT END DEVELOPER.";
let i = 0;

function type() {
  if (i < string.length) {
    text.innerHTML += string.charAt(i);
    i++;
    setTimeout(type, 100);
  } else {
    i = 0;
    text.innerHTML = "";
    setTimeout(type, 1000);
  }
}

type();

/* navbar */


const navOpenButton = document.querySelector('#nav-open');
const navCloseButton = document.querySelector('#nav-close');
const navElement = document.querySelector('nav');
const icon = document.getElementsByClassName('.menu-open');

navOpenButton.addEventListener('click', function(){
  //show nav
  navElement.classList.remove('hide');
});


navCloseButton.addEventListener('click', function(){
  //hide nav
  navElement.classList.add('hide');
});