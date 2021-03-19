import type { Block } from '../core/Block';

export const renderDOM = <T extends Record<string, unknown>>(component: Block<T>, root: HTMLElement | null, tagName: string = 'div') => {
    const container = document.createElement(tagName);

    container.innerHTML = component.innerHTML;

    root?.appendChild(container);

    return root;
};

export default renderDOM;