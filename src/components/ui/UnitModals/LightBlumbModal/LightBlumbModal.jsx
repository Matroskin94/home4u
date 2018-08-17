import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core/';

import stylesJS from '../styles/CommonStyles';

const LightBlumbModal = ({ classes, unit }) => (
    <Paper className={classes.container}>
        <Typography variant='display1'>LightBlumbModal</Typography>
    </Paper>
);

LightBlumbModal.propTypes = {
    classes: PropTypes.object.isRequired,
    unit: PropTypes.object
};

LightBlumbModal.defaultProps = {
    unit: {}
};

export default withStyles(stylesJS)(LightBlumbModal);
