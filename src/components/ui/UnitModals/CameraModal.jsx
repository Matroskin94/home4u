import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core/';

import stylesJS from './styles/CameraCardStyles';

const CameraModal = ({ classes, unit }) => (
    <Fragment>
        <Paper className={classes.cameraCard}>
            <div className={classes.header}>
                <Typography align='center' variant='display1'>Онлайн трансляция</Typography>
            </div>
            <div className={classes.playerWrapper}>
                <ReactPlayer
                    url='https://youtu.be/P9qjE1dm75A'
                    playing
                    width='100%'
                    height='100%'
                    className={classes.reactPlayer}
                />
            </div>
        </Paper>
        <Paper className={classes.infoContainer}>
            <div className={classes.header}>
                <Typography align='center' variant='display1'>Информация</Typography>
            </div>
            <div className={classes.cameraInfo}>
                <Typography variant='body2'>Название устройства: {unit.unitName}</Typography>

            </div>
        </Paper>
    </Fragment>
);

CameraModal.propTypes = {
    classes: PropTypes.object.isRequired,
    unit: PropTypes.object
};

CameraModal.defaultProps = {
    unit: {}
};

export default withStyles(stylesJS)(CameraModal);
