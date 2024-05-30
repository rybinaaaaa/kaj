const styleProps = `
    .container {
      padding: 0 110px;
      flex-grow: 1;
    }
    
      @media (max-width: 768px) {
        .container {
          row-gap: 10px;
        }
      }
      
      
      @media (max-width: 900px) {
        .container {
          padding: 20px;
        }
      }
      
      @media (max-width: 576px) {
        .container {
          grid-template-columns: repeat(2, 1fr);
        }
      }

    .header {
      display: grid;
      background-color: #ffe35c;
      height: 57px;
      grid-template-columns: 64px 1fr repeat(2, auto);
      align-items: center;
      column-gap: 50px;
    }
    .header .about_us {
      grid-column-start: 4;
      color: #ffffff;
    }
    .header__arrow-back line {
      stroke: white;
    }
    
    @media (max-width: 900px) {
      .header {
        column-gap: 20px;
      }
  }
`
export default styleProps;