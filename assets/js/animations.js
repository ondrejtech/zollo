animOnScroll();
animOnScroll2();
animOnScroll3();
animOnScroll4();

animOnScroll_ph_1();
animOnScroll_ph_2();
animOnScroll_ph_3();
animOnScroll_ph_4();
animOnScroll_ph_5();
animOnScroll_ph_6();

typeEffectScroll();
typeEffectScroll2();





function typeEffectScroll() {
var element = document.querySelector('#zollo-kontakt-scroll-id');
var elementHeight = element.clientHeight;

var element2 = document.querySelector('.zollo-portfolio-row-1-wrap');

function inView() {

var windowHeight = window.innerHeight;
var scrollY = window.scrollY || window.pageYOffset;
var scrollPosition = scrollY + windowHeight;
var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;


  if (scrollPosition > elementPosition) {
    return true;
  }
  
  return false;
}


document.addEventListener('scroll', animate);

function animate() {

  if (inView()) {
   setTimeout(function() { kontakt_nn(); }, 1000);
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


function typeEffectScroll2() {
var element = document.querySelector('#zollo-digitalni-sluzby-scroll-id');
var elementHeight = element.clientHeight;

//var element2 = document.querySelector('.zollo-portfolio-row-1-wrap');

function inView() {

var windowHeight = window.innerHeight;
var scrollY = window.scrollY || window.pageYOffset;
var scrollPosition = scrollY + windowHeight;
var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;


  if (scrollPosition > elementPosition) {
    return true;
  }
  
  return false;
}


document.addEventListener('scroll', animate);

function animate() {

  if (inView()) {
   setTimeout(function() { digitalni(); }, 1000);
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



/* start function */
function animOnScroll() {
var element = document.querySelector('.zollo-portfolio-row-1-wrap');
var elementHeight = element.clientHeight;

var element2 = document.querySelector('.zollo-portfolio-row-1-wrap');

function inView() {

var windowHeight = window.innerHeight;
var scrollY = window.scrollY || window.pageYOffset;
var scrollPosition = scrollY + windowHeight;
var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight-500;


  if (scrollPosition > elementPosition) {
    return true;
  }
  
  return false;
}


document.addEventListener('scroll', animate);

function animate() {

  if (inView()) {
  element2.classList.remove('zollo-portfolio-row-1-wrap-anim-rev');
  element2.classList.add('zollo-portfolio-row-1-wrap-anim');
  }

  else {
  //element2.classList.remove('zollo-portfolio-row-1-wrap-anim');
  //element2.classList.add('zollo-portfolio-row-1-wrap-anim-rev');

  }
}
}
/* end function */

/* start function */
function animOnScroll2() {
var element = document.querySelector('.zollo-portfolio-row-2-wrap');
var elementHeight = element.clientHeight;

var element2 = document.querySelector('.zollo-portfolio-row-2-wrap');

function inView() {

var windowHeight = window.innerHeight;
var scrollY = window.scrollY || window.pageYOffset;
var scrollPosition = scrollY + windowHeight;
var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight-500;


  if (scrollPosition > elementPosition) {
    return true;
  }
  
  return false;
}


document.addEventListener('scroll', animate);

function animate() {

  if (inView()) {
  element2.classList.remove('zollo-portfolio-row-2-wrap-anim-rev');
  element2.classList.add('zollo-portfolio-row-2-wrap-anim');
  }

  else {
  //element2.classList.remove('zollo-portfolio-row-2-wrap-anim');
  //element2.classList.add('zollo-portfolio-row-2-wrap-anim-rev');

  }
}
}
/* end function */


/* start function */
function animOnScroll3() {
var element = document.querySelector('.zollo-portfolio-row-3-wrap');
var elementHeight = element.clientHeight;

var element2 = document.querySelector('.zollo-portfolio-row-3-wrap');

function inView() {

var windowHeight = window.innerHeight;
var scrollY = window.scrollY || window.pageYOffset;
var scrollPosition = scrollY + windowHeight;
var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight-500;


  if (scrollPosition > elementPosition) {
    return true;
  }
  
  return false;
}


document.addEventListener('scroll', animate);

function animate() {

  if (inView()) {
  element2.classList.remove('zollo-portfolio-row-3-wrap-anim-rev');
  element2.classList.add('zollo-portfolio-row-3-wrap-anim');
  }

  else {
  //element2.classList.remove('zollo-portfolio-row-3-wrap-anim');
  //element2.classList.add('zollo-portfolio-row-3-wrap-anim-rev');

  }
}
}
/* end function */


/* start function */
function animOnScroll4() {
var element = document.querySelector('.zollo-portfolio-row-4-wrap');
var elementHeight = element.clientHeight;

var element2 = document.querySelector('.zollo-portfolio-row-4-wrap');

function inView() {

var windowHeight = window.innerHeight;
var scrollY = window.scrollY || window.pageYOffset;
var scrollPosition = scrollY + windowHeight;
var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight-500;


  if (scrollPosition > elementPosition) {
    return true;
  }
  
  return false;
}


document.addEventListener('scroll', animate);

function animate() {

  if (inView()) {
  element2.classList.remove('zollo-portfolio-row-4-wrap-anim-rev');
  element2.classList.add('zollo-portfolio-row-4-wrap-anim');
  }

  else {
  //element2.classList.remove('zollo-portfolio-row-4-wrap-anim');
  //element2.classList.add('zollo-portfolio-row-4-wrap-anim-rev');

  }
}
}
/* end function */

/* start function */
function animOnScroll_ph_1() {

var element = document.querySelector('#zollo-digitalni-sluzby-scroll-id');
var elementHeight = element.clientHeight;

var element2 = document.querySelector('.zollo-ds-phone-01');

function inView() {

var windowHeight = window.innerHeight;
var scrollY = window.scrollY || window.pageYOffset;
var scrollPosition = scrollY + windowHeight;
var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;


  if (scrollPosition > elementPosition) {
    return true;
  }
  
  return false;
}


document.addEventListener('scroll', animate);

function animate() {

  if (inView()) {
  element2.classList.remove('zollo-ds-phone-01-anim-rev');
  element2.classList.add('zollo-ds-phone-01-anim');
 

   element2.addEventListener("animationend", function() {
    element2.style = "z-index: 0; transform: translate(21.5%, -86%) scale(0.7) rotate(45deg);";
    element2.classList.remove('zollo-ds-phone-01-anim');
      document.removeEventListener('scroll', animate);
    //alert("END");
  });

  }

  else {
  //element2.classList.remove('zollo-ds-phone-01-anim');
  //element2.classList.add('zollo-ds-phone-01-anim-rev');

  }
}
}
/* end function */

/* start function */
function animOnScroll_ph_2() {
var element = document.querySelector('#zollo-digitalni-sluzby-scroll-id');
var elementHeight = element.clientHeight;

var element2 = document.querySelector('.zollo-ds-phone-02');

function inView() {

var windowHeight = window.innerHeight;
var scrollY = window.scrollY || window.pageYOffset;
var scrollPosition = scrollY + windowHeight;
var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;


  if (scrollPosition > elementPosition) {
    return true;
  }
  
  return false;
}


document.addEventListener('scroll', animate);

function animate() {

  if (inView()) {
  element2.classList.remove('zollo-ds-phone-02-anim-rev');
  element2.classList.add('zollo-ds-phone-02-anim');

   element2.addEventListener("animationend", function() {
    element2.style = "z-index: 0; transform: translate(-72%, -37%) scale(0.7) rotate(45deg);";
     element2.classList.remove('zollo-ds-phone-02-anim');
      document.removeEventListener('scroll', animate);
    //alert("END");
  });  

  }

  else {
  //element2.classList.remove('zollo-ds-phone-02-anim');
  //element2.classList.add('zollo-ds-phone-02-anim-rev');

  }
}
}
/* end function */

/* start function */
function animOnScroll_ph_3() {
var element = document.querySelector('#zollo-digitalni-sluzby-scroll-id');
var elementHeight = element.clientHeight;

var element2 = document.querySelector('.zollo-ds-phone-03');

function inView() {

var windowHeight = window.innerHeight;
var scrollY = window.scrollY || window.pageYOffset;
var scrollPosition = scrollY + windowHeight;
var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;


  if (scrollPosition > elementPosition) {
    return true;
  }
  
  return false;
}


document.addEventListener('scroll', animate);

function animate() {

  if (inView()) {
  element2.classList.remove('zollo-ds-phone-03-anim-rev');
  element2.classList.add('zollo-ds-phone-03-anim');

   element2.addEventListener("animationend", function() {
    element2.style = "z-index: 0; transform: translate(-58%, 7%) scale(0.7) rotate(45deg);";    
     element2.classList.remove('zollo-ds-phone-03-anim');
      document.removeEventListener('scroll', animate);
    //alert("END");
  });  


  }


  else {
  //element2.classList.remove('zollo-ds-phone-03-anim');
  //element2.classList.add('zollo-ds-phone-03-anim-rev');

  }
}
}
/* end function */



/* start function */
function animOnScroll_ph_4() {
var element = document.querySelector('#zollo-digitalni-sluzby-scroll-id');
var elementHeight = element.clientHeight;

var element2 = document.querySelector('.zollo-ds-phone-04');

function inView() {

var windowHeight = window.innerHeight;
var scrollY = window.scrollY || window.pageYOffset;
var scrollPosition = scrollY + windowHeight;
var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;


  if (scrollPosition > elementPosition) {
    return true;
  }
  
  return false;
}


document.addEventListener('scroll', animate);

function animate() {

  if (inView()) {
  element2.classList.remove('zollo-ds-phone-04-anim-rev');
  element2.classList.add('zollo-ds-phone-04-anim');

   element2.addEventListener("animationend", function() {
    element2.style = "z-index: 0; transform: translate(35.5%, -42.5%) scale(0.7) rotate(45deg);";    
     element2.classList.remove('zollo-ds-phone-04-anim');
      document.removeEventListener('scroll', animate);
    //alert("END");
  });  

  }

  else {
  //element2.classList.remove('zollo-ds-phone-04-anim');
  //element2.classList.add('zollo-ds-phone-04-anim-rev');

  }
}
}
/* end function */


/* start function */
function animOnScroll_ph_5() {
var element = document.querySelector('#zollo-digitalni-sluzby-scroll-id');
var elementHeight = element.clientHeight;

var element2 = document.querySelector('.zollo-ds-phone-05');

function inView() {

var windowHeight = window.innerHeight;
var scrollY = window.scrollY || window.pageYOffset;
var scrollPosition = scrollY + windowHeight;
var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;


  if (scrollPosition > elementPosition) {
    return true;
  }
  
  return false;
}


document.addEventListener('scroll', animate);

function animate() {

  if (inView()) {
  element2.classList.remove('zollo-ds-phone-05-anim-rev');
  element2.classList.add('zollo-ds-phone-05-anim');

   element2.addEventListener("animationend", function() {
    element2.style = "z-index: 0; transform: translate(129%, -91.5%) scale(0.7) rotate(45deg);";    
     element2.classList.remove('zollo-ds-phone-05-anim');
      document.removeEventListener('scroll', animate);

    //alert("END");
  });  

  }

  else {
  //element2.classList.remove('zollo-ds-phone-05-anim');
  //element2.classList.add('zollo-ds-phone-05-anim-rev');

  }
}
}
/* end function */


/* start function */
function animOnScroll_ph_6() {
var element = document.querySelector('#zollo-digitalni-sluzby-scroll-id');
var elementHeight = element.clientHeight;

var element2 = document.querySelector('.zollo-ds-phone-06');

function inView() {

var windowHeight = window.innerHeight;
var scrollY = window.scrollY || window.pageYOffset;
var scrollPosition = scrollY + windowHeight;
var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;


  if (scrollPosition > elementPosition) {
    return true;
  }
  
  return false;
}


document.addEventListener('scroll', animate);

function animate() {

  if (inView()) {
  element2.classList.remove('zollo-ds-phone-06-anim-rev');
  element2.classList.add('zollo-ds-phone-06-anim');

   element2.addEventListener("animationend", function() {
    element2.style = "z-index: 0; transform: translate(120%, -17%) scale(1.25) rotate(45deg);";    
     element2.classList.remove('zollo-ds-phone-06-anim');
      document.removeEventListener('scroll', animate);

    //alert("END");
  });  

  }

  else {
  //element2.classList.remove('zollo-ds-phone-06-anim');
  //element2.classList.add('zollo-ds-phone-06-anim-rev');

  }
}
}
/* end function */

