import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core/';

import stylesJS from './styles/CommonStyles';

const ThermometerModal = ({ classes, unit }) => (
    <Paper className={classes.container}>
        <Typography variant='display1'>ThermometerModal</Typography>
    </Paper>
);

ThermometerModal.propTypes = {
    classes: PropTypes.object.isRequired,
    unit: PropTypes.object
};

ThermometerModal.defaultProps = {
    unit: {}
};

export default withStyles(stylesJS)(ThermometerModal);
