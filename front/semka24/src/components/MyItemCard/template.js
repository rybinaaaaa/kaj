import styleProps from './styleProps';

const cardTemplate = document.createElement('template');

cardTemplate.innerHTML = `
        <style>
        ${styleProps}
       </style>
        <a href="#" class="item loading">
          <div class="loader"></div>
          <div class="item__img">
          <img
                  src="#" alt="picture">
          </div>
          <div class="title-text"></div>
          <div class="subtitle-text"></div>
        </a>
`

export default cardTemplate;