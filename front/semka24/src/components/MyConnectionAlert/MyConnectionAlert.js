import alertTemplate from './template';

/**
 * Web component for displaying a connection alert.
 * Shows an alert when the device goes offline and hides it when back online.
 */
export default class MyConnectionAlert extends HTMLElement {
  /**
   * Constructs the MyConnectionAlert element, attaching a shadow DOM.
   * Initializes event handlers for online and offline events.
   */
  constructor() {
    super();
    /**
     * The content of the alert template.
     * @type {DocumentFragment}
     */
    this.content = alertTemplate.content.cloneNode(true);
    this.attachShadow({ mode: 'open' });

    /**
     * Binds the offline event handler to the current instance.
     * @type {Function}
     */
    this.handleOffline = this.handleOffline.bind(this);

    /**
     * Binds the online event handler to the current instance.
     * @type {Function}
     */
    this.handleOnline = this.handleOnline.bind(this);
  }

  /**
   * Called when the element is added to the document.
   * Appends the template content to the shadow root and adds event listeners for online and offline events.
   */
  connectedCallback() {
    this.shadowRoot.appendChild(this.content);
    window.addEventListener('offline', this.handleOffline);
    window.addEventListener('online', this.handleOnline);
  }

  /**
   * Called when the element is removed from the document.
   * Removes event listeners for online and offline events.
   */
  disconnectedCallback() {
    window.removeEventListener('offline', this.handleOffline);
    window.removeEventListener('online', this.handleOnline);
  }

  /**
   * Event handler for the offline event.
   * Adds the 'active' class to the component to show the alert.
   */
  handleOffline() {
    this.classList.add('active');
  }

  /**
   * Event handler for the online event.
   * Removes the 'active' class from the component to hide the alert.
   */
  handleOnline() {
    this.classList.remove('active');
  }
}
