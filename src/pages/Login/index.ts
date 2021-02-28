import { Block } from '../../core';
import { Link, Input, Button } from '../../components';
import { template } from './template';

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

export class Login extends Block<Props> {
    constructor() {
        super({
            title: 'Авторизация',
            ...getDeps(),
        });
    }

    public render = () => {
        return super.render(template);
    };
}
