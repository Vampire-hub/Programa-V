function MakeArrayday(size) {
this.length = size;
for(var i = 1; i <= size; i++) {
this[i] = "";
}
return this;
}
function MakeArraymonth(size) {
this.length = size;
for(var i = 1; i <= size; i++) {
this[i] = "";
}
return this;
}
function funClock() {
if (!document.layers && !document.all)
return;
var runTime = new Date();
var hours = runTime.getHours();
var minutes = runTime.getMinutes();
var seconds = runTime.getSeconds();
var dn = "AM";
if (hours >= 12) {
dn = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
if (minutes <= 9) {
minutes = "0" + minutes;
}
if (seconds <= 9) {
seconds = "0" + seconds;
}
movingtime = "<b>"+ hours + ":" + minutes + ":" + seconds + " " + dn + "</b>";
if (document.layers) {
document.layers.clock.document.write(movingtime);
document.layers.clock.document.close();
}
else if (document.all) {
clock.innerHTML = movingtime;
}
setTimeout("funClock()", 1000)
}
window.onload = funClock;

function DateStamp() {
var d = new Array(
"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"
);

var m = new Array(
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"
);

var today = new Date();
var day = today.getDate();
var year = today.getYear();
if (year < 2000) year += 1900; 
document.write(d[today.getDay()]+", "+m[today.getMonth()]+" "+day+", " + year);
//return d[today.getDay()]+", "+m[today.getMonth()]+" "+day+", " + year;
}