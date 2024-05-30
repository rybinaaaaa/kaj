import styleProps from './styleProps';

const navTemplate = document.createElement('template');

navTemplate.innerHTML = `
      <style>
      ${styleProps}
      </style>
      <nav class="nav_lower container">
        <a href="/" id="prev" class="arrow arrow-left"></a></a>
        <a href="/" id="next" class="arrow arrow-right"></a>
      </nav>
`;

export default navTemplate;
