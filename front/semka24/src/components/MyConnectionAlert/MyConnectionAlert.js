import alertTemplate from './template';

export default class MyConnectionAlert extends HTMLElement {
  constructor() {
    super();
    this.content = alertTemplate.content.cloneNode(true);
    this.attachShadow({ mode: 'open' });
    this.handleOffline = this.handleOffline.bind(this);
    this.handleOnline = this.handleOnline.bind(this);
  }

  connectedCallback() {
    this.shadowRoot.appendChild(this.content);
    window.addEventListener('offline', this.handleOffline);
    window.addEventListener('online', this.handleOnline);
  }

  disconnectedCallback() {
    window.removeEventListener('offline', this.handleOffline);
    window.removeEventListener('online', this.handleOnline);
  }

  handleOffline() {
    this.classList.add('active');
  }

  handleOnline() {
    this.classList.remove('active');
  }
}
