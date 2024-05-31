import ScrollHandler from '../handlers/ScrollHandler';
import DBfasade from '../utils/DBfasade';
import PageRenderer from '../PageRenderer';

/**
 * Class representing the main page.
 */
export default class MainPage {
  constructor() {
    /**
     * Stored items to be rendered on the page.
     * @type {Array}
     */
    this.storedItems = [];

    /**
     * Instance of ScrollHandler to handle scroll events.
     * @type {ScrollHandler}
     */
    this.scrollHandler = new ScrollHandler(this);
  }

  /**
   * Renders the main page.
   */
  render() {
    const root = document.querySelector('#root');

    root.innerHTML = `<my-header></my-header>
                      <div class="catalog">
                        <div class="container" id="item_container">
                        </div>
                      </div>
                      <button class="pagination" id="load_more">Load more</button>
                   <my-connection-alert></my-connection-alert>
    `;
    const loadMore = document.querySelector('#load_more');

    this.scrollHandler.disableLoadMoreIfNecessary().then(() => {
      loadMore.addEventListener('click', () => {
        this.scrollHandler.handleScroll();
      });
    });

    if (this.storedItems.length) {
      this.renderStoredItems();
    } else {
      this.renderNewItems();
    }
    PageRenderer.handleLinks();
  }

  /**
   * Renders stored items on the page.
   */
  async renderStoredItems() {
    const root = document.querySelector('#root');
    const container = root.querySelector('#item_container');

    if (!this.storedItems.length) {
      this.storedItems = await DBfasade.getArts();
    }
    container.innerHTML = '';
    this.storedItems.forEach((item) => {
      this.renderItem(item);
    });
  }

  /**
   * Renders loading placeholders for items.
   */
  renderLoadingItems() {
    const container = document.querySelector('#item_container');

    for (let i = 0; i < 8; i++) {
      const loadingItemCard = document.createElement('my-item-card');
      loadingItemCard.setAttribute('loading', 'true');
      container.appendChild(loadingItemCard);
    }
  }

  /**
   * Renders new items on the page.
   * @param {number} [page=0] - The page number to fetch items from.
   * @param {number} [limit=8] - The number of items to fetch.
   */
  async renderNewItems(page = 0, limit = 8) {
    this.renderLoadingItems();
    const items = await DBfasade.getArts(page, limit);

    this.storedItems = [...this.storedItems, ...items];

    this.renderStoredItems();
  }

  /**
   * Renders a single item on the page.
   * @param {Object} item - The item to render.
   */
  renderItem(item) {
    const container = document.querySelector('#item_container');

    const itemCard = document.createElement('my-item-card');
    itemCard.classList.add('item');

    container.appendChild(itemCard);
    itemCard.setItem(item);
  }
}
