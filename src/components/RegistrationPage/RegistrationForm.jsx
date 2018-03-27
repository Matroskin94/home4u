import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import stylesJS from './RegistrationFormStylesJS';
import validate from '../../utils/validateForm';
import RenderTextField from './RenderTextField.jsx';

const selector = formValueSelector('register');
const fieldsArray = ['login', 'email', 'password', 'passwordConfirm', 'name', 'surname', 'phone'];
const sentRequest = values => {
    console.log(values);
};

function mapStateToProps(state) {
    return {
        formValues: selector(state, ...fieldsArray)
    };
}

let RegistrationForm = ({
    classes,
    pristine,
    submitting,
    handleSubmit
}) => (
    <div className={classes.container}>
        <Paper className={classes.paper}>
            <Typography variant='display1' align='center'>Регистрация</Typography>
            <form name='registerForm' onSubmit={handleSubmit(sentRequest)}>
                <Field
                    name='login'
                    id='login'
                    placeholder='Login'
                    label='Логин *'
                    component={RenderTextField}
                    formStyle={classes.textField}
                />
                <Field
                    name='email'
                    id='eMail'
                    label='e-mail *'
                    placeholder='e-mail *'
                    margin='normal'
                    component={RenderTextField}
                    formStyle={classes.textField}
                />
                <Field
                    name='password'
                    id='password'
                    label='Пароль'
                    type='password'
                    margin='normal'
                    component={RenderTextField}
                    formStyle={classes.textField}
                />
                <Field
                    name='passwordConfirm'
                    id='passwordConfirm'
                    label='Подтверждение пороля'
                    type='password'
                    margin='normal'
                    component={RenderTextField}
                    formStyle={classes.textField}
                />
                <TextField
                    name='name'
                    id='name'
                    label='Имя'
                    placeholder='Имя'
                    className={classes.textField}
                    margin='normal'
                />
                <TextField
                    name='surname'
                    id='surname'
                    label='Фамилия'
                    placeholder='Фамилия'
                    className={classes.textField}
                    margin='normal'
                />
                <TextField
                    name='phone'
                    id='phone'
                    label='Телефон'
                    type='tel'
                    placeholder='Телефон'
                    className={classes.textField}
                    margin='normal'
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
    pristine: PropTypes.bool,
    submitting: PropTypes.bool,
    handleSubmit: PropTypes.func
};
RegistrationForm.defaultProps = {
    pristine: false,
    submitting: false,
    handleSubmit: {}
};

RegistrationForm = reduxForm({
    form: 'register',
    validate
})(RegistrationForm);

export default withStyles(stylesJS)(connect(mapStateToProps)(RegistrationForm));
