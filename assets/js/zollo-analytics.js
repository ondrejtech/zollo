function zollo_analytics() {


var time;
var prevTime, stopwatchInterval, elapsedTime = 0;
var tempTime = elapsedTime;

function checkTime(i) {
if (i < 10) {
i = "0" + i;
}
return i;
}

function substrMilli(a) {

return a.toString().substr(0,2);

}


function updateTime() {

tempTime = elapsedTime;

var milliseconds = substrMilli(tempTime % 1000);
tempTime = Math.floor(tempTime / 1000);

var seconds = checkTime(tempTime % 60);

tempTime = Math.floor(tempTime / 60);

var minutes = checkTime(tempTime % 60);
tempTime = Math.floor(tempTime / 60);

var hours = checkTime(tempTime % 60);
  
time = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
 

}


function startTime() {

stopwatchInterval = setInterval(function () {

if (!prevTime) {
prevTime = Date.now();
}

elapsedTime += Date.now() - prevTime;
prevTime = Date.now();
updateTime();
}, 50);


}


function resetTime() {

if (stopwatchInterval) {
clearInterval(stopwatchInterval);
stopwatchInterval = null;
}
prevTime = null;

tempTime = 0;
elapsedTime = 0;

hours = 0;
minutes = 0;
seconds = 0;
milliseconds = 0;

time = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
   
}




startTime();


var unloading = false;

window.addEventListener("beforeunload", function() {

unloading = true;

var xhr = new XMLHttpRequest();
var sess_duration = time;
var data = "sess_duration=" + sess_duration;
xhr.open("POST", window.location.href, true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send(data);

resetTime();

});




document.addEventListener("visibilitychange", function() {
  /* pause when switching away, but not when unloading */
var condition = true; // ?

if (!unloading && document.hidden && condition) {

var xhr = new XMLHttpRequest();
var sess_duration = time;
var data = "sess_duration=" + sess_duration;
xhr.open("POST", window.location.href, true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send(data);

resetTime();

}

else {

startTime();	

}

});


window.addEventListener("unload", function() {

});




}

zollo_analytics();