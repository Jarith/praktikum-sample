import { ErrorPage } from '../pages';
import { renderDOM } from '../utils';

const props = {
    title: '500',
    description: 'Не туда попали',
};

document.addEventListener('DOMContentLoaded', () => {
    const component = new ErrorPage(props);

    renderDOM(component, document.getElementById('app'));
});
