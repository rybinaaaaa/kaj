import AudioHandler from '../../handlers/AudioHandler';
import audioTemplate from './template';

export default class MyAudio extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.audioHandler = new AudioHandler(this.getAttribute('mp3Src'));
    }

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

  disconnectedCallback() {
    this.audioHandler.pause();
  }
}
