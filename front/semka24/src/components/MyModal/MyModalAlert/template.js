import styleProps from '../styleProps';

const modalTemplate = document.createElement('template');

modalTemplate.innerHTML = `
        <style>
                ${styleProps}
        </style>
        <div class="modal" id="modal_alert">
          <div class="modal__content">
            Dear ${localStorage.getItem('user_name') ?? 'customer'},
            We have received your application
            Thank you, we wil contact you as soon as possible!
          </div>
        </div>
`

export default modalTemplate;
