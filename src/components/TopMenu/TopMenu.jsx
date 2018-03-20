import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Button, Typography } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';
import compose from 'recompose/compose';
import Hidden from 'material-ui/Hidden';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const stylesJS = theme => (
    {
        container: {
            width: '75%',
            margin: 'auto',
            [theme.breakpoints.down('xs')]: {
                width: '90%'

            }
        },
        link: {
            color: 'white'
        },
        flex: {
            flex: '1 0 auto'
        },
        root: {
            [theme.breakpoints.down('xs')]: {
            }
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
            <Hidden xsDown>
                <Link className={props.classes.link} to='/registration'>
                    <Button color='inherit'>Регистрация</Button>
                </Link>
                <Link className={props.classes.link} to='/login'>
                    <Button color='inherit'>Вход</Button>
                </Link>
            </Hidden>
            <Hidden smUp>
                <IconButton color='inherit' aria-label='Menu'>
                    <MenuIcon />
                </IconButton>
            </Hidden>
        </Toolbar>
    </AppBar>
);

TopMenu.propTypes = {
    classes: PropTypes.object.isRequired
};

export default compose(withStyles(stylesJS), withWidth())(TopMenu);
