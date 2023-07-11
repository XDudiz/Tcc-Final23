let menu =document.getElementById('myNav')
let conteudo =document.getElementById('main')

function openNav(){
    menu.style.width= '250px'
    conteudo.style.filter = "blur(2px)"
}

function closeNav(){
    menu.style.width='0'
    conteudo.style.marginLeft='0px'
    conteudo.style.filter = "blur(0px)"
}

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}