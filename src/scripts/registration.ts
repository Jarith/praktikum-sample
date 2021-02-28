import { Registration } from '../pages';
import { renderDOM } from '../utils';

document.addEventListener('DOMContentLoaded', () => {
    const component = new Registration();

    renderDOM(component, document.getElementById('app'));
});
