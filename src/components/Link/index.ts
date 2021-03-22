import { Block } from '../../core';
import { template } from './template';

import './styles.css';

type Props = {
    title: string;
    href: string;
    className?: string;
};

export class Link extends Block<Props> {
    constructor(props: Props) {
        super(props, template);
    }
}
