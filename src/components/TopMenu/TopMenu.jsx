import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';
import compose from 'recompose/compose';
import Hidden from 'material-ui/Hidden';
import stylesJS from './topMenuStylesJS';
import MenuItem from './MenuItems/MenuItem.jsx';

class TopMenu extends PureComponent {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        menuItems: PropTypes.array
    };

    static defaultProps = {
        menuItems: []
    };

    render() {
        return (
            <AppBar position='static'>
                <Toolbar className={this.props.classes.container}>
                    <Typography
                        variant='title'
                        color='inherit'
                        className={this.props.classes.flex}
                    >
                        <Link className={this.props.classes.link} to='/myhome'>Home4U</Link>
                    </Typography>
                    <Hidden xsDown>
                        {this.props.menuItems.map(item => (
                            <MenuItem
                                key={`${item.itemText}nothidden`}
                                item={item}
                                style={this.props.classes}
                            />
                        ))}
                    </Hidden>
                </Toolbar>
            </AppBar>
        );
    }
}

export default compose(withStyles(stylesJS), withWidth())(TopMenu);
