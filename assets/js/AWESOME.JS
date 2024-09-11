var unloading = false;

window.addEventListener("beforeunload", function() {

unloading = true;

var xhr = new XMLHttpRequest();
var sess_duration = 'beforeunload';
var data = "sess_duration=" + sess_duration;
xhr.open("POST", "https://zollo.cz/track.php", true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send(data);

});


document.addEventListener("visibilitychange", function() {
  /* pause when switching away, but not when unloading */
var condition = true; // ?

if (!unloading && document.hidden && condition) {

var xhr = new XMLHttpRequest();
var sess_duration = 'visibility';
var data = "sess_duration=" + sess_duration;
xhr.open("POST", "https://zollo.cz/track.php", true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send(data);


}

else {

}

});


window.addEventListener("unload", function() {

});