import { Block } from '../../core';
import { Link, Image } from '../../components';
import { template } from './template';
import { Field } from './components/Field';

import './styles.css';

type Props = {
    title: string;
    Avatar: Image;
    EmailField: Field;
    FirstNameField: Field;
    LastNameField: Field;
    NicknameField: Field;
    PhoneField: Field;
    ChangeDataLink: Link;
    ChangePasswordLink: Link;
    LogoutLink: Link;
};

const getDeps = () => ({
    Avatar: new Image({
        className: 'profile__avatar',
    }),
    EmailField: new Field({
        label: 'Почта',
        value: 'pochta@yandex.ru',
    }),
    FirstNameField: new Field({
        label: 'Имя',
        value: 'Иван',
    }),
    LastNameField: new Field({
        label: 'Фамилия',
        value: 'Иванов',
    }),
    NicknameField: new Field({
        label: 'Имя в чате',
        value: 'Иван',
    }),
    PhoneField: new Field({
        label: 'Телефон',
        value: '+7 (909) 967 30 30',
    }),
    ChangeDataLink: new Link({
        title: 'Изменить данные',
        href: './ProfileEdit.html',
    }),
    ChangePasswordLink: new Link({
        title: 'Изменить пароль',
        href: './PasswordChange.html',
    }),
    LogoutLink: new Link({
        title: 'Выйти',
        href: './index.html',
        className: 'link--important',
    }),
});

const props = {
    title: 'Профиль',
    ...getDeps(),
};

export class ProfileView extends Block<Props> {
    constructor() {
        super(props, template);
    }
}
