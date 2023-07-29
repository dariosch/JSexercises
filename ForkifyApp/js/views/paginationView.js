import View from "./View.js";
import icons from "url:../../img/icons.svg";

class PaginationView extends View {
  _parentElement = document.querySelector(".pagination");

  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--inline");
      if (!btn) return;
      const goToPage = +btn.dataset.goTo;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // escenario de pagina 1 y hay otras paginas
    if (curPage === 1 && numPages > 1) {
      return `
            ${this._generateMarkupButtonNext(curPage + 1)}
      `;
    }
    // escenario de ultima pagina
    if (curPage === numPages) {
      return `
            ${this._generateMarkupButtonPrev(curPage - 1)}
      `;
    }
    // other page
    if (curPage < numPages) {
      return `
        ${this._generateMarkupButtonPrev(curPage - 1)}
        ${this._generateMarkupButtonNext(curPage + 1)}
  `;
    }
    //escenario de pagina 1 y no hay mas pags
    return "";
  }

  _generateMarkupButtonPrev(pageN) {
    return `
        <button data-go-to="${pageN}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${pageN}</span>
        </button>
    `;
  }

  _generateMarkupButtonNext(pageN) {
    return `
            <button data-go-to="${pageN}" class="btn--inline pagination__btn--next">
                <span>Page ${pageN}</span>
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
                </svg>
            </button>
      `;
  }
}

export default new PaginationView();
