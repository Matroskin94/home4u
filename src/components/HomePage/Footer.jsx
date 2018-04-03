import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import stylesJS from './stylesJSS/FooterStylesJS';

class Footer extends PureComponent {
    static propTypes = {
        classes: PropTypes.object.isRequired
    };
    render() {
        return (
            <AppBar position='static' className={this.props.classes.footer}>
                <Toolbar className={this.props.classes.container}>
                    <Typography color='inherit'>Copyright © 2017-2018 All rights reserved</Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(stylesJS)(Footer);
