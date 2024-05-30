import MainPage from './pages/MainPage';
import ItemPage from './pages/ItemPage';
import AboutUsPage from './pages/AboutUsPage';
import ErrorPage from './pages/ErrorPage';

export default class PageRenderer {
  static mainPageRenderer = new MainPage();
  static itemPageRenderer = new ItemPage();
  static aboutUsPageRenderer = new AboutUsPage();
  static errorPageRenderer = new ErrorPage();

  constructor() {}

  static pages = [
    {
      regex: /^\/semka24\/$/,
      render: this.mainPageRenderer.render.bind(this.mainPageRenderer),
    },
    {
      regex: /^\/semka24\/item\/\d+$/,
      render: this.itemPageRenderer.render.bind(this.itemPageRenderer),
    },
    {
      regex: /^\/semka24\/aboutUs/,
      render: this.aboutUsPageRenderer.render.bind(this.aboutUsPageRenderer),
    },
  ];

  static renderPage(search) {
    for (let p of this.pages) {
      if (p.regex.test(search)) {
        p.render(search);
        return;
      }
    }
    this.errorPageRenderer.render();
  }

  static handleEventOnLinks(e, a) {
    e.preventDefault();
    const search = a.href;
    console.log(window.location.href);
    history.pushState({}, '', search);
    this.renderPage(window.location.pathname);
  }

  static handleLinks() {
    document.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', (e) => this.handleEventOnLinks(e, a));
    });
  }
}
