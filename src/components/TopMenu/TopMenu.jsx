import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import compose from 'recompose/compose';
import Hidden from '@material-ui/core/Hidden';

import logoIcon from '../../assets/logo(24).png';

import stylesJS from './topMenuStylesJS';
import MenuItem from './MenuItems/MenuItem.jsx';
import HiddenMenu from './HiddenMenu.jsx';

import ROUTES from '../../constants/routes';

class TopMenu extends PureComponent {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        menuItems: PropTypes.array
    };

    static defaultProps = {
        menuItems: []
    };

    render() {
        const { classes } = this.props;

        return (
            <AppBar position='fixed'>
                <Toolbar className={classes.container}>
                    <Link className={classes.link} to={ROUTES.MY_HOME}>
                        <img
                            src={logoIcon}
                            alt='Home4U'
                            className={classes.logoIcon}
                        />
                    </Link>
                    <Typography
                        variant='title'
                        color='inherit'
                        className={this.props.classes.flex}
                    >
                        <Link className={classes.link} to={ROUTES.MY_HOME}>Home4U</Link>
                    </Typography>
                    <Hidden smDown>
                        {this.props.menuItems.map(item => (
                            <MenuItem
                                key={`${item.itemText}nothidden`}
                                item={item}
                                style={this.props.classes}
                            />
                        ))}
                    </Hidden>
                    <HiddenMenu menuItems={this.menuItems} />
                </Toolbar>
            </AppBar>
        );
    }
}

export default compose(withStyles(stylesJS), withWidth())(TopMenu);
