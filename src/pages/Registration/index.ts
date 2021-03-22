import { Block } from '../../core';
import { Link, Input, Button } from '../../components';
import { template } from './template';

import './styles.css';

type Props = {
    title: string;
    EmailInput: Input;
    FirstNameInput: Input;
    LastNameInput: Input;
    PhoneInput: Input;
    PasswordInput: Input;
    PasswordConfirmInput: Input;
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
    FirstNameInput: new Input({
        id: 'firstName',
        name: 'firstName',
        placeholder: 'Иван',
        labelText: 'Имя',
        classes: {
            label: 'auth-form__label',
            input: 'auth-form__input',
        },
    }),
    LastNameInput: new Input({
        id: 'lastName',
        name: 'lastName',
        placeholder: 'Иванов',
        labelText: 'Фамилия',
        classes: {
            label: 'auth-form__label',
            input: 'auth-form__input',
        },
    }),
    PhoneInput: new Input({
        id: 'phone',
        name: 'phone',
        type: 'tel',
        placeholder: '+7 (909) 967 30 30',
        labelText: 'Телефон',
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
    PasswordConfirmInput: new Input({
        id: 'passwordConfirm',
        name: 'passwordConfirm',
        type: 'password',
        placeholder: 'Пароль (ещё раз)',
        labelText: 'Пароль (ещё раз)',
        classes: {
            label: 'auth-form__label',
            input: 'auth-form__input',
        },
    }),
    Button: new Button({
        title: 'Зарегистрироваться',
        type: 'submit',
        className: 'auth-form__submit-button',
    }),
    Link: new Link({
        title: 'Войти',
        href: './Login.html',
    }),
});

const props = {
    title: 'Регистрация',
    ...getDeps(),
};
export class Registration extends Block<Props> {
    constructor() {
        super(props, template);
    }
}
