import { ProfileView } from '../pages';
import { renderDOM } from '../utils';

document.addEventListener('DOMContentLoaded', () => {
    const component = new ProfileView();

    renderDOM(component, document.getElementById('app'));
});
