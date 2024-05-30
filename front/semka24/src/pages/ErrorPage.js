import PageRenderer from '../PageRenderer';

export default class ErrorPage {

  render() {
    const root = document.querySelector('#root');

    root.innerHTML = `<my-header></my-header>
                     <div class="error"></div>
    `

    // PageRenderer.handleLinks();
  }
}