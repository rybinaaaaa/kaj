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

/**
 * Registers a service worker if supported by the browser.
 * Service workers enable features like push notifications and offline support.
 * @function registerServiceWorker
 * @memberof window
 * @inner
 * @param {string} scriptURL - The URL of the service worker script to register.
 * @returns {Promise<ServiceWorkerRegistration>} A promise that resolves with the service worker registration object if successful, otherwise rejects with an error.
 */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    /**
     * Event listener that triggers when the window has finished loading.
     * Attempts to register a service worker.
     * @event load
     * @memberof window
     * @inner
     * @param {Event} event - The 'load' event object.
     */
    navigator.serviceWorker.register('/semka24/src/utils/sw.js').then(function(registration) {
      /**
       * Callback function executed when the service worker registration is successful.
       * Logs a success message along with the registration object.
       * @callback registrationSuccessCallback
       * @param {ServiceWorkerRegistration} registration - The registered service worker's registration object.
       */
      console.log('Service Worker registered:', registration);
    }).catch(function(error) {
      /**
       * Callback function executed when there's an error during service worker registration.
       * Logs the error message.
       * @callback registrationErrorCallback
       * @param {Error} error - The error object representing the registration error.
       */
      console.log('Error registering Service Worker:', error);
    });
  });
}