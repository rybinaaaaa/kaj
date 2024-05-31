import DBfasade from '../utils/DBfasade';
import WeakMap from 'lodash/_WeakMap';

/**
 * Class to handle modal interactions and events.
 */
export default class ModalHandler {
  /**
   * @type {HTMLElement|null}
   * @private
   */
  _modalToBuy;

  /**
   * @type {HTMLElement|null}
   * @private
   */
  _modalAlert;

  /**
   * @type {HTMLElement|null}
   * @private
   */
  _modal;

  /**
   * Creates an instance of ModalHandler.
   * @param {HTMLElement} modal - The modal element.
   */
  constructor(modal) {
    /**
     * WeakMap to store event listeners.
     * @type {WeakMap}
     */
    this.events = new WeakMap();
    this.modal = modal;
  }

  /**
   * Adds an event listener and stores it in the WeakMap.
   * @param {HTMLElement} element - The element to attach the event to.
   * @param {string} event - The event type.
   * @param {Function} handler - The event handler.
   */
  addEventListenerWithStorage(element, event, handler) {
    element.addEventListener(event, handler);
    this.events.set(element, { event, handler });
  }

  /**
   * Removes all stored event listeners.
   */
  removeAllEventListeners() {
    for (const [element, { event, handler }] of this.events) {
      element.removeEventListener(event, handler);
    }
    this.events = new WeakMap(); // Clear the map
  }

  /**
   * Sets the modal to buy and updates event listeners.
   * @param {HTMLElement} modal - The modal element to buy.
   */
  set modalToBuy(modal) {
    if (this._modalToBuy) {
      this.events.delete(this._modalToBuy);
      this.events.delete(this._modalToBuy.shadowRoot.querySelector('#modal_buy_form'));
    }
    this._modalToBuy = modal;
  }

  /**
   * Sets the modal alert and updates event listeners.
   * @param {HTMLElement} modal - The modal alert element.
   */
  set modalAlert(modal) {
    if (this._modalToBuy) {
      this.events.delete(this._modalToBuy);
    }
    this._modalAlert = modal;
  }

  /**
   * Sets the main modal and updates associated modals.
   * @param {Object} modal - The modal elements container.
   * @param {HTMLElement} modal.modalToBuy - The modal to buy element.
   * @param {HTMLElement} modal.modalAlert - The modal alert element.
   */
  set modal(modal) {
    this._modal = modal;
    this.modalToBuy = modal.modalToBuy;
    this.modalAlert = modal.modalAlert;
  }

  /**
   * Initializes the modal handler by setting up event listeners.
   */
  init() {
    const form = this._modalToBuy.shadowRoot.querySelector('#modal_buy_form');
    this.addEventListenerWithStorage(form, 'submit', async (e) => {
      e.preventDefault();
      try {
        const extractedData = this.handleFormData(form);
        await DBfasade.sendLead(extractedData);
        this._modal.setAttribute('active', 'false');
        if (this._modalAlert) {
          this._modalAlert.setAttribute('active', 'true');
          setTimeout(() => {
            this._modalAlert.setAttribute('active', 'false');
          }, 3000);
        }
      } catch (err) {
        console.log(err);
      }
    });
  }

  /**
   * Stops the modal handler by removing all event listeners.
   */
  stop() {
    this.removeAllEventListeners();
  }

  /**
   * Handles form data validation and extraction.
   * @param {HTMLFormElement} form - The form element.
   * @returns {Object} The extracted form data.
   * @throws {Error} If the form data is incorrect.
   */
  handleFormData(form) {
    let isCorrect = true;

    const nameField = form.elements.name;
    const surnameField = form.elements.surname;
    const emailField = form.elements.email;
    const numberField = form.elements.number;
    const idField = form.elements.id;

    const isEmailValid = this.modalValidator.validateEmail(emailField.value);
    const isNumberValid = this.modalValidator.validatePhoneNumber(numberField.value);
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
      artId: +idField.value
    };
  }

  /**
   * Validator object for form data.
   */
  modalValidator = {
    /**
     * Validates an email address.
     * @param {string} email - The email address.
     * @returns {boolean} True if the email is valid, false otherwise.
     */
    validateEmail: (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },

    /**
     * Validates a phone number.
     * @param {string} number - The phone number.
     * @returns {boolean} True if the phone number is valid, false otherwise.
     */
    validatePhoneNumber: (number) => {
      const phoneRegex = /^\d{10}$/;
      return phoneRegex.test(number);
    },

    /**
     * Validates a name or surname.
     * @param {string} name - The name or surname.
     * @returns {boolean} True if the name is not empty, false otherwise.
     */
    validateName: (name) => {
      return name.trim() !== '';
    }
  };
}
