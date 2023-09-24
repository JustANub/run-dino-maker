class GameObject {
  constructor(objectClass, frameList, runVelocity) {
    this.htmlElement = document.createElement('img');
    this.htmlElement.classList.add(objectClass);

    this.frameList = frameList;
    this.animationIntervalReference;
    this.velocity = 100 / runVelocity;
    this.frameIndex = 0;

    containerGameEl.appendChild(this.htmlElement);
    this.play();
  }
  
  getStyles (styleName) {
    return window.getComputedStyle(this.htmlElement)[styleName].replaceAll('px', '');
  }

  setStyles (styleName, value) {
    this.htmlElement.style[styleName] = value;
  }

  play () {
    this.animationIntervalReference = setInterval(() => {
      this.htmlElement.src = this.frameList[this.frameIndex];
      this.frameIndex = this.frameIndex >= this.frameList.length - 1 ? 0 : this.frameIndex + 1;
    }, this.velocity);
  }

  stop () {
    clearInterval(this.animationIntervalReference);
  }
}