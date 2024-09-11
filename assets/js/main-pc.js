var swiper = new Swiper('.swiper1', {
slidesPerView: 1,
spaceBetween: 0,
loop: true,

pagination: {
el: '.swiper-pagination-1',
clickable: true,
},

navigation: {
nextEl: '.swiper-button-next-1',
prevEl: '.swiper-button-prev-1',
},

});


var contextimg = document.querySelectorAll('img');
var ci = 0;

for(ci = 0; ci < contextimg.length; ci++) {

contextimg[ci].addEventListener("contextmenu", function(e) {
e.preventDefault();
}, false);

}

/*
document.querySelector('img').addEventListener("contextmenu", function(e) {
e.preventDefault();
}, false);
*/


function zollo_preload() { 
var zollo_preload = document.querySelector(".zollo-preload");
var zollo_body = document.querySelector("#zollo-body");

var imageUrl = "assets/img/bg/background.png";
var bgElement = document.querySelector("#zollo-theme");
var preloaderImg = document.createElement("img");
preloaderImg.src = imageUrl;

preloaderImg.addEventListener('load', (event) => {
bgElement.style.backgroundImage = `url(${imageUrl})`;
preloaderImg = null;

//zollo_preload.style = "display: none";

zollo_preload.classList.add('zollo-preload-anim');
zollo_body.style = "overflow-y: auto";

});
}

zollo_preload();


//document.addEventListener("load", ready);


function zollo_dsgn() { 
var element = document.querySelector('#zollo-dsgn');
var element2 = document.querySelector('#zollo-studio');
var backslash = document.querySelector('#zollo-dsgn-backslash');
var backslash2 = document.querySelector('#zollo-studio-backslash');
var element3 = document.querySelector('#zollo-studio-line');
//backslash2.style = "display: none";

var i = 0;
var i2 = 0;
var txt = 'DSGN';
var txt2 = 'STUDIO';
var speed = 100;
var speed2 = 100;

function typeWriter() {
if (i < txt.length) {
element.innerHTML += txt.charAt(i);
i++;
setTimeout(typeWriter, speed);

if(i == txt.length) {

setTimeout(function() {  
backslash.style = "display: none";
backslash2.style = "display: block";
typeWriter2();
}, 500);

}
}
}

//typeWriter();
setTimeout(function() { typeWriter(); }, 2500);


function typeWriter2() {
if (i2 < txt2.length) {
element2.innerHTML += txt2.charAt(i2);
i2++;
setTimeout(typeWriter2, speed2);

if(i2 == txt2.length) {
backslash2.style = "display: none"; 
element3.style = "display: block";
element3.classList.add('zollo-studio-line-anim');
//typeWriter2();
}
}
}

}

zollo_dsgn();



function digitalni() { 


var element = document.querySelector('#zollo-digitalni');
var element2 = document.querySelector('#zollo-sluzby');
var element3 = document.querySelector('.zollo-dstc-b-dot');
var backslash =  document.querySelector('#zollo-digitalni-backslash');
var backslash2 =  document.querySelector('#zollo-sluzby-backslash');
var dot =  document.querySelector('.zollo-dstc-b-dot');

var i = 0;
var i2 = 0;
var txt = 'DIGITÁLNÍ';
var txt2 = 'SLUŽBY';
var speed = 100;

function typeWriter() {
if (i < txt.length) {
element.innerHTML += txt.charAt(i);
i++;
setTimeout(typeWriter, speed);

if(i == txt.length) {

setTimeout(function() {
backslash.style = "display: none"; 
backslash2.style = "display: block"; 
typeWriter2();
}, 500);


}

}
}

typeWriter();


function typeWriter2() {
if (i2 < txt2.length) {
element2.innerHTML += txt2.charAt(i2);
i2++;
setTimeout(typeWriter2, speed);

if(i2 == txt2.length) {
backslash2.style = "display: none"; 
element3.style = "display:block";
//element3.style = "display: block";
element3.classList.add('zollo-dstc-b-dot-anim');
//typeWriter2();
}

}
}


}

//digitalni();


function kontakt_nn() { 
var element = document.querySelector('#zollo-napiste');
var element2 = document.querySelector('#zollo-nam');
var dot = document.querySelector('.zollo-kontakt-container-item-a-dot');
var napiste_bs = document.querySelector('#zollo-napiste-backslash');
var nam_bs = document.querySelector('#zollo-nam-backslash');

var i = 0;
var i2 = 0;
var txt = 'NAPIŠTE';
var txt2 = 'NÁM';
var speed = 100;

function typeWriter() {
if (i < txt.length) {
element.innerHTML += txt.charAt(i);
i++;
setTimeout(typeWriter, speed);

if(i == txt.length) {

setTimeout( function() {
napiste_bs.style = "display: none";
nam_bs.style = "display: block";
typeWriter2();
}, 500);

}

}
}

typeWriter();


function typeWriter2() {
if (i2 < txt2.length) {
element2.innerHTML += txt2.charAt(i2);
i2++;
setTimeout(typeWriter2, speed);

if (i2 == txt2.length) {
nam_bs.style = "display: none";
dot.classList.add('zollo-kontakt-container-item-a-dot-anim');
dot.style = "display: block";  
}

}
}

}



//kontakt_nn();
//digitalni();










var zollo_form_checkbox = document.querySelector('#zollo-form-checkbox');

//var zollo_kontakt_submit_result = document.querySelector('.zollo-kontakt-submit-result');
var zollo_form = document.querySelector("#zollo-kontakt-form");

var tester = document.querySelector('.zollo-kontakt-container-item-a-center');

var zollo_klient_input = document.querySelector("#zollo-klient");
var zollo_email_input = document.querySelector("#zollo-klient-email");
var zollo_tel_input = document.querySelector("#zollo-klient-tel-cislo");
var zollo_zprava_input = document.querySelector("#zollo-kontakt-form-textarea");

var zollo_form_submit_button = document.querySelector("#zollo-formular-submit");

var zollo_form_alert = document.querySelectorAll("#zollo-kontakt-form-alert");
var zollo_form_alert_p = document.querySelectorAll("#zollo-kontakt-form-alert-p");




//zollo_form.addEventListener("change", validateForm);
zollo_form.addEventListener("submit", validateForm);
zollo_form.addEventListener("submit", prevalidate);
//zollo_form.addEventListener("input", validateForm);



function validateForm() {


var zollo_klient_value = zollo_klient_input.value;
var zollo_email_value = zollo_email_input.value;
var zollo_tel_value = zollo_tel_input.value;
var zollo_zprava_value = zollo_zprava_input.value.length;


var klient_pattern = /^[A-Za-z .-]+$/;
var email_pattern = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
var tel_pattern = /^[^A-Za-z._%-]+$/;


function validateKlient() {
if (zollo_klient_value == "") {

zollo_form_alert[0].removeAttribute("data-hidden");
zollo_form_alert[0].style = "display: block";
zollo_form_alert_p[0].innerHTML = "*Jméno je prázdné";
return false;

}

else if(!zollo_klient_value.match(klient_pattern)) {

zollo_form_alert[0].removeAttribute("data-hidden");
zollo_form_alert[0].style = "display: block";
zollo_form_alert_p[0].innerHTML = "*Jméno má nespravný formát";

return false;

}

else {

zollo_form_alert[0].setAttribute("data-hidden", "");
zollo_form_alert[0].style = "display: none";

}
}

validateKlient();

function validateEmail() {
if (zollo_email_value == "") {

zollo_form_alert[1].removeAttribute("data-hidden");
zollo_form_alert[1].style = "display: block";
zollo_form_alert_p[1].innerHTML = "*Email je prázdný";
return false;

}

else if(!zollo_email_value.match(email_pattern)) {

zollo_form_alert[1].removeAttribute("data-hidden");
zollo_form_alert[1].style = "display: block";
zollo_form_alert_p[1].innerHTML = "*Email má nespravný formát";

return false;

}

else {
zollo_form_alert[1].setAttribute("data-hidden", "");
zollo_form_alert[1].style = "display: none";

}
}

validateEmail();

function validateTel() {
if (zollo_tel_value == "") {

zollo_form_alert[2].removeAttribute("data-hidden");
zollo_form_alert[2].style = "display: block";
zollo_form_alert_p[2].innerHTML = "*Telefon je prázdný";
return false;

}

else if(!zollo_tel_value.match(tel_pattern)) {

zollo_form_alert[2].removeAttribute("data-hidden");
zollo_form_alert[2].style = "display: block";
zollo_form_alert_p[2].innerHTML = "*Telefon má nespravný formát";

return false;

}

else {

zollo_form_alert[2].setAttribute("data-hidden", "");
zollo_form_alert[2].style = "display: none";

}
}

validateTel();


function validateMessage() {
if (zollo_zprava_value == "") {

zollo_form_alert[3].removeAttribute("data-hidden");
zollo_form_alert[3].style = "display: block";
zollo_form_alert_p[3].innerHTML = "*Zprava je prázdná";
return false;

}


else if(zollo_zprava_value >= 1800) {

zollo_form_alert[3].removeAttribute("data-hidden");
zollo_form_alert[3].style = "display: block";
zollo_form_alert_p[3].innerHTML = "*Zprava má více než 300 slov";

return false;

}


else {

zollo_form_alert[3].setAttribute("data-hidden", "");
zollo_form_alert[3].style = "display: none";

}
}

validateMessage();


}



function prevalidate() {

for(i = 0; i < zollo_form_alert.length; i++) {

var preval = !zollo_form_alert[i].hasAttribute('data-hidden');

if(preval) {

//alert("DONT APPEND");
break;

}
}


if(preval == false) {



}


}


//window.addEventListener( "load", ajaxForm);
ajaxForm();

function ajaxForm() {

function sendData() {

var zollo_kontakt_submit_result = document.querySelector('.zollo-kontakt-submit-result');

script = document.createElement("script");

//script.innerHTML = "alert('appended');";

script.innerHTML = "var kontakt_submit_result_overlay = document.querySelector('.zollo-kontakt-submit-overlay');\
var kontakt_submit_result_button = document.querySelector('#zollo-kontakt-submit-window-close');\
kontakt_submit_result_button.addEventListener('click', function() {\
kontakt_submit_result_overlay.classList.remove('zollo-kontakt-submit-overlay-anim');\
kontakt_submit_result_overlay.classList.add('zollo-kontakt-submit-overlay-anim-rev');\
});";


const XHR = new XMLHttpRequest();

const FD = new FormData( form );


XHR.addEventListener( "load", function(event) {


//alert(event.target.responseText);
zollo_kontakt_submit_result.innerHTML = event.target.responseText;	


setTimeout(function() {
zollo_kontakt_submit_result.appendChild(script);
}, 1);


});


XHR.addEventListener( "error", function( event ) {
alert( 'Oops! Something went wrong.' );
});


XHR.open( "POST", "https://zollo.cz/zollo-email.php" );
XHR.send(FD);
}
 
let form = document.getElementById("zollo-kontakt-form");


form.addEventListener( "submit", function ( event ) {
event.preventDefault();
sendData();
});

}




function scrollPageTo (to, duration=500) {
  //t = current time
  //b = start value
  //c = change in value
  //d = duration
  const easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
  if (t < 1) return c/2*t*t*t + b;
  t -= 2;
  return c/2*(t*t*t + 2) + b;
};

  return new Promise((resolve, reject) => {
    const element = document.scrollingElement;

    if (typeof to === 'string') {
      to = document.querySelector(to) || reject();
    }
    if (typeof to !== 'number') {
      to = to.getBoundingClientRect().top + element.scrollTop;
    }

    let start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 500;

    const animateScroll = function() {
        currentTime += increment;
        let val = easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        } else {
          resolve();
        }
    };
    animateScroll();
  });
}




var zollo_button_top = document.querySelector(".zollo-button-top");
var zollo_portfolio_button = document.querySelector("#zollo-portfolio-button");
var zollo_digitalni_sluzby_button = document.querySelector("#zollo-digitalni-sluzby-button");
var zollo_kontakt_button = document.querySelector("#zollo-kontakt-button");
var zollo_theme_button = document.querySelector("#zollo-theme-content-div-item-right-c");

var zollo_portfolio_scroll_id = document.querySelector("#zollo-portfolio-scroll-id");
var zollo_digitalni_sluzby_scroll_id = document.querySelector("#zollo-digitalni-sluzby-scroll-id");
var zollo_kontakt_scroll_id = document.querySelector("#zollo-kontakt-scroll-id");

zollo_portfolio_button.addEventListener("click", function() {

window.scrollPageTo('#zollo-portfolio-scroll-id', 500);

});


zollo_theme_button.addEventListener("click", function() {

window.scrollPageTo('#zollo-digitalni-sluzby-scroll-id', 500);

});


zollo_digitalni_sluzby_button.addEventListener("click", function() {

window.scrollPageTo('#zollo-digitalni-sluzby-scroll-id', 500);

});


zollo_kontakt_button.addEventListener("click", function() {

window.scrollPageTo('#zollo-kontakt-scroll-id', 500);

});


zollo_button_top.addEventListener("click", function() {

window.scrollPageTo(0, 500);

});


window.addEventListener("resize", function() {


zollo_portfolio_scroll_id_position = zollo_portfolio_scroll_id.getBoundingClientRect().top + window.scrollY;
zollo_digitalni_sluzby_scroll_id_position = zollo_digitalni_sluzby_scroll_id.getBoundingClientRect().top + window.scrollY;
zollo_kontakt_scroll_id_position = zollo_kontakt_scroll_id.getBoundingClientRect().top + window.scrollY;


});




function zollo_navbar() {
document.addEventListener("scroll", myMenu);
document.addEventListener("DOMContentLoaded", myMenu);

var oldValue = 0;
var zollo_menu = document.querySelector("#zollo-nav");
function myMenu() {


newValue = window.pageYOffset;

if (oldValue - newValue < 0) {
//alert("SCROLL DOWN");

setTimeout(function() {
zollo_menu.style = "top: -5vw";
}, 350);


}

else if (oldValue - newValue > 0) {
//alert("SCROLL UP");
setTimeout(function() {
zollo_menu.style = "top: 0vw";
}, 350);

}

oldValue = newValue;

}
}

zollo_navbar();




function zollo_kontakt() {

var poop = 7 * document.documentElement.clientWidth / 100;
var poop_rev = -poop;

var zollo_kontakt = document.querySelector("#zollo-kontakt");
var kontakt_form_textarea = document.querySelector("#zollo-kontakt-form-textarea");

kontakt_form_textarea.addEventListener("focusin", function() {
kontakt_form_textarea.style = "height: 12vw";
zollo_kontakt.style = "height: 87vw";
//zollo_entire_content_scroll.style = "height: " + (zollo_entire_content.clientHeight + poop) + "px";
});


kontakt_form_textarea.addEventListener("focusout", function() {
kontakt_form_textarea.style = "height: 3vw";
zollo_kontakt.style = "height: 80vw";
//zollo_entire_content_scroll.style = "height: " + (zollo_entire_content.clientHeight - poop) + "px";
});
}

zollo_kontakt();



function zollo_digitalni_sluzby() {
var lightbox = document.querySelector(".zollo-sluzby-lightbox");
var lightbox_button_close = document.querySelector(".zollo-sluzby-lightbox-button");

var zollo_lightbox_click_out = document.querySelector("#zollo-lightbox-click-out");
var phone_template_01 = document.querySelector(".zollo-ds-phone-01");
var phone_template_02 = document.querySelector(".zollo-ds-phone-02");
var phone_template_03 = document.querySelector(".zollo-ds-phone-03");
var phone_template_04 = document.querySelector(".zollo-ds-phone-04");
var phone_template_05 = document.querySelector(".zollo-ds-phone-05");
var phone_template_06 = document.querySelector(".zollo-ds-phone-06");



lightbox.addEventListener("click", hideLightbox_out);

function hideLightbox_out() {
phone_template_01.style = "z-index: 0; transform: translate(21.5%, -86%) scale(0.7) rotate(45deg);";
phone_template_02.style = "z-index: 0; transform: translate(-72%, -37%) scale(0.7) rotate(45deg);";
phone_template_03.style = "z-index: 0; transform: translate(-58%, 7%) scale(0.7) rotate(45deg);";
phone_template_04.style = "z-index: 0; transform: translate(35.5%, -42.5%) scale(0.7) rotate(45deg);";
phone_template_05.style = "z-index: 0; transform: translate(129%, -91.5%) scale(0.7) rotate(45deg);";
phone_template_06.style = "z-index: 0; transform: translate(120%, -17%) scale(1.25) rotate(45deg);";


lightbox.classList.remove("zollo-sluzby-lightbox-anim");
lightbox.classList.add("zollo-sluzby-lightbox-anim-rev");
lightbox.addEventListener("animationend", hideLightbox);    
}


function hideLightbox() {
lightbox.classList.add("zollo-sluzby-lightbox-hidden"); 
}


lightbox_button_close.addEventListener("click", function() {
phone_template_01.style = "z-index: 0; transform: translate(21.5%, -86%) scale(0.7) rotate(45deg);";
phone_template_02.style = "z-index: 0; transform: translate(-72%, -37%) scale(0.7) rotate(45deg);";
phone_template_03.style = "z-index: 0; transform: translate(-58%, 7%) scale(0.7) rotate(45deg);";
phone_template_04.style = "z-index: 0; transform: translate(35.5%, -42.5%) scale(0.7) rotate(45deg);";
phone_template_05.style = "z-index: 0; transform: translate(129%, -91.5%) scale(0.7) rotate(45deg);";
phone_template_06.style = "z-index: 0; transform: translate(120%, -17%) scale(1.25) rotate(45deg);";

lightbox.classList.remove("zollo-sluzby-lightbox-anim");
lightbox.classList.add("zollo-sluzby-lightbox-anim-rev");
lightbox.addEventListener("animationend", hideLightbox);

});


phone_template_01.addEventListener("click", function() {
phone_template_01.style = "z-index: 100; transform: translate(-50%, -50%) scale(1.2) rotate(0deg);";

lightbox.classList.remove("zollo-sluzby-lightbox-hidden");  
lightbox.classList.remove("zollo-sluzby-lightbox-anim-rev");
lightbox.classList.add("zollo-sluzby-lightbox-anim");
lightbox.removeEventListener("animationend", hideLightbox);

});


phone_template_01.addEventListener("animationend", function() {

//phone_template_01.style = "z-index: 0; transform: translate(21.5%, -86%) scale(0.7) rotate(45deg);";

//phone_template_01.classList.remove('zollo-ds-phone-01-anim');
//phone_template_01.classList.remove('zollo-ds-phone-01-anim-rev');
/*

phone_template_01.classList.remove('zollo-ds-phone-01-anim');
phone_template_01.classList.remove('zollo-ds-phone-01-anim-rev');
*/
//window.removeEventListener("load", animOnScroll_ph_1);
//ocument.removeEventListener('scroll', animate_ph_1);

});



phone_template_02.addEventListener("click", function() {
phone_template_02.style = "z-index: 100; transform: translate(-50%, -50%) scale(1.2) rotate(0deg);";

lightbox.classList.remove("zollo-sluzby-lightbox-hidden");  
lightbox.classList.remove("zollo-sluzby-lightbox-anim-rev");
lightbox.classList.add("zollo-sluzby-lightbox-anim");
lightbox.removeEventListener("animationend", hideLightbox);

});

phone_template_03.addEventListener("click", function() {
phone_template_03.style = "z-index: 100; transform: translate(-50%, -50%) scale(1.2) rotate(0deg);";

lightbox.classList.remove("zollo-sluzby-lightbox-hidden");  
lightbox.classList.remove("zollo-sluzby-lightbox-anim-rev");
lightbox.classList.add("zollo-sluzby-lightbox-anim");
lightbox.removeEventListener("animationend", hideLightbox);

});


phone_template_04.addEventListener("click", function() {
phone_template_04.style = "z-index: 100; transform: translate(-50%, -50%) scale(1.2) rotate(0deg);";

lightbox.classList.remove("zollo-sluzby-lightbox-hidden");  
lightbox.classList.remove("zollo-sluzby-lightbox-anim-rev");
lightbox.classList.add("zollo-sluzby-lightbox-anim");
lightbox.removeEventListener("animationend", hideLightbox);

});

phone_template_05.addEventListener("click", function() {
phone_template_05.style = "z-index: 100; transform: translate(-50%, -50%) scale(1.2) rotate(0deg);";

lightbox.classList.remove("zollo-sluzby-lightbox-hidden");  
lightbox.classList.remove("zollo-sluzby-lightbox-anim-rev");
lightbox.classList.add("zollo-sluzby-lightbox-anim");
lightbox.removeEventListener("animationend", hideLightbox);

});

phone_template_06.addEventListener("click", function() {
phone_template_06.style = "z-index: 100; transform: translate(-50%, -50%) scale(1.2) rotate(0deg);";

lightbox.classList.remove("zollo-sluzby-lightbox-hidden");  
lightbox.classList.remove("zollo-sluzby-lightbox-anim-rev");
lightbox.classList.add("zollo-sluzby-lightbox-anim");
lightbox.removeEventListener("animationend", hideLightbox);

});
}

zollo_digitalni_sluzby();