import { Block } from '../../core';
import { template } from './template';

type Props = {
    id: string;
    name: string;
    type?: string;
    labelText?: string;
    placeholder?: string;
    value?: string;
    Label?: Block<any>;
    classes?: {
        label?: string;
        input?: string;
    };
};

export class Input extends Block<Props> {
    constructor(props: Props) {
        super({
            type: 'text',
            ...props,
        });
    }

    public render() {
        return super.render(template);
    }
}
