import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import stylesJS from './RegistrationFormStylesJS';
const RegistrationForm = ({ classes }) => (
    <div className={classes.container}>
        <Paper className={classes.paper}>
            <Typography variant='display1' align='center'>Регистрация</Typography>
            <form>
                <TextField
                    id='login'
                    label='Логин *'
                    placeholder='Login'
                    className={classes.textField}
                    margin='normal'
                />
                <TextField
                    id='eMail'
                    label='e-mail *'
                    placeholder='e-mail'
                    className={classes.textField}
                    margin='normal'
                />
                <TextField
                    id='password'
                    label='Пароль'
                    className={classes.textField}
                    type='password'
                    margin='normal'
                />
                <TextField
                    id='passwordConfirm'
                    label='Подтверждение пороля'
                    className={classes.textField}
                    type='password'
                    margin='normal'
                />
                <TextField
                    id='name'
                    label='Имя'
                    placeholder='Имя'
                    className={classes.textField}
                    margin='normal'
                />
                <TextField
                    id='surname'
                    label='Фамилия'
                    placeholder='Фамилия'
                    className={classes.textField}
                    margin='normal'
                />
                <TextField
                    id='phone'
                    label='Телефон'
                    type='tel'
                    placeholder='Телефон'
                    className={classes.textField}
                    margin='normal'
                />
            </form>
            <div className={classes.buttonContainer}>
                <Button
                    variant='raised'
                    color='primary'
                    className={classes.button}
                >
                    Зарегистрироватсья
                </Button>
            </div>
        </Paper>
    </div>
);

RegistrationForm.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(stylesJS)(RegistrationForm);
