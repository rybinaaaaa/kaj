import styleProps from '../styleProps';

const phoneNumberErrorMessage = 'Please enter a valid phone number.';
const emailErrorMessage = 'Please enter a valid email address.';
const nameErrorMessage = 'Please enter a valid name.';
const surnameErrorMessage = 'Please enter a valid surname.';

const modalTemplate = document.createElement('template');
modalTemplate.innerHTML = `
        <style>
                ${styleProps}
        </style>
        <div class="modal" id="modal_buy">
          <div class="modal__content">
            <form id="modal_buy_form" action="/" method="post">
              <fieldset>
                <legend>
                  Please fill in your contact information, and we will get in touch with you.
                </legend>
                <label for="email">Email</label>
                <input value="${localStorage.getItem('user_email') ?? ''}" name="email" id="email" type="email" placeholder="type your email" />
                <div class="error_message email">${emailErrorMessage}</div>
                <label for="number">Phone number</label>
                <input value="${localStorage.getItem('user_number') ?? ''}" name="number" id="number" type="number" placeholder="type your number" />
                <div class="error_message number">${phoneNumberErrorMessage}</div>
                <label for="name">Name</label>
                <input value="${localStorage.getItem('user_name') ?? ''}" name="name" id="name" type="text" placeholder="type your name" />
                <div class="error_message name">${nameErrorMessage}</div>
                <label for="surname">Surname</label>
                <input value="${localStorage.getItem('user_surname') ?? ''}" name="surname" id="surname" type="text" placeholder="type your surname" />
                <div class="error_message surname" >${surnameErrorMessage}</div>
        				<input name="id" id="id" type="hidden"/>
              </fieldset>
              <button id="submit_buy_request" type="submit">Contact me</button>
            </form>
          </div>
    </div>
`

export default modalTemplate;