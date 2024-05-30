import headerTemplate from './template';
import PageRenderer from '../../PageRenderer';

export default class MyHeader extends HTMLElement {
  constructor() {
    super();
    this.content = headerTemplate.content.cloneNode(true);
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(this.content);
    this.shadowRoot.querySelector('#go-back').addEventListener('click', e => {
      e.preventDefault();
      window.history.back();
    })
    this.shadowRoot.querySelector('.about_us').addEventListener('click', e => {
      PageRenderer.handleEventOnLinks(e, e.target)
    })

  }
}
