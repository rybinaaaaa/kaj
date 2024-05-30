import cardTemplate from './template';
import PageRenderer from '../../PageRenderer';

export default class MyItemCard extends HTMLElement {
  constructor() {
    super();
    this.content = cardTemplate.content.cloneNode(true);
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(this.content);
    setTimeout(() => {
      this.shadowRoot.querySelector('.item').classList.add('show');
    }, 100);
  }

  fetchCard() {
    this.shadowRoot.querySelector('.item').classList.remove('loading');

    const itemName = this.getAttribute('name');
    const itemImgSrc = this.getAttribute('imgSrc');
    const itemAuthor = this.getAttribute('author');
    const itemId = this.getAttribute('id');

    this.shadowRoot.querySelector('.item__img img').src = itemImgSrc;
    this.shadowRoot.querySelector('.title-text').textContent = itemName;
    this.shadowRoot.querySelector('.subtitle-text').textContent = itemAuthor;
    this.href = `/semka24/item/${itemId}`;
    this.addEventListener('click', (e) => {
      e.preventDefault();
      const search = this.href;
      console.log(window.location.href);
      history.pushState({}, '', search);
      PageRenderer.renderPage(window.location.pathname);
    })
  }

  static get observedAttributes() {
    return ['loading'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (!(name === 'loading' && newValue === 'true')) {
      this.fetchCard();
    }
  }

  setItem(item) {
    this.setAttribute('id', item.id);
    this.setAttribute('name', item.name);
    this.setAttribute('imgSrc', item.imgSrc);
    this.setAttribute('author', item.author);
    this.setAttribute('loading', 'false');
  }
}
