import { Block } from '../../core';
import { Input, Button, Image } from '../../components';
import { template } from './template';

import './styles.css';

type Props = {
    title: string;
    AvatarInput: Input;
    EmailInput: Input;
    FirstNameInput: Input;
    LastNameInput: Input;
    NicknameInput: Input;
    PhoneInput: Input;
    Button: Button;
};

const getDeps = () => ({
    AvatarInput: new Input({
        id: 'avatar',
        name: 'avatar',
        type: 'file',
        classes: {
            input: 'profile__avatar-input',
        },
        Label: new Image({
            className: 'profile__avatar profile__avatar--edit',
        }),
    }),
    EmailInput: new Input({
        id: 'email',
        name: 'email',
        value: 'pochta@yandex.ru',
        labelText: 'Почта',
        classes: {
            input: 'profile__field',
        },
    }),
    FirstNameInput: new Input({
        id: 'firstName',
        name: 'firstName',
        value: 'Иван',
        labelText: 'Имя',
        classes: {
            input: 'profile__field',
        },
    }),
    LastNameInput: new Input({
        id: 'lastName',
        name: 'lastName',
        value: 'Иванов',
        labelText: 'Фамилия',
        classes: {
            input: 'profile__field',
        },
    }),
    NicknameInput: new Input({
        id: 'nickname',
        name: 'nickname',
        value: 'Иван',
        labelText: 'Имя в чате',
        classes: {
            input: 'profile__field',
        },
    }),
    PhoneInput: new Input({
        id: 'phone',
        name: 'phone',
        type: 'tel',
        value: '+7 (909) 967 30 30',
        labelText: 'Телефон',
        classes: {
            input: 'profile__field',
        },
    }),
    Button: new Button({
        title: 'Сохранить',
        type: 'submit',
        className: 'profile__button',
    }),
});

const props = {
    title: 'Редактирование профиля',
    ...getDeps(),
};
export class ProfileEdit extends Block<Props> {
    constructor() {
        super(props, template);
    }
}
