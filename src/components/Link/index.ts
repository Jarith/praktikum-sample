import { Block } from '../../core';
import { template } from './template';

type Props = {
    title: string;
    href: string;
    className?: string;
};

export class Link extends Block<Props> {
    constructor(props: Props) {
        super(props);
    }

    public render() {
        return super.render(template);
    }
}
