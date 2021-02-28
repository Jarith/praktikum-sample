import { ChatListPage } from '../pages';
import { renderDOM } from '../utils';

document.addEventListener('DOMContentLoaded', () => {
    const component = new ChatListPage();

    renderDOM(component, document.getElementById('app'));
});
