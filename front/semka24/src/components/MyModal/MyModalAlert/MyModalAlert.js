import modalTemplate from './template';

export default class MyModalAlert extends HTMLElement {
  constructor() {
    super();
    this.content = modalTemplate.content.cloneNode(true);
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(this.content);
  }

  disconnectedCallback() {
  }

  static get observedAttributes() {
    return ['active'];
  }

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
