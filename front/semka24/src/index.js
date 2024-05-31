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

/**
 * Define custom elements.
 */
window.customElements.define('my-audio', MyAudio);
window.customElements.define('my-modal-alert', MyModalAlert);
window.customElements.define('my-modal-buy', MyModalToBuy);
window.customElements.define('my-modal', MyModal);
window.customElements.define('my-header', MyHeader);
window.customElements.define('my-navigation', MyNavigation);
window.customElements.define('my-item-card', MyItemCard);
window.customElements.define('my-connection-alert', MyConnectionAlert);

/**
 * Event listener for the 'load' event.
 * @param {Event} e - The load event.
 */
window.addEventListener('load', handleEvent);

/**
 * Event listener for the 'popstate' event.
 * @param {PopStateEvent} e - The popstate event.
 */
window.addEventListener('popstate', handleEvent);

/**
 * Handle various events and render the appropriate page.
 * @param {Event} e - The event to handle.
 */
function handleEvent(e) {
  // e.preventDefault();
  const search = window.location.pathname;
  history.pushState({}, '', window.location.href);
  PageRenderer.renderPage(search);
}
