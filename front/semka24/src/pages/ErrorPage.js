import PageRenderer from '../PageRenderer';

/**
 * Represents the Error Page of the website.
 */
export default class ErrorPage {
  /**
   * Renders the Error Page content.
   * @function render
   * @memberof ErrorPage
   */
  render() {
    const root = document.querySelector('#root');

    root.innerHTML = `<my-header></my-header>
                     <div class="error"></div>
                     <my-connection-alert></my-connection-alert>
    `;
  }
}
