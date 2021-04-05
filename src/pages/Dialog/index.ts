import { Block } from '../../core';
import {
    ChatList,
    Chat,
    Image,
    DailyChat,
    DailyChatMessage,
    Input,
    Button,
} from '../../components';
import { ChatActions } from './components/ChatActions';
import { ProfileActions } from './components/ProfileActions';
import { template } from './template';

import './styles.css';

type Props = {
    chatName: string;
    Avatar: Image;
    ChatList: ChatList;
    DailyChats: DailyChat[];
    MessageInput: Input;
    Button: Button;
    ChatActions: ChatActions;
    ProfileActions: ProfileActions;
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

    const messages = [
        new DailyChatMessage({
            text:
                'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.\n\nХассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
            time: '11:56',
        }),
        new DailyChatMessage({
            Image: new Image({
                alt: 'Фото',
                height: 210,
                width: 315,
                className: 'daily-chat__picture',
            }),
            time: '11:56',
        }),
        new DailyChatMessage({
            text: 'Круто!',
            time: '12:00',
            me: true,
        }),
    ];

    const dailyChats = [
        new DailyChat({
            date: '19 июня',
            Messages: messages,
        }),
        new DailyChat({
            date: '25 июня',
            Messages: messages,
        }),
    ];

    return {
        Avatar: new Image({
            width: 50,
            height: 50,
            className: 'dialog__avatar',
        }),
        ChatList: new ChatList({
            Chats: chats,
        }),
        DailyChats: dailyChats,
        MessageInput: new Input({
            id: 'sendMessage',
            name: 'sendMessage',
            placeholder: 'Сообщение',
            labelText: 'Отправить сообщение',
            classes: {
                label: 'hidden',
                input: 'send-message__input',
            },
        }),
        ChatActions: new ChatActions({
            PhotoInput: new Input({
                id: 'attachPhoto',
                name: 'attachPhoto',
                type: 'file',
            }),
            FileInput: new Input({
                id: 'attachFile',
                name: 'attachFile',
                type: 'file',
            }),
            LocationInput: new Input({
                id: 'attachLocation',
                name: 'attachLocation',
                type: 'file',
            }),
        }),
        ProfileActions: new ProfileActions(),
        Button: new Button({
            type: 'submit',
            className: 'send-message__button',
        }),
    };
};

const props = {
    chatName: 'Иван',
    ...getDeps(),
};

export class Dialog extends Block<Props> {
    constructor() {
        super(props, template(
            props.ChatList.content,
            props.Avatar.content,
            props.ProfileActions.content,
            props.ChatActions.content,
            props.MessageInput.content,
            props.Button.content,
        ));
    }
}
