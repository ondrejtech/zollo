var swipero = new Swiper('.swiper1', {
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

var swiper2 = new Swiper('.swiper2', {
loop: true,
effect: 'coverflow',
followFinger: false,
grabCursor: true,
speed: 1000,
centeredSlides: true,
slidesPerView: 'auto',
coverflowEffect: {
rotate: 70,
stretch: 0,
depth: 100,
modifier: 1,
slideShadows : false,
},
pagination: {
el: '.swiper-pagination-2',
},
});


var contextimg = document.querySelectorAll('img');
var ci = 0;

for(ci = 0; ci < contextimg.length; ci++) {

contextimg[ci].addEventListener("contextmenu", function(e) {
e.preventDefault();
}, false);

}


function zollo_phone_preload() { 
var zollo_preload = document.querySelector(".zollo-preload");
var zollo_body = document.querySelector("#zollo-body");

var imageUrl = "assets/img/bg/phone-theme.png";
var bgElement = document.querySelector("#zollo-phone-theme");
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

zollo_phone_preload();


function zollo_phone_theme() { 
var element = document.querySelector('#zollo-phone-a-wrap-p1');
var element2 = document.querySelector('#zollo-phone-a-wrap-p2');
var element3 = document.querySelector('#zollo-phone-a-wrap-p3');
var element4 = document.querySelector('#zollo-phone-theme-container-a-yes');
var backslash = document.querySelector('#zollo-phone-theme-container-a-backslash');
var backslash2 = document.querySelector('#zollo-phone-theme-container-a-backslash2');
var backslash3 = document.querySelector('#zollo-phone-theme-container-a-backslash3');

//backslash2.style = "display: none";

var i = 0;
var i2 = 0;
var i3 = 0;
var txt = 'WE ARE';
var txt2 = 'design,';
var txt3 = 'WE ARE ZOLLO';
var speed = 100;
var speed2 = 100;




function typeWriter() {
//element4.classList.add('zollo-phone-theme-container-a-yes-anim');
if (i < txt.length) {
element.innerHTML += txt.charAt(i);
i++;
setTimeout(typeWriter, speed2);

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
backslash3.style = "display: block";
typeWriter3();
/*
element3.style = "display: block";
element3.classList.add('zollo-studio-line-anim');
*/
//typeWriter2();
}
}
}


function typeWriter3() {
if (i3 < txt3.length) {
element3.innerHTML += txt3.charAt(i3);
i3++;
setTimeout(typeWriter3, speed2);

if(i3 == txt3.length) {
backslash3.style = "display: none"; 
element3.innerHTML = "WE ARE <strong>ZOLLO</strong>";
element4.classList.add('zollo-phone-theme-container-a-yes-anim');
//element4.style = "display: block";

/*
element3.style = "display: block";
element3.classList.add('zollo-studio-line-anim');
*/
//typeWriter2();
}
}
}

}

zollo_phone_theme();




function zollo_phone_ds() {


var element = document.querySelector('#zollo-phone-digitalni');
var element2 = document.querySelector('#zollo-phone-sluzby');
//var element3 = document.querySelector('.zollo-phone-digitalni-sluzby-theme-a-dot');
var backslash =  document.querySelector('#zollo-phone-digitalni-backslash');
var backslash2 =  document.querySelector('#zollo-phone-sluzby-backslash');
var dot =  document.querySelector('.zollo-phone-digitalni-sluzby-theme-a-dot');

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
//element3.style = "display:block";
dot.style = "display: block";
dot.classList.add('zollo-phone-digitalni-sluzby-theme-a-dot-anim');
//typeWriter2();
}

}
}


}

//zollo_phone_ds();



function zollo_kontakt_nn() {


var element = document.querySelector('#zollo-phone-napiste');
var element2 = document.querySelector('#zollo-phone-nam');
//var element3 = document.querySelector('.zollo-phone-digitalni-sluzby-theme-a-dot');
var backslash =  document.querySelector('#zollo-phone-napiste-backslash');
var backslash2 =  document.querySelector('#zollo-phone-nam-backslash');
var dot =  document.querySelector('.zollo-phone-kontakt-content-item-a-dot');

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
//element3.style = "display:block";
dot.style = "display: block";
dot.classList.add('zollo-phone-digitalni-sluzby-theme-a-dot-anim');
//typeWriter2();
}

}
}


}

//zollo_kontakt_nn();






var zollo_phone_ham = document.querySelector(".zollo-phone-nav-item-hamburger");
var zollo_phone_nav_overlay = document.querySelector(".zollo-phone-nav-overlay");
var zollo_phone_ham_overlay = document.querySelector(".zollo-phone-nav-overlay-item-hamburger");
var zollo_phone_nav_overlay_links_items = document.querySelectorAll(".zollo-phone-nav-overlay-links-item");


zollo_phone_ham.addEventListener("click", function() {
zollo_phone_ham.classList.toggle("zollo-phone-nav-item-hamburger-change");
zollo_phone_ham_overlay.classList.toggle("zollo-phone-nav-overlay-item-hamburger-change");
zollo_phone_nav_overlay.style = "width: 100%";


});

zollo_phone_ham_overlay.addEventListener("click", function() {
zollo_phone_ham.classList.toggle("zollo-phone-nav-item-hamburger-change");
zollo_phone_ham_overlay.classList.toggle("zollo-phone-nav-overlay-item-hamburger-change");
zollo_phone_nav_overlay.style = "width: 0%";

});

var i;
for(i = 0; i < zollo_phone_nav_overlay_links_items.length; i++) {

zollo_phone_nav_overlay_links_items[i].addEventListener("click", function() {

zollo_phone_ham.classList.toggle("zollo-phone-nav-item-hamburger-change");
zollo_phone_ham_overlay.classList.toggle("zollo-phone-nav-overlay-item-hamburger-change");
zollo_phone_nav_overlay.style = "width: 0%";

});

}

/*
zollo_phone_nav_overlay_links_item.addEventListener("click", function() {

zollo_phone_ham.classList.toggle("zollo-phone-nav-item-hamburger-change");
zollo_phone_ham_overlay.classList.toggle("zollo-phone-nav-overlay-item-hamburger-change");
zollo_phone_nav_overlay.style = "width: 0%";

});
*/



var kontakt_form_klient = document.querySelector("#zollo-phone-klient");
var kontakt_form_klient_email = document.querySelector("#zollo-phone-klient-email");
var kontakt_form_klient_tel = document.querySelector("#zollo-phone-klient-tel-cislo");
var kontakt_form_textarea = document.querySelector("#zollo-phone-kontakt-form-textarea");
var kontakt_form_te = document.querySelector('#zollo-phone-kontakt-content-item-c');
var kontakt_form_op = document.querySelector('#zollo-phone-kontakt-content-item-d');

function zollo_phone_kontakt() {


kontakt_form_klient.addEventListener("focusin", function() {

//kontakt_form_textarea.style = "height: 25vw";
kontakt_form_te.style = "opacity: 0; visibility: hidden;";
kontakt_form_op.style = "opacity: 0; visibility: hidden;";

});

kontakt_form_klient_email.addEventListener("focusin", function() {

//kontakt_form_textarea.style = "height: 25vw";
kontakt_form_te.style = "opacity: 0; visibility: hidden;";
kontakt_form_op.style = "opacity: 0; visibility: hidden;";

});


kontakt_form_klient_tel.addEventListener("focusin", function() {

//kontakt_form_textarea.style = "height: 25vw";
kontakt_form_te.style = "opacity: 0; visibility: hidden;";
kontakt_form_op.style = "opacity: 0; visibility: hidden;";

});

kontakt_form_textarea.addEventListener("focusin", function() {

kontakt_form_textarea.style = "height: 25vw";
kontakt_form_te.style = "opacity: 0; visibility: hidden;";
kontakt_form_op.style = "opacity: 0; visibility: hidden;";

});

kontakt_form_textarea.addEventListener("focusout", function() {

kontakt_form_textarea.style = "height: 7vw";
kontakt_form_te.style = "opacity: 1; visibility: visible;";
kontakt_form_op.style = "opacity: 1; visibility: visible;";

});




}


zollo_phone_kontakt();








var zollo_form = document.querySelector("#zollo-phone-kontakt-form");

//var tester = document.querySelector('.zollo-kontakt-container-item-a-center');

var zollo_klient_input = document.querySelector("#zollo-phone-klient");
var zollo_email_input = document.querySelector("#zollo-phone-klient-email");
var zollo_tel_input = document.querySelector("#zollo-phone-klient-tel-cislo");
var zollo_zprava_input = document.querySelector("#zollo-phone-kontakt-form-textarea");

var zollo_form_submit_button = document.querySelector("#zollo-phone-formular-submit");

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

kontakt_form_te.style = "opacity: 0; visibility: hidden;";
kontakt_form_op.style = "opacity: 0; visibility: hidden;";
return false;

}

else if(!zollo_klient_value.match(klient_pattern)) {

zollo_form_alert[0].removeAttribute("data-hidden");
zollo_form_alert[0].style = "display: block";
zollo_form_alert_p[0].innerHTML = "*Jméno má nespravný formát";

kontakt_form_te.style = "opacity: 0; visibility: hidden;";
kontakt_form_op.style = "opacity: 0; visibility: hidden;";
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

kontakt_form_te.style = "opacity: 0; visibility: hidden;";
kontakt_form_op.style = "opacity: 0; visibility: hidden;";
return false;

}

else if(!zollo_email_value.match(email_pattern)) {

zollo_form_alert[1].removeAttribute("data-hidden");
zollo_form_alert[1].style = "display: block";
zollo_form_alert_p[1].innerHTML = "*Email má nespravný formát";


kontakt_form_te.style = "opacity: 0; visibility: hidden;";
kontakt_form_op.style = "opacity: 0; visibility: hidden;";
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

kontakt_form_te.style = "opacity: 0; visibility: hidden;";
kontakt_form_op.style = "opacity: 0; visibility: hidden;";
return false;

}

else if(!zollo_tel_value.match(tel_pattern)) {

zollo_form_alert[2].removeAttribute("data-hidden");
zollo_form_alert[2].style = "display: block";
zollo_form_alert_p[2].innerHTML = "*Telefon má nespravný formát";

kontakt_form_te.style = "opacity: 0; visibility: hidden;";
kontakt_form_op.style = "opacity: 0; visibility: hidden;";
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

kontakt_form_te.style = "opacity: 0; visibility: hidden;";
kontakt_form_op.style = "opacity: 0; visibility: hidden;";
return false;

}


else if(zollo_zprava_value >= 1800) {

zollo_form_alert[3].removeAttribute("data-hidden");
zollo_form_alert[3].style = "display: block";
zollo_form_alert_p[3].innerHTML = "*Zprava má více než 300 slov";

kontakt_form_te.style = "opacity: 0; visibility: hidden;";
kontakt_form_op.style = "opacity: 0; visibility: hidden;";
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

kontakt_form_te.style = "opacity: 1; visibility: visible;";
kontakt_form_op.style = "opacity: 1; visibility: visible;";


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

//alert('Success');


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
 
let form = document.getElementById("zollo-phone-kontakt-form");


form.addEventListener( "submit", function ( event ) {
event.preventDefault();
sendData();
});

}
