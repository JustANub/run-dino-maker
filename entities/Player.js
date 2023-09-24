class Player extends GameObject {
  constructor(frameList, runVelocity, jumpHeight, jumpVelocity, keyJump, initialPosition) {
    super('player', frameList, runVelocity);

    window.addEventListener('keydown', (event) => {
      if (event.code === keyJump) this.jump();
    });

    this.jumpHeight = jumpHeight;
    this.jumpVelocity = 100 / jumpVelocity;
    this.isJumping = false;
    this.playerBottomBaseValue = Number(globalThis.ground.getStyles('height'));
    this.setStyles('bottom', this.playerBottomBaseValue + 'px');
    this.setStyles('left', initialPosition + 'px');
  }

  jump () {
    if (!this.isJumping) {
      this.isJumping = true;

      const movePlayerBottom = (value) => this.setStyles('bottom', `${value}px`);
      let playerBottomValue = this.playerBottomBaseValue;
      let isGoingUp = true;
  
      this.stop();
      
      const jumpAnimation = setInterval(() => {
        movePlayerBottom(playerBottomValue);
        playerBottomValue += isGoingUp ? 1 : -1;
        
        if (playerBottomValue >= this.jumpHeight + this.playerBottomBaseValue) isGoingUp = false;
        if (playerBottomValue <= this.playerBottomBaseValue) {
          clearInterval(jumpAnimation);
          this.play();
          this.isJumping = false;
        }
      }, this.jumpVelocity);
    }
  }

  isColiding (gameObject) {
    const gameObjectLeft = Number(gameObject.getStyles('left'));
    const gameObjectWidth = Number(gameObject.getStyles('width'));
    const gameObjectHeight = Number(gameObject.getStyles('height'));
    const gameObjectBottom = Number(gameObject.getStyles('bottom'));

    const playerLeft = Number(this.getStyles('left'));
    const playerBottom = Number(this.getStyles('bottom'));
    const playerWidth = Number(this.getStyles('width'));
    const playerHeight = Number(this.getStyles('height'));

    const horizontalValidation = () => {
      const horizontalValidation1 = !(playerLeft + playerWidth < gameObjectLeft);
      const horizontalValidation2 = playerLeft + playerWidth >= gameObjectLeft;
      const horizontalValidation3 = playerLeft <= gameObjectLeft + gameObjectWidth;
      const horizontalValidation4 = !(playerLeft > gameObjectLeft + gameObjectWidth);
      const horizontalValidationResult = 
        horizontalValidation1 && horizontalValidation4 && (horizontalValidation2 || horizontalValidation3);
      return horizontalValidationResult;
    };

    const verticalValidation = () => {
      const verticalValidationResult = gameObjectBottom + gameObjectHeight >= playerBottom;
      return verticalValidationResult;
    };

    return horizontalValidation() && verticalValidation();
  }
}