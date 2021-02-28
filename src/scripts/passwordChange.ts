import { PasswordChange } from '../pages';
import { renderDOM } from '../utils';

document.addEventListener('DOMContentLoaded', () => {
    const component = new PasswordChange();

    renderDOM(component, document.getElementById('app'));
});
