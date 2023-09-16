class Background {
  constructor(urlImage) {
    containerGameEl.style.background = `url(${urlImage})`;
  }

  stop() {
    containerGameEl.style.background = 'none';
  }
}