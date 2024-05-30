import styleProps from './styleProps';

const modalTemplate = document.createElement('template');

modalTemplate.innerHTML = `
        <style>
                ${styleProps}
        </style>
        <my-modal-buy active="false"></my-modal-buy>
        <my-modal-alert active="false"></my-modal-alert>
`

export default modalTemplate;