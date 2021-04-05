import { Block } from '../../../../core';
import { template } from './template';

type Props = {
    label: string;
    value: string;
};
export class Field extends Block<Props> {
    constructor(props: Props) {
        super(props, template);
    }
}
