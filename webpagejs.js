
function StartingAlert() {
  alert("CONGRATULATIONS! You have won access to this webpage. This is a huge honor that you are so lucky to receive. Not used to such safe alerts? Well, it is time we changed just that.  ");
}



//slideshow stuff below...

var slideIndex = 0;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide() {
  showSlides(showIndex = n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");// Makes a list of images

  if (n > slides.length) {slideIndex = 0}
  if (n < 0) {slideIndex = slides.length - 1}

  for (i=0; i<slides.length; i++) {//i++ increases i by 1
    slides[i].style.display = "none";//this will hide the slides first
  }
  slides[slideIndex].style.display = "block";
}
