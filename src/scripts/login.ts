import { Login } from '../pages';
import { renderDOM } from '../utils';

document.addEventListener('DOMContentLoaded', () => {
    const component = new Login();

    renderDOM(component, document.getElementById('app'));
});
