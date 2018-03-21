import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const stylesJS = theme => ({
    root: {
        padding: 16,
        margin: '15vh auto',
        width: '50vw',
        maxWidth: '540px',
        [theme.breakpoints.down('xs')]: {
            width: '90%'
        }
    },
    buttonContainer: {
        display: 'flex'
    },
    button: {
        margin: '5px auto'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '45%'
    }
});

const RegistrationForm = ({ classes }) => (
    <Paper className={classes.root}>
        <Link to=''>Назад</Link>
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
);

RegistrationForm.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(stylesJS)(RegistrationForm);
