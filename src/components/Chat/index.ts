import { Block } from '../../core';
import { Image } from '..';
import { template } from './template';

type OwnProps = {
    title: string;
    lastMessage: string;
    time: string;
    me?: boolean;
    unreadCount?: number;
};

type Props = OwnProps & {
    Avatar: Image;
}

const getDeps = () => ({
    Avatar: new Image({
        className: 'chat__avatar',
        width: 45,
        height: 45,
    }),
});

export class Chat extends Block<Props> {
    constructor(props: OwnProps) {
        super({
            ...props,
            ...getDeps(),
        });
    }

    public render() {
        return super.render(template);
    }
}
