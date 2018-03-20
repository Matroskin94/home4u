import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Button, Typography } from 'material-ui';
import { withStyles } from 'material-ui/styles';

const stylesJS = theme => (
    {
        container: {
            width: '75%',
            margin: 'auto'
        },
        link: {
            color: 'white'
        },
        flex: {
            flex: 1
        }
    }
);

const TopMenu = props => (
    <AppBar position='static'>
        <Toolbar className={props.classes.container}>
            <Typography
                variant='title'
                color='inherit'
                className={props.classes.flex}
            >
                <Link className={props.classes.link} to='/'>Home4U</Link>
            </Typography>
            <Link className={props.classes.link} to='/registration'>
                <Button color='inherit'>Регистрация</Button>
            </Link>
            <Link className={props.classes.link} to='/login'>
                <Button color='inherit'>Вход</Button>
            </Link>
        </Toolbar>
    </AppBar>
);

TopMenu.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(stylesJS)(TopMenu);
