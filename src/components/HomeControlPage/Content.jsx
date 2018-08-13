import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Paper, Zoom } from '@material-ui/core/';

import stylesJS from './stylesJSS/ContentStylesJS';

const Content = ({ classes }) => (
    <Zoom in>
        <Paper className={classes.container}>
            <Typography variant='display1'>Control Page</Typography>
        </Paper>
    </Zoom>
);

Content.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(stylesJS)(Content);
