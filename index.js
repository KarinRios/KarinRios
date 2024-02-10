var today= new Date();
var hoursNow=today.getHours();
var saludo;

if (hoursNow < 12) {
	saludo="Buenos días, Bienvenido!";
} else if (hoursNow >= 12 && hoursNow < 18) {
	saludo="Buenas tardes, Bienvenido!";
} else if (hoursNow >= 18) {
	saludo="Buenas noches, Bienvenido!";
} else {
	saludo="Bienvenido!";
}

var hache2 = document.getElementById("Saludos");
hache2.textContent = saludo;


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}