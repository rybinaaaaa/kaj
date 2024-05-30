export default class AudioHandler {
  constructor(mp3Src) {
    this.player = new Audio(mp3Src);
  }

  play() {
    this.player.play();
  }

  pause() {
    this.player.pause();
  }
}
