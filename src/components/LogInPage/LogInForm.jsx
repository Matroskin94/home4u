import React, { PureComponent } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { LockOutline, AssignmentInd } from 'material-ui-icons';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import IconButton from 'material-ui/IconButton';
import stylesJS from './LoginFormStylesJS';

class LogInForm extends PureComponent {
    static propTypes = {
        classes: PropTypes.object.isRequired
    };
    state = {
        password: '',
        showPassword: '',
        userLogin: ''
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
                                onChange={this.handleChange('password')}
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
                        >
                            Войти
                        </Button>
                    </div>
                </Paper>
            </div>);
    }
}

export default withStyles(stylesJS)(LogInForm);
