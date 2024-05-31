import AudioHandler from '../../handlers/AudioHandler';
import audioTemplate from './template';

/**
 * Web component for audio playback with play/pause controls.
 */
export default class MyAudio extends HTMLElement {
  /**
   * Constructs the MyAudio element, attaching a shadow DOM and initializing the audio handler.
   */
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    /**
     * AudioHandler instance to control the audio playback.
     * @type {AudioHandler}
     */
    this.audioHandler = new AudioHandler(this.getAttribute('mp3Src'));
  }

  /**
   * Called when the element is added to the document.
   * Sets up the audio controls and event listeners.
   */
  connectedCallback() {
    const content = audioTemplate.content.cloneNode(true);

    const soundOnEl = content.querySelector('#sound_on');
    const soundOffEl = content.querySelector('#sound_off');

    soundOnEl.addEventListener('click', (e) => {
      soundOnEl.classList.remove('active');
      soundOffEl.classList.add('active');
      this.audioHandler.pause();
    });

    soundOffEl.addEventListener('click', (e) => {
      soundOffEl.classList.remove('active');
      soundOnEl.classList.add('active');
      this.audioHandler.play();
    });

    this.shadowRoot.appendChild(content);
  }

  /**
   * Called when the element is removed from the document.
   * Pauses the audio playback.
   */
  disconnectedCallback() {
    this.audioHandler.pause();
  }
}
