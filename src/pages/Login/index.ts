import { Block } from '../../core';
import { Link, Input, Button } from '../../components';
import { template } from './template';

import './styles.css';

type Props = {
    title: string;
    EmailInput: Input;
    PasswordInput: Input;
    Button: Button;
    Link: Link;
};

const getDeps = () => ({
    EmailInput: new Input({
        id: 'email',
        name: 'email',
        placeholder: 'pochta@yandex.ru',
        labelText: 'Почта',
        classes: {
            label: 'auth-form__label',
            input: 'auth-form__input',
        },
    }),
    PasswordInput: new Input({
        id: 'password',
        name: 'password',
        type: 'password',
        placeholder: 'Пароль',
        labelText: 'Пароль',
        classes: {
            label: 'auth-form__label',
            input: 'auth-form__input',
        },
    }),
    Button: new Button({
        title: 'Авторизоваться',
        type: 'submit',
        className: 'auth-form__submit-button',
    }),
    Link: new Link({
        title: 'Нет аккаунта?',
        href: './Registration.html',
    }),
});

const props = {
    title: 'Авторизация',
    ...getDeps(),
};
export class Login extends Block<Props> {
    constructor() {
        super(props, template(
            props.EmailInput.content,
            props.PasswordInput.content,
            props.Button.content,
            props.Link.content,
        ));
    }
}
