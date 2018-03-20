import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { MenuList, MenuItem } from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
import { ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { Typography } from 'material-ui';
import stylesCSS from './TopMenu.css';
import Hidden from 'material-ui/Hidden';

const stylesJS = theme => ({
    container: {
        position: 'absolute',
        zIndex: 1200,
        width: '160px',
        height: '100vh',
        background: 'rgba(26,35,126, 0.95)',
        right: 0
    },
    menuItem: {
        '&:focus': {
            'backgroundColor': theme.palette.primary.main,
            '& $primary': {
                color: theme.palette.common.white
            }
        }
    },
    paperStyle: {
        width: '75%'
    },
    primary: {}
});

const HiddenMenu = ({ classes }) => (
    <Hidden smUp>
        <input
            type='checkbox'
            id='hmt'
            className={stylesCSS.hiddenMenuTicker}
        />
        <label htmlFor='hmt' className={stylesCSS.btnMenu}>
            <span className={stylesCSS.first} />
            <span className={stylesCSS.second} />
            <span className={stylesCSS.third} />
        </label>
        <div className={stylesCSS.hiddenMenu}>
            <Paper classes={stylesJS.paperStyle}>
                <MenuList>
                    <MenuItem className={classes.menuItem}>
                        <ListItemText>
                            <Link to='/login'>
                                <Typography align='right'>
                                    Вход
                                </Typography>
                            </Link>
                        </ListItemText>
                    </MenuItem>
                    <Divider />
                    <MenuItem className={classes.menuItem}>
                        <ListItemText>
                            <Link to='/registration'>
                                <Typography align='right'>
                                    Регистрация
                                </Typography>
                            </Link>
                        </ListItemText>
                    </MenuItem>
                </MenuList>
            </Paper>
        </div>
    </Hidden>
);

HiddenMenu.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(stylesJS)(HiddenMenu);
