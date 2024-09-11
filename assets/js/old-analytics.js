/*

function track_visitor() {

var start_session;
var startstop = 0;

var milisec = 0;
var sec = 0; 
var min = 0;
var hour = 0;

var miliSecOut = 0;
var secOut = 0;
var minOut = 0;
var hourOut = 0;

window.addEventListener('load', function() {

start();

});


document.addEventListener('visibilitychange', function() {

if(document.visibilityState === 'visible') {

start();

}

else {

request_data();
stop();

}


});



function request_data() {

var xhr = new XMLHttpRequest();

var sess_duration = hourOut + ':' + minOut + ':' + secOut + ':' + miliSecOut;

var data = "sess_duration=" + sess_duration;
xhr.open("POST", window.location.href, true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send(data);

}


function startStop() { 

startstop = startstop + 1;

if (startstop === 1) {
start();
}

else if (startstop === 2) {
startstop = 0;
stop();
}


}

function start() {
start_session = setInterval(timer, 10);
} /* Start */

function stop() {
clearInterval(start_session);

milisec = 0;
sec = 0; 
min = 0;
hour = 0;

} /* Stop */



function timer() {

miliSecOut = checkTime(milisec);
secOut = checkTime(sec);
minOut = checkTime(min);
hourOut = checkTime(hour);

milisec = ++milisec;

if (milisec === 100) {
milisec = 0;
sec = ++sec;
}

if (sec == 60) {
min = ++min;
sec = 0;
}

if (min == 60) {
min = 0;
hour = ++hour;

}

}

function checkTime(i) {
if (i < 10) {
i = "0" + i;
}
return i;
}

}

track_visitor();




*/