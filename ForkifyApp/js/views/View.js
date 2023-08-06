import icons from "url:../../img/icons.svg";

export default class View {
  _data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderSpinner = function () {
    const markup = `
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
  `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  };

  _clear() {
    this._parentElement.innerHTML = "";
  }

  renderError(message = this._errorMessage) {
    const markup = `
      <div class="error">
          <div>
              <svg>
                  <use href="${icons}#icon-alert-triangle"></use>
              </svg>
          </div>
          <p>${message}</p>
      </div>
      `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  update(data) {
    //if (!data || (Array.isArray(data) && data.length === 0)) {
    //  return this.renderError();
    //}
    this._data = data;
    const newMarkup = this._generateMarkup();
    //lets use a method to convert a string into a DOM object
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll("*"));
    const curElements = Array.from(this._parentElement.querySelectorAll("*"));
    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      //if new element has same content and the first child (the one who may have the text, except it is null) means that its a text element and not anyone else, so we need to modify them
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ""
      ) {
        curEl.textContent = newEl.textContent;
      }
      //now we need to do the same but for html attributes
      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach((attr) => {
          curEl.setAttribute(attr.name, attr.value);
        });
      }
    });
  }
}
