/**
 * Class to handle audio playback.
 */
export default class AudioHandler {
  /**
   * Creates an instance of AudioHandler.
   * @param {string} mp3Src - The source URL of the MP3 file.
   */
  constructor(mp3Src) {
    /**
     * The audio player instance.
     * @type {HTMLAudioElement}
     */
    this.player = new Audio(mp3Src);
  }

  /**
   * Plays the audio.
   */
  play() {
    this.player.play();
  }

  /**
   * Pauses the audio.
   */
  pause() {
    this.player.pause();
  }
}
