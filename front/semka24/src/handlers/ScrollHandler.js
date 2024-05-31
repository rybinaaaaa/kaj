import DBfasade from '../utils/DBfasade';

/**
 * Class to handle scroll-based pagination and item loading.
 */
export default class ScrollHandler {
  /**
   * The current page number.
   * @type {number}
   */
  currentPage = 0;

  /**
   * The number of items to load per page.
   * @type {number}
   */
  LIMIT_PER_PAGE = 8;

  /**
   * The total limit of items available.
   * @type {number}
   */
  LIMIT = null;

  /**
   * Creates an instance of ScrollHandler.
   * @param {Object} mainPageRenderer - An object responsible for rendering new items on the main page.
   */
  constructor(mainPageRenderer) {
    this.mainPageRenderer = mainPageRenderer;
  }

  /**
   * Fetches the total limit of items and disables the load more button if necessary.
   */
  async fetchLimit() {
    this.LIMIT = await DBfasade.getArtsLimit();
  }

  /**
   * Handles the scroll event, incrementing the current page and loading more items.
   */
  handleScroll() {
    this.currentPage++;
    this.loadMoreItems();
  }

  /**
   * Loads more items by rendering them and then scrolling into view.
   */
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

  /**
   * Disables the load more button if there are no more items to load.
   */
  async disableLoadMoreIfNecessary() {
    await this.fetchLimit();
    if (this.LIMIT && (this.currentPage + 1) * this.LIMIT_PER_PAGE >= this.LIMIT) {
      document.querySelector('#load_more').disabled = true;
    }
  }

  /**
   * Smoothly scrolls the page down by one viewport height over the specified duration.
   * @param {number} duration - The duration of the scroll animation in milliseconds.
   */
  smoothScrollTo(duration) {
    const initialY = window.scrollY;
    const targetY = initialY + document.documentElement.clientHeight;
    const diff = targetY - initialY;
    const start = performance.now();

    function scroll(timestamp) {
      const time = timestamp - start;
      let percent = Math.min(time / duration, 1);

      percent = percent < 0.5
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
