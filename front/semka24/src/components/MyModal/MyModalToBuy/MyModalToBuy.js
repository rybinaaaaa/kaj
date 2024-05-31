import modalTemplate from './template';

/**
 * Web component representing a modal to buy an item.
 * Allows users to purchase items.
 */
export default class MyModalToBuy extends HTMLElement {
  /**
   * Constructs the MyModalToBuy element, attaching a shadow DOM and setting up content.
   */
  constructor() {
    super();
    /**
     * The content of the modal template.
     * @type {DocumentFragment}
     */
    this.content = modalTemplate.content.cloneNode(true);
    this.attachShadow({ mode: 'open' });
  }

  /**
   * Called when the element is added to the document.
   * Sets the item ID in the modal and appends the modal content to the shadow DOM.
   */
  connectedCallback() {
    this.content.querySelector('#id').value = this.getAttribute('item-id');
    this.shadowRoot.appendChild(this.content);
  }

  /**
   * Specifies the attributes to observe for changes.
   * @returns {string[]} The list of observed attributes.
   */
  static get observedAttributes() {
    return ['active'];
  }

  /**
   * Called when an observed attribute changes.
   * Updates the modal's visibility based on the 'active' attribute.
   * @param {string} name - The name of the attribute.
   * @param {string} oldValue - The old value of the attribute.
   * @param {string} newValue - The new value of the attribute.
   */
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === null) return;
    if (name === 'active') {
      if (newValue === 'true') {
        this.shadowRoot.querySelector('.modal').classList.add('active');
      } else {
        this.shadowRoot.querySelector('.modal').classList.remove('active');
      }
    }
  }
}
