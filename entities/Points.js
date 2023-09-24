class Points {
    constructor(pointsPerTime, timerVelocity) {
        this.htmlElement = document.createElement('span');
        this.htmlElement.classList.add('points');
        containerGameEl.appendChild(this.htmlElement);
        
        this.value = 0;
        this.pointsPerTime = pointsPerTime;
        this.pointsIntervalReference;
        this.timerVelocity = timerVelocity;
        this.play();
    }

    play() {
        this.pointsIntervalReference = setInterval(() => {
            this.value += this.pointsPerTime;
            this.htmlElement.innerHTML = this.value;
        }, this.timerVelocity)
    }

    stop() {
        clearInterval(this.pointsIntervalReference);
    }
}