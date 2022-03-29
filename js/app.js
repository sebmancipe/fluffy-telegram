const MEETING_DATE = new Date('April 24, 2022 08:00:00');
const format = (t) => {
    return t < 10 ? '0' + t : t;
};

const counter = document.querySelector('.countdown-timer');

const render = (time) => {
    counter.innerHTML = `
        <div class="countdown">
            <div class="timer">
                <h2 class="days">${format(time.days)}</h2>
                <small>Días</small>
            </div>
            <div class="timer">
                <h2 class="hours">${format(time.hours)}</h2>
                <small>Horas</small>
            </div>
            <div class="timer">
                <h2 class="minutes">${format(time.minutes)}</h2>
                <small>Minutos</small>
            </div>
            <div class="timer">
                <h2 class="seconds">${format(time.seconds)}</h2>
                <small>Segundos</small>
            </div>
        </div>
        `;
};

const complete = () => {
    setTimeout(() => {
        countdownTimer.setExpiredDate(MEETING_DATE);
    }, 1000 * 60 * 60 * 24);
};

new CountDown(MEETING_DATE, render, complete);
