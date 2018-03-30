import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';
import compose from 'recompose/compose';
import Hidden from 'material-ui/Hidden';
import stylesJS from './topMenuStylesJS';
import MenuItem from './MenuItems/MenuItem.jsx';

const TopMenu = ({ classes, menuItems }) => (
    <AppBar position='static'>
        <Toolbar className={classes.container}>
            <Typography
                variant='title'
                color='inherit'
                className={classes.flex}
            >
                <Link className={classes.link} to='/'>Home4U</Link>
            </Typography>
            <Hidden xsDown>
                {menuItems.map(item => (
                    <MenuItem
                        key={`${item.itemText}nothidden`}
                        item={item}
                        style={classes}
                    />
                ))}
            </Hidden>
        </Toolbar>
    </AppBar>
);

TopMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    menuItems: PropTypes.array
};

TopMenu.defaultProps = {
    menuItems: []
};

export default compose(withStyles(stylesJS), withWidth())(TopMenu);
