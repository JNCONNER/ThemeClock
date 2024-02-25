//want to grab the class of hour,minute, second, time, date, and toggle. ex grab the element of hour and with the class of hour.. etc grab the element of minute with the class of minute
const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

//want to create a couple of arrays. one for days and one for months

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//handle the dark mode by adding or removing the class of dark to the html element and change the text of the button from dark mode to light mode

//add an event listener listening for a click and pass in a function with our event object.. then create a variable with our html document.querySelector and select the html element.. then use an if statement to check and see if it has the class of dark.. then if it does take our classlistremove method to remove dark. then target element withg e.target innerHtml set it to dark mode
toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if(html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    } else{//below instead of remove we want to add the class of dark and change the text to "light mode"
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})

function setTime() {
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'
    //if hours is greater than 12 set to pm if less than set to am

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}
// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

//above we want to map the range of numbers.. want to map the hours which is 12 essentially o-11 want to map that from 0-360 because there is 360deg in a full circle which is our clock.. aka our circle so above in our rotate want to pass in a variable.. call scale


setTime()
setInterval(setTime, 1000)