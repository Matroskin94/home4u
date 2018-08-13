import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

import stylesJS from './RegistrationFormStylesJS';
import { validateRegistration } from '../../utils/validateForm';
import RenderFormTextField from '../common/RenderFormTextField.jsx';

const selector = formValueSelector('register');
const fieldsArray = ['login', 'email', 'password', 'passwordConfirm', 'name', 'surname', 'phone'];
const sentRequest = values => {
    // console.log('SUBMIT', values);
};

let RegistrationForm = ({
    classes,
    handleSubmit
}) => (
    <div className={classes.container}>
        <Paper className={classes.paper}>
            <Typography variant='display1' align='center'>Регистрация</Typography>
            <form name='registerForm' onSubmit={handleSubmit(sentRequest)}>
                <Field
                    name='login'
                    id='login'
                    label='Логин *'
                    component={RenderFormTextField}
                    formStyle={classes.textField}
                />
                <Field
                    name='email'
                    id='eMail'
                    label='e-mail *'
                    margin='normal'
                    component={RenderFormTextField}
                    formStyle={classes.textField}
                />
                <Field
                    name='password'
                    id='password'
                    label='Пароль *'
                    type='password'
                    margin='normal'
                    component={RenderFormTextField}
                    formStyle={classes.textField}
                />
                <Field
                    name='passwordConfirm'
                    id='passwordConfirm'
                    label='Подтверждение пороля *'
                    type='password'
                    margin='normal'
                    component={RenderFormTextField}
                    formStyle={classes.textField}
                />
                <Field
                    name='userName'
                    id='userName'
                    label='Имя'
                    component={RenderFormTextField}
                    formStyle={classes.textField}
                />
                <Field
                    name='userSurname'
                    id='userSurname'
                    label='Фамилия'
                    component={RenderFormTextField}
                    formStyle={classes.textField}
                />
                <Field
                    name='userPhone'
                    id='userPhone'
                    label='Телефон'
                    component={RenderFormTextField}
                    formStyle={classes.textField}
                />
                <div className={classes.buttonContainer}>
                    <Button
                        variant='raised'
                        color='primary'
                        className={classes.button}
                        type='submit'
                    >
                        Зарегистрироватсья
                    </Button>
                </div>
            </form>
        </Paper>
    </div>
);

RegistrationForm.propTypes = {
    classes: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func
};
RegistrationForm.defaultProps = {
    handleSubmit: {}
};

function mapStateToProps(state) {
    return {
        formValues: selector(state, ...fieldsArray)
    };
}

RegistrationForm = reduxForm({
    form: 'register',
    validate: validateRegistration(['login', 'email', 'password', 'passwordConfirm']),
    destroyOnUnmount: false
})(RegistrationForm);

export default withStyles(stylesJS)(connect(mapStateToProps)(RegistrationForm));
