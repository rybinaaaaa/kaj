import defaultStyles from '../defaultStyles';

const styleProps = `
    ${defaultStyles}
    .loader {
      display:none;
      width: 50px;
      aspect-ratio: 1;
      border-radius: 50%;
      border: 8px solid #ffffff;
      border-right-color: #CCA033;
      animation: loading 1s infinite linear;
    }
    
    @keyframes loading {
      100% {
        transform: rotate(360deg);
      }
    }
    .title-text {
      font-size: 27px;
      font-weight: 400;
    }
    .subtitle-text {
      font-size: 13px;
      font-weight: 700;
    }
    .item {
      display: block;
      opacity: 0; /* Начальное состояние элемента */
      transition: all 0.3s;
    }
    .item.loading {
      opacity: 1;
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
     .item.loading .loader{
      display: block;
    }
    .item.loading img {
      display: none;
    }
    .item.show {
      opacity: 1; /* Показываем элемент */
    }
    .item__img {
      display: flex;
      align-content: center;
      height: 180px;
    }
    .item__img img {
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
    @media (max-width: 768px) {
      .title-text {
        font-size: 15px;
      }
      .subtitle-text {
        font-size: 8px;
      }
    }
`

export default styleProps;