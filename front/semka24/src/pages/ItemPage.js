import DBfasade from '../utils/DBfasade';
import PageRenderer from '../PageRenderer';

/**
 * Class representing the item page.
 */
export default class ItemPage {
  /**
   * Renders the item page.
   * @param {string} search - The search string containing  path item/{id} about the requested item.
   */
  async render(search) {
    const root = document.querySelector('#root');

    root.innerHTML = `
    <div class="art loading">
                    <div class="container">
                      <div class="art__img">
                      </div>
                      <div class="art__info">
                        <div class="title-text">
                        
                        </div>
                        <div class="subtitle-text">
                         
                        </div>
                        <div class="descr-text">
                        
                        </div>
                        <button type="button" disabled class="art__info__buy">Buy copy</button>
                      </div>
                    </div>
                  </div>
    `;

    const parts = search.split('/');
    const itemId = parts[parts.length - 1];
    const item = await DBfasade.getArt(itemId ?? 1);
    const next = await ItemPage.getNext(item);
    const prev = ItemPage.getPrev(item);

    root.innerHTML = `
                   <my-header></my-header>
                       <div class="art">
                        <div class="container">
                          <div class="art__img">
                            <img src= ${item.imgSrc} alt="demonstration of art">
                            <my-audio mp3Src="${item.mp3Src}"></my-audio>
                          </div>
                          <div class="art__info">
                            <div class="title-text">
                              ${item.name}
                            </div>
                            <div class="subtitle-text">
                              ${item.author}
                            </div>
                            <div class="descr-text">
                              ${item.description}
                            </div>
                            <button type="button" class="art__info__buy">Buy copy</button>
                          </div>
                        </div>
                       </div>
                   <my-navigation next="${next}" prev="${prev}"></my-navigation>
                   <my-modal active="false" item-id="${item.id}"></my-modal>
                   <my-connection-alert></my-connection-alert>
    `;

    document.querySelector('.art__info__buy').addEventListener('click', (e) => {
      root.querySelector('my-modal').setAttribute('active', 'true');
    });

    PageRenderer.handleLinks();
  }

  /**
   * Gets the previous item ID.
   * @param {Object} item - The current item object.
   * @returns {number|null} The previous item ID, or null if there is no previous item.
   */
  static getPrev(item) {
    return item.id <= 1 ? null : item.id - 1;
  }

  /**
   * Gets the next item ID.
   * @param {Object} item - The current item object.
   * @returns {Promise<number|null>} The next item ID, or null if there is no next item.
   */
  static async getNext(item) {
    return item.id >= (await DBfasade.getArtsLimit()) ? null : item.id + 1;
  }
}
