



function typeEffectScroll_phone() {
var element = document.querySelector('#zollo-phone-digitalni-sluzby');
var elementHeight = element.clientHeight;

//var element2 = document.querySelector('.zollo-portfolio-row-1-wrap');

function inView() {

var windowHeight = window.innerHeight;
var scrollY = window.scrollY || window.pageYOffset;
var scrollPosition = scrollY + windowHeight;
var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight - 500;


  if (scrollPosition > elementPosition) {
    return true;
  }
  
  return false;
}


document.addEventListener('scroll', animate);

function animate() {

  if (inView()) {
   setTimeout(function() { zollo_phone_ds(); }, 500);
   document.removeEventListener('scroll', animate);

  //element2.classList.remove('zollo-portfolio-row-1-wrap-anim-rev');
  //element2.classList.add('zollo-portfolio-row-1-wrap-anim');
  }

  else {
  //element2.classList.remove('zollo-portfolio-row-1-wrap-anim');
  //element2.classList.add('zollo-portfolio-row-1-wrap-anim-rev');

  }
}
}
/* end function */


function typeEffectScroll_phone2() {
var element = document.querySelector('#zollo-phone-kontakt');
var elementHeight = element.clientHeight;

//var element2 = document.querySelector('.zollo-portfolio-row-1-wrap');

function inView() {

var windowHeight = window.innerHeight;
var scrollY = window.scrollY || window.pageYOffset;
var scrollPosition = scrollY + windowHeight;
var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight - 300;


  if (scrollPosition > elementPosition) {
    return true;
  }
  
  return false;
}


document.addEventListener('scroll', animate);

function animate() {

  if (inView()) {
   setTimeout(function() { zollo_kontakt_nn(); }, 500);
   document.removeEventListener('scroll', animate);
  //element2.classList.remove('zollo-portfolio-row-1-wrap-anim-rev');
  //element2.classList.add('zollo-portfolio-row-1-wrap-anim');
  }

  else {
  //element2.classList.remove('zollo-portfolio-row-1-wrap-anim');
  //element2.classList.add('zollo-portfolio-row-1-wrap-anim-rev');

  }
}
}
/* end function */




typeEffectScroll_phone();
typeEffectScroll_phone2();
