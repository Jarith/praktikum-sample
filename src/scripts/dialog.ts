import { Dialog } from '../pages';
import { renderDOM } from '../utils';

document.addEventListener('DOMContentLoaded', () => {
    const component = new Dialog();

    renderDOM(component, document.getElementById('app'));
});
