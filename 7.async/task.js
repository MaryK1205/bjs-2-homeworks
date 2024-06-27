class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        else if (this.alarmCollection.find(el => el.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }
        {
            this.alarmCollection.push({ time, callback, canCall: true });
        }

    }
    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(el => el.time !== time)
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString().slice(0, -3);
    }

    start() {
        if (this.intervalId) {
            return
        }
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(el => {
                if (el.time === this.getCurrentFormattedTime() && el.canCall) {
                    el.canCall = false;
                    el.callback();
                }
            })
        }, 1000);
    }
    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    resetAllCalls() {
        this.alarmCollection.forEach(el => el.canCall = true);
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }

}