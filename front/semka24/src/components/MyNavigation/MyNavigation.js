import navTemplate from './template';

export default class MyNavigation extends HTMLElement {
  constructor() {
    super();
    this.content = navTemplate.content.cloneNode(true);
    this.attachShadow({ mode: 'open' });
  }

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
