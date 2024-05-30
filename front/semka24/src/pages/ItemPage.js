import DBfasade from '../utils/DBfasade';
import PageRenderer from '../PageRenderer';

export default class ItemPage {
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
    `

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
      console.log(root.querySelector('my-modal'));
      root.querySelector('my-modal').setAttribute('active', 'true');
    });

    PageRenderer.handleLinks();
  }

  static getPrev(item) {
    return item.id <= 1 ? null : item.id - 1;
  }

  static async getNext(item) {
    return item.id >= (await DBfasade.getArtsLimit()) ? null : item.id + 1;
  }
}
