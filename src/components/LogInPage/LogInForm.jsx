import React, { PureComponent } from 'react';

import
{
    Paper, withStyles, TextField, Typography, Button,
    IconButton
} from 'material-ui';
import
{
    LockOutline, AssignmentInd, Visibility,
    VisibilityOff
} from 'material-ui-icons';

import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import PropTypes from 'prop-types';

import stylesJS from './LoginFormStylesJS';
import loginHOC from './LoginHOC.jsx';
import { noop } from '../../utils/globalUtils';

@loginHOC()
class LogInForm extends PureComponent {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        onEnterClick: PropTypes.func
    };
    static defaultProps = {
        onEnterClick: noop
    };
    state = {
        userPassword: '',
        userLogin: '',
        showPassword: false
    };

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    handleClickShowPasssword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };

    handleEnterClick = () => {
        const { userPassword, userLogin } = { ...this.state };

        console.log(this.state);
        this.props.onEnterClick({ userPassword, userLogin });
    }


    render() {
        const { classes } = this.props;

        return (
            <div className={classes.container}>
                <Paper className={classes.paper}>
                    <Typography variant='display1' align='center'>Вход</Typography>
                    <div className={classes.flexContainer}>
                        <AssignmentInd className={classes.icon} />
                        <TextField
                            id='userLogin'
                            label='Введите логин'
                            placeholder='Логин'
                            className={classes.textField}
                            margin='normal'
                            onChange={this.handleChange('userLogin')}
                        />
                    </div>

                    <div className={classes.flexContainer}>
                        <LockOutline className={classes.icon} />
                        <FormControl margin='normal' className={classes.textField}>

                            <InputLabel htmlFor='loginPassword'>Password</InputLabel>
                            <Input
                                id='loginPassword'
                                type={this.state.showPassword ? 'text' : 'password'}
                                value={this.state.password}
                                onChange={this.handleChange('userPassword')}
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
            </div>);
    }
}

export default withStyles(stylesJS)(LogInForm);
