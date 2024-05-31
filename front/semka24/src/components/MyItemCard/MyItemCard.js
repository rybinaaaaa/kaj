import cardTemplate from './template';
import PageRenderer from '../../PageRenderer';

/**
 * Web component representing an item card.
 * Handles rendering of item details and navigation on click.
 */
export default class MyItemCard extends HTMLElement {
  /**
   * Constructs the MyItemCard element, attaching a shadow DOM.
   * Clones the card template content.
   */
  constructor() {
    super();
    /**
     * The content of the card template.
     * @type {DocumentFragment}
     */
    this.content = cardTemplate.content.cloneNode(true);
    this.attachShadow({ mode: 'open' });
  }

  /**
   * Called when the element is added to the document.
   * Appends the template content to the shadow root and adds a show class to the item after a delay.
   */
  connectedCallback() {
    this.shadowRoot.appendChild(this.content);
    setTimeout(() => {
      this.shadowRoot.querySelector('.item').classList.add('show');
    }, 100);
  }

  /**
   * Fetches the item card data and updates the card's content.
   * Removes the loading class from the item.
   */
  fetchCard() {
    this.shadowRoot.querySelector('.item').classList.remove('loading');

    const itemName = this.getAttribute('name');
    const itemImgSrc = this.getAttribute('imgSrc');
    const itemAuthor = this.getAttribute('author');
    const itemId = this.getAttribute('id');

    this.shadowRoot.querySelector('.item__img img').src = itemImgSrc;
    this.shadowRoot.querySelector('.title-text').textContent = itemName;
    this.shadowRoot.querySelector('.subtitle-text').textContent = itemAuthor;

    this.href = `/semka24/item/${itemId}`;
    this.addEventListener('click', (e) => {
      e.preventDefault();
      const search = this.href;
      history.pushState({}, '', search);
      PageRenderer.renderPage(window.location.pathname);
    });
  }

  /**
   * Specifies the attributes to observe for changes.
   * @returns {string[]} The list of observed attributes.
   */
  static get observedAttributes() {
    return ['loading'];
  }

  /**
   * Called when an observed attribute changes.
   * @param {string} name - The name of the attribute.
   * @param {string} oldValue - The old value of the attribute.
   * @param {string} newValue - The new value of the attribute.
   */
  attributeChangedCallback(name, oldValue, newValue) {
    if (!(name === 'loading' && newValue === 'true')) {
      this.fetchCard();
    }
  }

  /**
   * Sets the item data and updates the corresponding attributes.
   * @param {Object} item - The item data.
   * @param {string} item.id - The ID of the item.
   * @param {string} item.name - The name of the item.
   * @param {string} item.imgSrc - The image source URL of the item.
   * @param {string} item.author - The author of the item.
   */
  setItem(item) {
    this.setAttribute('id', item.id);
    this.setAttribute('name', item.name);
    this.setAttribute('imgSrc', item.imgSrc);
    this.setAttribute('author', item.author);
    this.setAttribute('loading', 'false');
  }
}
