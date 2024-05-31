import MainPage from './pages/MainPage';
import ItemPage from './pages/ItemPage';
import AboutUsPage from './pages/AboutUsPage';
import ErrorPage from './pages/ErrorPage';

/**
 * Class for rendering different pages based on the URL.
 */
export default class PageRenderer {
  /**
   * Renders the main page.
   * @type {MainPage}
   */
  static mainPageRenderer = new MainPage();

  /**
   * Renders the item page.
   * @type {ItemPage}
   */
  static itemPageRenderer = new ItemPage();

  /**
   * Renders the about us page.
   * @type {AboutUsPage}
   */
  static aboutUsPageRenderer = new AboutUsPage();

  /**
   * Renders the error page.
   * @type {ErrorPage}
   */
  static errorPageRenderer = new ErrorPage();

  /**
   * Array of page objects containing regex and corresponding render functions.
   * @type {Array<{ regex: RegExp, render: Function }>}
   */
  static pages = [
    {
      regex: /^\/semka24\/$/,
      render: this.mainPageRenderer.render.bind(this.mainPageRenderer)
    },
    {
      regex: /^\/semka24\/item\/\d+$/,
      render: this.itemPageRenderer.render.bind(this.itemPageRenderer)
    },
    {
      regex: /^\/semka24\/aboutUs/,
      render: this.aboutUsPageRenderer.render.bind(this.aboutUsPageRenderer)
    }
  ];

  /**
   * Renders the page based on the URL.
   * @param {string} search - The URL to render.
   */
  static renderPage(search) {
    for (let p of this.pages) {
      if (p.regex.test(search)) {
        p.render(search);
        return;
      }
    }
    this.errorPageRenderer.render();
  }

  /**
   * Event handler for links.
   * @param {Event} e - The click event.
   */
  static handleEventOnLinks(e) {
    const a = e.currentTarget;
    e.preventDefault();
    const search = a.href;
    history.pushState({}, '', search);
    PageRenderer.renderPage(window.location.pathname);
  }

  /**
   * Handles all links on the page.
   */
  static handleLinks() {
    document.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', PageRenderer.handleEventOnLinks);
    });
  }
}
