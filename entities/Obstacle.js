class Obstacle extends GameObject {
  constructor(objectClass, frameList, frameVelocity, runVelocity, respawnTime, firstRespawnTime) {
    super(objectClass, frameList, frameVelocity);
    this.moveIntervalReference;
    this.runVelocity = runVelocity;
    this.respawnTime = respawnTime;
    this.setStyles('bottom', globalThis.ground.getStyles('height') + 'px');
    this.setStyles('right', -this.getStyles('width') + 'px');
    setTimeout(() => this.move(), firstRespawnTime);
  }
  
  move () {
    const gameContainerWidth = window.getComputedStyle(containerGameEl).width;
    this.setStyles('left', gameContainerWidth);

    this.moveIntervalReference = setInterval(() => {
      this.setStyles('left', this.getStyles('left') - 1 + 'px');
      this.isColidingWithPlayer();
      if (this.getStyles('left') <= -this.getStyles('width')) {
        setTimeout(() => this.move(), this.respawnTime);
        this.stop();
      }
    }, this.runVelocity);
  }

  stop () {
    clearInterval(this.moveIntervalReference);
  }
  
  isColidingWithPlayer() {
    let playerColidingNumber;
    
    const isColiding = globalThis.players.some((player, playerNum) => {
      if (player.isColiding(this)) {
        playerColidingNumber = playerNum + 1;
        console.log("Colidinho com player " + playerColidingNumber);
        return true;
      }
    });

    return isColiding && playerColidingNumber;
  }
}
