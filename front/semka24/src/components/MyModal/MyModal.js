import modalTemplate from './template';
import ModalHandler from '../../handlers/ModalHandler2';

/**
 * Web component representing a modal dialog.
 * Handles initialization and attribute changes for modal behavior.
 */
export default class MyModal extends HTMLElement {
  /**
   * Constructs the MyModal element, attaching a shadow DOM and initializing modal handler.
   */
  constructor() {
    super();
    /**
     * The content of the modal template.
     * @type {DocumentFragment}
     */
    this.content = modalTemplate.content.cloneNode(true);
    this.attachShadow({ mode: 'open' });

    /**
     * The modal for buying items.
     * @type {HTMLElement}
     */
    this.modalToBuy = this.content.querySelector('my-modal-buy');
    /**
     * The alert modal.
     * @type {HTMLElement}
     */
    this.modalAlert = this.content.querySelector('my-modal-alert');
    /**
     * The handler for modal interactions.
     * @type {ModalHandler}
     */
    this.modalHandler = new ModalHandler(this);
  }

  /**
   * Called when the element is added to the document.
   * Initializes the modal with the item ID and sets up event listeners.
   */
  connectedCallback() {
    this.modalToBuy.setAttribute('item-id', this.getAttribute('item-id'));

    this.addEventListener('click', (e) => {
      const modalContentBuy = this.shadowRoot
        .querySelector('my-modal-buy')
        .shadowRoot.querySelector('.modal__content');
      if (!e.composedPath().includes(modalContentBuy)) {
        this.setAttribute('active', 'false');
      }
    });

    this.shadowRoot.appendChild(this.content);
    this.modalHandler.init();
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
   * @param {string} name - The name of the attribute.
   * @param {string} oldValue - The old value of the attribute.
   * @param {string} newValue - The new value of the attribute.
   */
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'active') {
      this.modalToBuy.setAttribute('active', newValue);
    }
  }
}
