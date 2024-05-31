import navTemplate from './template';

/**
 * Web component representing navigation links.
 * Allows users to navigate to the next and previous items.
 */
export default class MyNavigation extends HTMLElement {
  /**
   * Constructs the MyNavigation element, attaching a shadow DOM and setting up content.
   */
  constructor() {
    super();
    /**
     * The content of the navigation template.
     * @type {DocumentFragment}
     */
    this.content = navTemplate.content.cloneNode(true);
    this.attachShadow({ mode: 'open' });
  }

  /**
   * Called when the element is added to the document.
   * Sets up the navigation links based on the 'next' and 'prev' attributes.
   */
  connectedCallback() {
    const next = this.getAttribute('next');
    const prev = this.getAttribute('prev');

    if (+next) {
      this.content.querySelector('#next').href = `/semka24/item/${next}`;
    } else {
      this.content.querySelector('#next').classList.add('hidden');
    }

    if (+prev) {
      this.content.querySelector('#prev').href = `/semka24/item/${prev}`;
    } else {
      this.content.querySelector('#prev').classList.add('hidden');
    }

    this.shadowRoot.appendChild(this.content);
  }
}
