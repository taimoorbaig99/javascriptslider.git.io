// var a = document.getElementById('image');
// var b = document.getElementById('image');
// var c = document.getElementById('image');
// function image(cls){
//    console.log(a);
//     a.src = 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8fDB8fA%3D%3D&w=1000&q=80' ;
//     console.log(b);
//     b.src = 'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200';
// };




let slideIndex = 1;
showSlides(slideIndex);

//===============IMAGE SLIDER=======================


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("Slider");
  let dots = document.getElementsByClassName("bullets");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


//==================================================
