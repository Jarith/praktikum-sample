import { Block } from '../../core';
import { Image } from '..';
import { template } from './template';

type Props = {
    time: string;
    me?: boolean;
    Image?: Image,
    text?: string;
};

export class DailyChatMessage extends Block<Props> {
    constructor(props: Props) {
        super(props, template);
    }
}
