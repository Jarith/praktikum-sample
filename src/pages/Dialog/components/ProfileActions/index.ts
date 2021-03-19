import { Block } from '../../../../core';
import { template } from './template';

export class ProfileActions extends Block<{}> {
    constructor() {
        super({});
    }

    public render = () => {
        return super.render(template);
    };
}
