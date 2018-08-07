import React, { PureComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import
{
    Paper,
    withStyles,
    TextField,
    Typography,
    Button,
    IconButton,
    Input,
    InputLabel,
    InputAdornment,
    Zoom
} from '@material-ui/core';
import
{
    LockOutlined,
    AssignmentInd,
    Visibility,
    VisibilityOff
} from '@material-ui/icons';
import FormControl from '@material-ui/core/FormControl';

import Preloader from '../ui/Preloader/Preloader.jsx';

import stylesJS from './LoginFormStylesJS';
import loginHOC from './LoginHOC.jsx';
import { noop } from '../../utils/globalUtils';

@loginHOC()
class LogInForm extends PureComponent {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        onEnterClick: PropTypes.func, // Функция из LoginHOC для авторизации пользователя
        isFetching: PropTypes.bool // Переменная ожидания ответа от сервера
    };
    static defaultProps = {
        onEnterClick: noop,
        isFetching: false
    };
    state = {
        password: '',
        userName: '',
        isProfileError: false,
        showPassword: false
    };

    handleChange = prop => event => {
        this.setState({
            isProfileError: false,
            [prop]: event.target.value
        });
    };

    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    handleClickShowPasssword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };

    handleEnterClick = () => {
        const { password, userName } = { ...this.state };

        this.props.onEnterClick({ password, userName }).catch(error => {
            this.setState({ isProfileError: true });
        });
    }

    renderError = () => {
        const { classes } = this.props;
        const { isProfileError } = this.state;

        return (
            <Zoom in={isProfileError}>
                <div className={classes.errorContainer}>
                    <Typography color='error' variant='caption'>Неверный логин или пароль</Typography>
                    <Link to='#'>
                        <Typography className={classes.restorePassword} variant='caption'>
                            Восстановить пароль
                        </Typography>
                    </Link>
                </div>
            </Zoom>
        );
    }


    render() {
        const { classes, isFetching } = this.props;

        return (
            <Fragment>
                <div className={classes.container}>
                    <Paper className={classes.paper}>
                        <Typography variant='display1' align='center'>Вход</Typography>
                        <div className={classes.flexContainer}>
                            <AssignmentInd className={classes.icon} />
                            <TextField
                                id='userName'
                                label='Введите логин'
                                placeholder=''
                                className={classes.textField}
                                margin='normal'
                                required
                                onChange={this.handleChange('userName')}
                            />
                        </div>

                        <div className={classes.flexContainer}>
                            <LockOutlined className={classes.icon} />
                            <FormControl margin='normal' className={classes.textField}>

                                <InputLabel htmlFor='loginPassword'>Password</InputLabel>
                                <Input
                                    id='loginPassword'
                                    type={this.state.showPassword ? 'text' : 'password'}
                                    value={this.state.password}
                                    onChange={this.handleChange('password')}
                                    required
                                    endAdornment={
                                        <InputAdornment position='end'>
                                            <IconButton
                                                onClick={this.handleClickShowPasssword}
                                                onMouseDown={this.handleMouseDownPassword}
                                            >
                                                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>
                        {this.renderError()}
                        <div className={classes.flexContainer}>
                            <Button
                                variant='raised'
                                color='primary'
                                className={classes.button}
                                onClick={this.handleEnterClick}
                            >
                                Войти
                            </Button>
                        </div>
                    </Paper>
                </div>
                <Preloader show={isFetching} />
            </Fragment>);
    }
}

export default withStyles(stylesJS)(LogInForm);
