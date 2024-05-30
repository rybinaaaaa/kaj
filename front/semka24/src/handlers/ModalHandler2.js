import DBfasade from '../utils/DBfasade';
import WeakMap from 'lodash/_WeakMap';

export default class ModalHandler {
  _modalToBuy;
  _modalAlert;
  _modal;

  constructor(modal) {
    this.events = new WeakMap();
    this.modal = modal;
  }

  addEventListenerWithStorage(element, event, handler) {
    element.addEventListener(event, handler);
    this.events.set(element, { event, handler });
  }

  removeAllEventListeners() {
    for (const [element, { event, handler }] of this.events) {
      element.removeEventListener(event, handler);
    }
    this.events = new WeakMap(); // Очистка карты
  }

  set modalToBuy(modal) {
    if (this._modalToBuy) {
      this.events.delete(this._modalToBuy);
      this.events.delete(
        this._modalToBuy.shadowRoot.querySelector('#modal_buy_form'),
      );
    }
    this._modalToBuy = modal;
  }

  set modalAlert(modal) {
    if (this._modalToBuy) {
      this.events.delete(this._modalToBuy);
    }
    this._modalAlert = modal;
  }

  set modal(modal) {
    this._modal = modal;
    this.modalToBuy = modal.modalToBuy;
    this.modalAlert = modal.modalAlert;
  }

  init() {
    // this._modal.addEventListener('click', (e) => {
    //   if (
    //     e.target !== this._modal.shadowRoot.querySelector('.modal__content')
    //   ) {
    //     this._modal.setAttribute('active', 'false');
    //   }
    // });

    const form = this._modalToBuy.shadowRoot.querySelector('#modal_buy_form');
    this.addEventListenerWithStorage(form, 'submit', async (e) => {
      e.preventDefault();
      try {
        const extractedData = this.handleFormData(form);
        const response = DBfasade.sendLead(extractedData).then(() => {
          this._modal.setAttribute('active', 'false');
          if (this._modalAlert) {
            this._modalAlert.setAttribute('active', 'true');
            setTimeout(() => {
              this._modalAlert.setAttribute('active', 'false');
            }, 3000);
          }
        });
      } catch (err) {
        console.log(err);
      }
    });
  }

  stop() {
    this.removeAllEventListeners();
  }

  handleFormData(form) {
    let isCorrect = true;

    const nameField = form.elements.name;
    const surnameField = form.elements.surname;
    const emailField = form.elements.email;
    const numberField = form.elements.number;
    const idField = form.elements.id;

    const isEmailValid = this.modalValidator.validateEmail(emailField.value);
    const isNumberValid = this.modalValidator.validatePhoneNumber(
      numberField.value,
    );
    const isNameValid = this.modalValidator.validateName(nameField.value);
    const isSurnameValid = this.modalValidator.validateName(surnameField.value);

    if (isEmailValid) {
      emailField.classList.remove('incorrect');
      localStorage.setItem('user_email', emailField.value);
    } else {
      emailField.classList.add('incorrect');
      emailField.dataset.errorMessage = this.emailErrorMessage;
      isCorrect = false;
    }

    if (isNumberValid) {
      numberField.classList.remove('incorrect');
      localStorage.setItem('user_number', numberField.value);
    } else {
      numberField.classList.add('incorrect');
      numberField.dataset.errorMessage = this.phoneNumberErrorMessage;
      isCorrect = false;
    }

    if (isNameValid) {
      nameField.classList.remove('incorrect');
      localStorage.setItem('user_name', nameField.value);
    } else {
      nameField.classList.add('incorrect');
      nameField.dataset.errorMessage = this.nameErrorMessage;
      isCorrect = false;
    }

    if (isSurnameValid) {
      surnameField.classList.remove('incorrect');
      localStorage.setItem('user_surname', surnameField.value);
    } else {
      surnameField.classList.add('incorrect');
      surnameField.dataset.errorMessage = this.surnameErrorMessage;
      isCorrect = false;
    }

    if (!isCorrect) {
      throw new Error('Incorrect input data');
    }

    return {
      name: nameField.value,
      surname: surnameField.value,
      email: emailField.value,
      number: numberField.value,
      artId: +idField.value,
    };
  }

  modalValidator = {
    validateEmail: (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },

    validatePhoneNumber: (number) => {
      const phoneRegex = /^\d{10}$/;
      return phoneRegex.test(number);
    },

    validateName: (name) => {
      return name.trim() !== '';
    },
  };
}
