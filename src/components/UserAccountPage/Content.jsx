import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import stylesJS from './stylesJSS/ContentStylesJS';

const Content = ({ classes }) => (
    <div className={classes.container}>
        <Typography variant='display1'>Account page</Typography>
    </div>
);

Content.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(stylesJS)(Content);
