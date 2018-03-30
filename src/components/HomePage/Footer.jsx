import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import stylesJS from './stylesJSS/FooterStylesJS';

const Footer = props => (
    <AppBar position='static' className={props.classes.footer}>
        <Toolbar className={props.classes.container}>
            <Typography color='inherit'>Copyright © 2017-2018 All rights reserved</Typography>
        </Toolbar>
    </AppBar>
);

Footer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(stylesJS)(Footer);
