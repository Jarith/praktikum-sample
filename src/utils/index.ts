import type { Block } from '../core/Block';

export const renderDOM = <T extends Record<string, unknown>, C extends Block<T>>(component: C, root: HTMLElement | null, tagName: string = 'div') => {
    const container = document.createElement(tagName);

    container.innerHTML = component.content;

    root?.appendChild(container);

    return root;
};

export default renderDOM;