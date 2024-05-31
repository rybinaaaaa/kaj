import modalTemplate from './template';

/**
 * Web component representing a modal alert.
 * Displays a message to the user.
 */
export default class MyModalAlert extends HTMLElement {
  /**
   * Constructs the MyModalAlert element, attaching a shadow DOM and setting up content.
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
   * Appends the modal content to the shadow DOM.
   */
  connectedCallback() {
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
