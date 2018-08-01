import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core/';

import stylesJS from './stylesJSS/ContentStylesJS';

const Content = ({ classes }) => (
    <div className={classes.container}>
        <Typography variant='display1'>Control Page</Typography>
    </div>
);

Content.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(stylesJS)(Content);
