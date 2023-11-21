let tDisplay = document.getElementById('time_display');

function changeTime() {
    let currentDate = new Date();
    let currentHour = currentDate.getHours();
    let currentMinutes = currentDate.getMinutes();
    let currentSeconds = currentDate.getSeconds();

    // Convert to 12-hour format
    let amPm = currentHour >= 12 ? 'PM' : 'AM';
    currentHour = currentHour % 12 || 12;

    // Ensure hours, minutes, and seconds are formatted with leading zeros if needed
    currentHour = currentHour < 10 ? '0' + currentHour : currentHour;
    currentMinutes = currentMinutes < 10 ? '0' + currentMinutes : currentMinutes;
    currentSeconds = currentSeconds < 10 ? '0' + currentSeconds : currentSeconds;

    tDisplay.innerText = currentHour + ':' + currentMinutes + ':' + currentSeconds + ' ' + amPm;
}

changeTime(); // Call the function initially to set the initial time

// Use setInterval with the correct function reference and interval
setInterval(changeTime, 1000); // 1000 milliseconds = 1 second
