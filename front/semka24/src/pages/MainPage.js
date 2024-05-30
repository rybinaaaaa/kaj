import ScrollHandler from '../handlers/ScrollHandler';
import DBfasade from '../utils/DBfasade';
import PageRenderer from '../PageRenderer';

export default class MainPage {
  constructor() {
    this.storedItems = [];
    this.scrollHandler = null;
  }

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

    this.scrollHandler = new ScrollHandler(this);

    loadMore.addEventListener('click', () => {
      this.scrollHandler.handleScroll();
    });
    if (this.storedItems.length) {
      this.renderStoredItems();
    } else {
      this.renderNewItems();
    }
    PageRenderer.handleLinks();
  }

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

  renderLoadingItems() {
    const container = document.querySelector('#item_container');

    for (let i = 0; i < 8; i++) {
      const loadingItemCard = document.createElement('my-item-card');
      loadingItemCard.setAttribute('loading', 'true');
      container.appendChild(loadingItemCard);
    }
  }

  async renderNewItems(page = 0, limit = 8) {
    this.renderLoadingItems();
    const items = await DBfasade.getArts(page, limit);

    this.storedItems = [...this.storedItems, ...items];

    this.renderStoredItems();
  }

  renderItem(item) {
    const container = document.querySelector('#item_container');

    const itemCard = document.createElement('my-item-card');
    itemCard.classList.add('item');

    container.appendChild(itemCard);
    itemCard.setItem(item);
  }
}
