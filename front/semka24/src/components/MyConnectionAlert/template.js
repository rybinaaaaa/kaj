import styleProps from './styleProps';
import defaultStyles from '../defaultStyles';

const alertTemplate = document.createElement('template');
alertTemplate.innerHTML = `
<style>
${defaultStyles}
${styleProps}
</style>
 <div class="connection_alert">Bad connection</div>
`;

export default alertTemplate;
