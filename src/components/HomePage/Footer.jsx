import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar } from 'material-ui';
import { withStyles } from 'material-ui/styles';

const stylesJS = theme => (
    {
        container: {
            width: '75%',
            margin: 'auto'
        },
        footer: {
            top: 'auto',
            bottom: 0,
            height: 64
        }
    }
);

const Footer = props => (
    <div>
        <AppBar className={props.classes.footer}>
            <Toolbar className={props.classes.container}>
                <p>Copyright © 2017-2018 All rights reserved</p>
            </Toolbar>
        </AppBar>
    </div>
);

Footer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(stylesJS)(Footer);
