import { Block } from '../../core';
import { Link, Input, Chat } from '..';
import { template } from './template';

import './styles.css';

type OwnProps = {
    Chats: Chat[];
};

type Props = OwnProps & {
    ProfileLink: Link;
    SearchInput: Input;
};

const getDeps = () => ({
    ProfileLink: new Link({
        title: 'Профиль >',
        href: './ProfileView.html',
        className: 'chat-list-container__link',
    }),
    SearchInput: new Input({
        id: 'search',
        name: 'search',
        placeholder: "Поиск",
        labelText: 'Поиск',
        classes: {
            label: 'hidden',
            input: 'search'
        }
    }),
});

export class ChatList extends Block<Props> {
    constructor(ownProps: OwnProps) {
        const props = {
            ...ownProps,
            ...getDeps(),
        } as const;

        super(props, template);
    }
}
