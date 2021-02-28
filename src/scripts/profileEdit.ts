import { ProfileEdit } from '../pages';
import { renderDOM } from '../utils';

document.addEventListener('DOMContentLoaded', () => {
    const component = new ProfileEdit();

    renderDOM(component, document.getElementById('app'));
});
