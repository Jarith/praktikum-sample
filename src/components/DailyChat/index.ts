import { Block } from '../../core';
import { DailyChatMessage } from '..';
import { template } from './template';

type Props = {
    date: string;
    Messages: DailyChatMessage[];
};

export class DailyChat extends Block<Props> {
    constructor(props: Props) {
        super(props);
    }

    public render() {
        return super.render(template);
    }
}
