import { Block } from '../../core';
import { template } from './template';

import './styles.css';

type Props = {
    title?: string;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
};

export class Button extends Block<Props> {
    constructor(ownProps: Props) {
        const props = {
            title: '',
            type: 'button',
            ...ownProps,
        } as const;

        super(props, template);
    }
}
