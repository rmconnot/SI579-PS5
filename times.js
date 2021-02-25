// var moment = require("moment-timezone");

var jun = moment("2014-06-01T12:00:00Z");

console.log(jun.tz("America/Los_Angeles").format("ha z"));

var submissionButton = document.getElementById("submission-button");
var timeInput = document.getElementById("time-input");
var dateInput = document.getElementById("date-input");
var losAngeles = document.getElementById("los-angeles");
var newYork = document.getElementById("new-york");
var london = document.getElementById("london");
var istanbul = document.getElementById("istanbul");
var kathmandu = document.getElementById("kathmandu");
var tokyo = document.getElementById("tokyo");

submissionButton.addEventListener("click", checkTime);

function checkTime() {
	losAngeles.innerHTML = moment(`${dateInput.value} ${timeInput.value}`)
		.tz("America/Los_Angeles")
		.format("h:mma MMMM Do YYYY");

	newYork.innerHTML = moment(`${dateInput.value} ${timeInput.value}`)
		.tz("America/New_York")
		.format("h:mma MMMM Do YYYY");

	london.innerHTML = moment(`${dateInput.value} ${timeInput.value}`)
		.tz("Europe/London")
		.format("h:mma MMMM Do YYYY");

	istanbul.innerHTML = moment(`${dateInput.value} ${timeInput.value}`)
		.tz("Europe/Istanbul")
		.format("h:mma MMMM Do YYYY");

	kathmandu.innerHTML = moment(`${dateInput.value} ${timeInput.value}`)
		.tz("Asia/Kathmandu")
		.format("h:mma MMMM Do YYYY");

	tokyo.innerHTML = moment(`${dateInput.value} ${timeInput.value}`)
		.tz("Asia/Tokyo")
		.format("h:mma  MMMM Do YYYY");
}
