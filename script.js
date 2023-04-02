window.addEventListener("DOMContentLoaded", () => {
    const yearElt = document.querySelector("h1 span");
    const daysElt = document.querySelector("[data-js-count='days']");
    const hoursElt = document.querySelector("[data-js-count='hours']");
    const minsElt = document.querySelector("[data-js-count='mins']");
    const secondsElt = document.querySelector("[data-js-count='seconds']");

    const date = new Date();
    const nextYear = date.getFullYear() + 1;
    yearElt.innerHTML = nextYear;
    const newYear = `1 Jan ${nextYear}`;

    function countdown() {
        const newYearDate = new Date(newYear);
        const currentDate = new Date();

        const totalSeconds = (newYearDate - currentDate) / 1000;

        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const mins = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;

        daysElt.innerHTML = days;
        hoursElt.innerHTML = formatTime(hours);
        minsElt.innerHTML = formatTime(mins);
        secondsElt.innerHTML = formatTime(seconds);
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    countdown();

    setInterval(countdown, 1000);

});