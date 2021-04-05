import { Block } from '../../core';
import { ChatList, Chat } from '../../components';
import { template } from './template';

import './styles.css';

type Props = {
    title: string;
    ChatList: ChatList;
};

const getDeps = () => {
    const chats = [
        new Chat({
            title: 'Андрей',
            lastMessage: 'Изображение',
            time: '10:49',
            unreadCount: 2,
        }),
        new Chat({
            title: 'Киноклуб',
            lastMessage: 'стикер',
            time: '12:00',
            me: true,
        }),
        new Chat({
            title: 'Илья',
            lastMessage: 'Друзья, у меня для вас особенный выпуск новостей!...',
            time: '15:12',
            unreadCount: 4,
        }),
        new Chat({
            title: 'Вадим',
            lastMessage: 'Круто!',
            time: 'Пт',
            me: true,
        }),
        new Chat({
            title: 'тет-а-теты',
            lastMessage:
                'И Human Interface Guidelines и Material Design рекомендуют...',
            time: 'Ср',
        }),
        new Chat({
            title: '1, 2, 3',
            lastMessage:
                'Миллионы россиян ежедневно проводят десятки часов свое...',
            time: 'Пн',
        }),
    ];

    return {
        ChatList: new ChatList({
            Chats: chats,
        }),
    };
};

const props = {
    title: 'Выберите чат',
    ...getDeps(),
};

export class ChatListPage extends Block<Props> {
    constructor() {
        super(props, template(
            props.ChatList.content,
        ));
    }
}
