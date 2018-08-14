import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core/';

import stylesJS from './styles/CommonStyles';

const CameraModal = ({ classes, unit }) => (
    <Paper className={classes.container}>
        <Typography variant='display1'>CameraModal</Typography>
    </Paper>
);

CameraModal.propTypes = {
    classes: PropTypes.object.isRequired,
    unit: PropTypes.object
};

CameraModal.defaultProps = {
    unit: {}
};

export default withStyles(stylesJS)(CameraModal);
