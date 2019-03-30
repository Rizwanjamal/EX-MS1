function getTime() {
var now = new Date();
var hour = now.getHours();
var min = now.getMinutes();
var timePeriod;
if (hour < 12) {
	hour = hour
	timePeriod = 'AM'
} else {
	hour = hour-12
	timePeriod = 'PM' 
}
console.log(hour+" : "+ min+ " "+ timePeriod);
}