if (document.documentMode || /Edge/.test(navigator.userAgent)) {
//alert('Hello Microsoft User!');

var ie_alert = document.getElementById("edge-alert");

var att = document.createAttribute("class");

att.value = "edge-version";

ie_alert.setAttributeNode(att);

ie_alert.innerHTML = "\
<div class='ie-wrap'>\
<div class='ie-content'>\
<p>Prosím,<br> Použíte lepší prohlížeč, <br> který podporuje nejmodernější funkce</p><br><br>\
<div class='ie-icon'>\
<a href='https://www.google.com/chrome/' target='_blank'>\
<span class='fa fa-chrome'></span>\
</a>\
<a href='https://www.opera.com/download' target='_blank'>\
<span class='fa fa-opera'></span>\
</a>\
<a href='https://www.mozilla.org/en-US/firefox/new/' target='_blank'>\
<span class='fa fa-firefox'></span>\
</a>\
</div>\
</div>\
</div>\
";

}