import defaultStyles from '../defaultStyles';

const styleProps = `
${defaultStyles}
@keyframes closing {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes incorrect_input {
  0% {
    transform: translateX(-5px);
  }
  25% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0px);
  }
}
.modal {
  position: fixed;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.22);
  width: 100%;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  transition: opacity 0.4s;
  display: flex;
  height: 0;
  opacity: 0;
}
.modal.closing {
  animation: closing 0.3s 1 linear;
}
.modal.active {
  height: 100%;
  opacity: 1;
}
.modal.active .modal__content {
  transform: translateY(0);
}
.modal__content {
  transform: translateY(-100px);
  width: 300px;
  background: #ffffff;
  border: rgb(249, 191, 59) solid 2px;
  border-radius: 20px;
  padding: 20px;
  transition: transform 0.3s ease;
}
.modal__content .error_message {
  transform: translateY(-5px);
  margin-left: 3px;
  font-size: 12px;
  height: 0;
  overflow: hidden;
  transition: transform 0.4s ease, height 0.4s ease;
}
.modal__content button {
  width: 100%;
  height: 30px;
  margin-top: 10px;
  border-radius: 50px;
  background: #ffffff;
  border: #ffe35c 2px solid;
  color: #ffe35c;
  font-weight: 700;
  transition: color 0.2s, background 0.8s;
}
.modal__content button:hover {
  background: #ffe35c;
  color: #ffffff;
}
.modal__content fieldset {
  position: relative;
  border: none;
}
.modal__content fieldset legend {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
}
.modal__content fieldset label:has(+ input.incorrect) {
  color: red;
}
.modal__content fieldset input {
  display: block;
  border-radius: 7px;
  border: #ffe35c 2px solid;
  width: 100%;
  padding: 8px 0 5px 5px;
  margin-top: 12px;
}
.modal__content fieldset input.incorrect {
  border: red 2px solid;
  animation: incorrect_input 0.1s 4 linear;
}
.modal__content fieldset input.incorrect + .error_message {
  height: fit-content;
  color: red;
  transform: translateY(0);
}
.modal__content fieldset input:focus {
  outline: none;
  position: relative;
}
.modal__content fieldset input:focus::placeholder {
  visibility: hidden;
}
.modal__content fieldset input::placeholder {
  font-size: 12px;
  color: rgba(122, 122, 122, 0.77);
}
.modal__content fieldset label {
  transition: transform 0.3s, opacity 0.3s;
  transform: translate(10px, 20px);
  font-size: 14px;
  opacity: 0;
  color: #ffe35c;
  position: absolute;
  z-index: 999;
  display: block;
  height: 0;
  overflow: hidden;
  background: #ffffff;
}
.modal__content fieldset label:has(+ input:focus) {
  opacity: 1;
  box-shadow: 0 0 10px 3px rgba(255, 255, 255, 0.8);
  transform: translate(10px, -1px);
  height: auto;
}
`

export default styleProps