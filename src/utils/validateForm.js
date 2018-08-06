import { isEqual } from 'lodash';

const checkRequires = (values, requiredFields) => {
    const errors = {};

    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Обязательное поле *';
        }
    });

    return errors;
};

const checkEmail = values => {
    const errors = {};

    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Неверный e-mail';
    }

    return errors;
};

const comparePasswords = (values, field1, field2) => {
    const errors = {};

    if (!isEqual(values[field1], values[field2])) {
        errors[field1] = 'Пароли не совпадают';
        errors[field2] = 'Пароли не совпадают';
    }

    return errors;
};

const checkUserPassword = (values, userPassword) => {
    const errors = {};

    if (!isEqual(values.password, userPassword)) {
        errors.password = 'Неверный пароль';
    }

    return errors;
};

const validatePassword = (values, passwordField) => {
    const errors = {};

    if (String(values[passwordField]).length < 5) {
        errors[passwordField] = 'Слишком короткий пароль';
    }

    return errors;
};

export const validateRegistration = requiredFields => values => {
    let errors = {};

    errors = { ...errors, ...checkRequires(values, requiredFields) };
    errors = { ...errors, ...checkEmail(values) };
    errors = { ...errors, ...comparePasswords(values, 'password', 'passwordConfirm') };
    errors = { ...errors, ...validatePassword(values, 'password') };

    return errors;
};

export const validateEditUser = (userPassword = '123') => values => {
    let errors = {};

    if (values.newPassword || values.confirmPassword) {
        errors = { ...errors, ...checkRequires(values, ['password']) };
        errors = { ...errors, ...validatePassword(values, 'newPassword') };
        errors = { ...errors, ...validatePassword(values, 'confirmPassword') };
        errors = { ...errors, ...checkUserPassword(values, userPassword) };
        errors = { ...errors, ...comparePasswords(values, 'newPassword', 'confirmPassword') };
    }

    return errors;
};
