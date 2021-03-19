import { Block } from '../../core';
import { Link, Input, Chat } from '..';
import { template } from './template';

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
