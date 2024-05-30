import '../styles/style.scss';
import PageRenderer from './PageRenderer';
import MyAudio from './components/MyAudio/MyAudio';
import MyModal from './components/MyModal/MyModal';
import MyModalAlert from './components/MyModal/MyModalAlert/MyModalAlert';
import MyModalToBuy from './components/MyModal/MyModalToBuy/MyModalToBuy';
import MyHeader from './components/MyHeader/MyHeader';
import MyNavigation from './components/MyNavigation/MyNavigation';
import MyItemCard from './components/MyItemCard/MyItemCard';
import MyConnectionAlert from './components/MyConnectionAlert/MyConnectionAlert';

window.customElements.define('my-audio', MyAudio);
window.customElements.define('my-modal-alert', MyModalAlert);
window.customElements.define('my-modal-buy', MyModalToBuy);
window.customElements.define('my-modal', MyModal);
window.customElements.define('my-header', MyHeader);
window.customElements.define('my-navigation', MyNavigation);
window.customElements.define('my-item-card', MyItemCard);
window.customElements.define('my-connection-alert', MyConnectionAlert);

window.addEventListener('load', (e) => {
  console.log("я должен работать один раз");
  handleEvent(e);
});

window.addEventListener('popstate', (e) => {
  const search = window.location.pathname;
  console.log("я должен работать не один раз");
  PageRenderer.renderPage(search);
})

function handleEvent(e) {
  e.preventDefault();
  const search = window.location.pathname;
  history.pushState({}, '', window.location.href);
  PageRenderer.renderPage(search);
}
