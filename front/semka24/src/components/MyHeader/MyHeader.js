import headerTemplate from './template';
import PageRenderer from '../../PageRenderer';

/**
 * Web component for the header of the page.
 * Includes functionality for navigating back in history and handling "About Us" link clicks.
 */
export default class MyHeader extends HTMLElement {
  /**
   * Constructs the MyHeader element, attaching a shadow DOM.
   * Clones the header template content.
   */
  constructor() {
    super();
    /**
     * The content of the header template.
     * @type {DocumentFragment}
     */
    this.content = headerTemplate.content.cloneNode(true);
    this.attachShadow({ mode: 'open' });
  }

  /**
   * Called when the element is added to the document.
   * Appends the template content to the shadow root and adds event listeners for the "Go Back" and "About Us" links.
   */
  connectedCallback() {
    this.shadowRoot.appendChild(this.content);

    // /**
    //  * Event listener for the "Go Back" button.
    //  * Navigates back in the browser history.
    //  * @param {Event} e - The click event.
    //  */
    // this.shadowRoot.querySelector('#go-back').addEventListener('click', e => {
    //   e.preventDefault();
    //   window.history.back();
    // });

    /**
     * Event listener for the "About Us" link.
     * Handles the link click using PageRenderer.
     * @param {Event} e - The click event.
     */
    this.shadowRoot.querySelector('.about_us').addEventListener('click', PageRenderer.handleEventOnLinks);

    /**
     * Event listener for the "Home" link.
     * Handles the link click using PageRenderer.
     * @param {Event} e - The click event.
     */
    this.shadowRoot.querySelector('#go-back').addEventListener('click', PageRenderer.handleEventOnLinks);
  }
}
