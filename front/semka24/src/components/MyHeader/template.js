import styleProps from './styleProps';
import defaultStyles from '../defaultStyles';

const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
                      <style>
                        ${defaultStyles}
                        ${styleProps}
                      </style>
                     <header class="header container">
                        <a href="/semka24/" id="go-back">
                          <svg width="65" height="21" viewBox="0 0 65 21" fill="none" xmlns="http://www.w3.org/2000/svg"
                              class="header__arrow-back">
                            <line x1="1.26834" y1="11.5001" x2="64.9922" y2="10.5001" stroke="#9B9494" />
                            <line x1="1.11949" y1="11.5166" x2="37.6718" y2="20.5124" stroke="#9B9494" />
                            <line x1="1.13007" y1="11.5218" x2="37.1301" y2="0.521825" stroke="#9B9494" />
                          </svg>
                        </a>
                        <a href="/semka24/aboutUs" class="about_us">About us</a>
                  </header>
`;

export default headerTemplate;