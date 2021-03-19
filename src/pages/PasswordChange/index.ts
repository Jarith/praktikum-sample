import { Block } from '../../core';
import { Input, Button, Image } from '../../components';
import { template } from './template';

type Props = {
    title: string;
    Avatar: Image;
    OldPasswordInput: Input;
    NewPasswordInput: Input;
    PasswordConfirmInput: Input;
    Button: Button;
};

const getDeps = () => ({
    Avatar: new Image({
        className: 'profile__avatar',
    }),
    OldPasswordInput: new Input({
        id: 'oldPassword',
        name: 'oldPassword',
        type: 'password',
        placeholder: '*****',
        labelText: 'Пароль',
        classes: {
            input: 'profile__field',
        },
    }),
    NewPasswordInput: new Input({
        id: 'newPassword',
        name: 'newPassword',
        type: 'password',
        placeholder: '*****',
        labelText: 'Новый пароль',
        classes: {
            input: 'profile__field',
        },
    }),
    PasswordConfirmInput: new Input({
        id: 'newPasswordConfirm',
        name: 'newPasswordConfirm',
        type: 'password',
        placeholder: '*****',
        labelText: 'Повторите новый пароль',
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

export class PasswordChange extends Block<Props> {
    constructor() {
        super({
            title: 'Изменить пароль',
            ...getDeps(),
        });
    }

    public render = () => {
        return super.render(template);
    };
}
