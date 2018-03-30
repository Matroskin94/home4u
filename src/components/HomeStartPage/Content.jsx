import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { Typography } from 'material-ui';
import PropTypes from 'prop-types';
import stylesJS from './stylesJSS/ContentStylesJS';

const Content = ({ classes }) => (
    <div className={classes.container}>
        <Typography variant='display1'>Hello smart house</Typography>
    </div>
);

Content.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(stylesJS)(Content);
