const styleProps = `
  @keyframes arrow_move {
    0% {
      left: 0;
    }
    33% {
      left: 40px;
    }
    100% {
      left: 0;
    }
  }
  @keyframes arrow_move_stroke {
    0% {
      width: 0;
    }
    33% {
      width: 0;
    }
    100% {
      width: 40px;
    }
  }
  .nav_lower {
    position: relative;
    min-height: 50px;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
  }
  
  .nav_lower .arrow {
    width: 40px;
    height: 20px;
    position: relative;
    margin: 20px;
    z-index: 1000;
    animation-play-state: paused;
  }
  .nav_lower .arrow.hidden {
    opacity: 0;
    pointer-events: none;
  }
  .nav_lower .arrow-right {
    transform: scale(-1, 1);
  }
  .nav_lower .arrow:hover {
    animation-play-state: running;
  }
  .nav_lower .arrow:hover::before {
    width: 40px;
    animation: arrow_move_stroke 0.3s 1;
  }
  .nav_lower .arrow:hover::after {
    animation: arrow_move 0.3s 1;
  }
  .nav_lower .arrow::before {
    right: 0;
    position: absolute;
    content: "";
    width: 0;
    display: block;
    height: 1px;
    background: black;
    top: 5px;
    transition: width 0.2s ease-in;
  }
  .nav_lower .arrow::after {
    position: absolute;
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
    rotate: 45deg;
    left: 0;
    z-index: -1;
  }
`

export default styleProps;