import { ValidationSchema } from '../ValidationSchema';

const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PHONE_REGEXP = /^((\+7|7|8)-?((\(\d{3}\))|\d{3})-?\d{3}-?\d{2}-?\d{2})$/;

export const textFiledSchema = new ValidationSchema()
    .required()
    .minLength(2)
    .maxLength(250);

export const emailSchema = new ValidationSchema()
    .required()
    .pattern(EMAIL_REGEXP, 'Неверный формат');

export const phoneSchema = new ValidationSchema()
    .required()
    .pattern(PHONE_REGEXP, 'Неверный формат');

export const passwordDuplicateSchema = textFiledSchema.custom(
    (value: string, originalPassword: string) => {
        return value === originalPassword;
    },
    'Пароли не совпадают'
);
