import { Block } from '../../core';
import { template } from './template';

type Props = {
    title?: string;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
};

export class Button extends Block<Props> {
    constructor(props: Props) {
        super({
            title: '',
            type: 'button',
            ...props,
        });
    }

    public render() {
        return super.render(template);
    }
}
