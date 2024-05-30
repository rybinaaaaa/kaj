import DBfasade from '../utils/DBfasade';

export default class ScrollHandler {
  currentPage = 0;
  LIMIT_PER_PAGE = 8;

  constructor(mainPageRenderer) {
    this.mainPageRenderer = mainPageRenderer;
    this.fetchLimit()
  }

  async fetchLimit() {
    this.LIMIT = await DBfasade.getArtsLimit();
    this.disableLoadMoreIfNecessary();
  }

  handleScroll() {
    this.currentPage++;
    this.loadMoreItems();
  }

  loadMoreItems() {
    this.disableLoadMoreIfNecessary();
    this.mainPageRenderer.renderNewItems(
      this.currentPage,
      this.LIMIT_PER_PAGE
    );
    setTimeout(() => {
      document.querySelector('#load_more').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  }

  disableLoadMoreIfNecessary() {
    if ((this.currentPage + 1) * this.LIMIT_PER_PAGE >= this.LIMIT) {
      document.querySelector('#load_more').disabled = true;
    }
  }

  smoothScrollTo(duration) {
    const initialY = window.scrollY;
    const targetY = initialY + document.documentElement.clientHeight;
    const diff = targetY - initialY;
    const start = performance.now();

    function scroll(timestamp) {
      const time = timestamp - start;
      let percent = Math.min(time / duration, 1);

      percent =
        percent < 0.5
          ? 2 * percent * percent
          : -1 + (4 - 2 * percent) * percent;

      window.scrollTo(0, initialY + diff * percent);

      if (time < duration && targetY > window.scrollY) {
        requestAnimationFrame(scroll);
      }
    }

    requestAnimationFrame(scroll);
  }
}
