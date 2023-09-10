class Button {
  constructor(urlImageButton, urlImageBackground = '', onClickFunction) {
    this.htmlElement = document.createElement('img');
    this.htmlElement.className = 'start-button';
    this.htmlElement.src = urlImageButton;

    this.htmlElement.onclick = () => onClickFunction();

    containerGameEl.style.background = `url(${urlImageBackground})`;
    containerGameEl.appendChild(this.htmlElement);
  }
}