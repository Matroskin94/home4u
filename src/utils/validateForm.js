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

    if (String(values[field1]) !== String(values[field2])) {
        errors[field1] = 'Пароли не совпадают';
        errors[field2] = 'Пароли не совпадают';
    }

    return errors;
};

const checkPassword = (values, passwordField) => {
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
    errors = { ...errors, ...checkPassword(values, 'password') };

    return errors;
};

export const validateEditUser = requiredFields => values => {
    let errors = {};

    errors = { ...errors, ...checkRequires(values, requiredFields) };
    errors = { ...errors, ...checkPassword(values, 'password') };
    errors = { ...errors, ...checkPassword(values, 'newPassword') };
    errors = { ...errors, ...checkPassword(values, 'confirmPassword') };
    errors = { ...errors, ...comparePasswords(values, 'newPassword', 'confirmPassword') };

    return errors;
};
