import { Block } from '../../core';
import { Image } from '..';
import { template } from './template';

import './styles.css';

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
    constructor(ownProps: OwnProps) {
        const props = {
            ...ownProps,
            ...getDeps(),
        } as const;

        super(props, template);
    }
}
