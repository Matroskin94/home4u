const validate = values => {
    const errors = {};
    const requiredFields = ['login', 'email', 'password', 'passwordConfirm'];

    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Обязательное поле *';
        }
    });
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Неверный e-mail';
    }
    if (String(values.password) !== String(values.passwordConfirm)) {
        errors.password = 'Пароли не совпадают';
        errors.passwordConfirm = 'Пароли не совпадают';
    }
    if (String(values.password).length < 5) {
        errors.password = 'Слишком короткий пароль';
    }
    return errors;
};

export default validate;
