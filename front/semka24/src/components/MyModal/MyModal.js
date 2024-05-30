import modalTemplate from './template';
import ModalHandler from '../../handlers/ModalHandler2';

export default class MyModal extends HTMLElement {
  constructor() {
    super();
    this.content = modalTemplate.content.cloneNode(true);
    this.attachShadow({ mode: 'open' });

    this.modalToBuy = this.content.querySelector('my-modal-buy');
    this.modalAlert = this.content.querySelector('my-modal-alert');
    this.modalHandler = new ModalHandler(this);
  }

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

  static get observedAttributes() {
    return ['active'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'active') {
      this.modalToBuy.setAttribute('active', newValue);
    }
  }
}
