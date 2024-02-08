
const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

//call the welcome div by get element
const divWelcome = document.getElementById('welcome');

//choose the message based off the time of day the user visits the site
if (isMorning) {
    divWelcome.textContent = "Good morning! Welcome to Zach's homepage.";
} else if (isAfternoon)  {
    divWelcome.textContent = "Good afternoon! Welcome to Zach's homepage.";
} else {
    divWelcome.textContent = "Good evening! Welcome to Zach's homepage.";
}



