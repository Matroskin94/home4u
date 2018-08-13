import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Typography, Divider } from '@material-ui/core/';

import ThermometerCard from '../../ui/UnitCards/ThermometerCard.jsx';
import LightningBlumbCard from '../../ui/UnitCards/LightningBlumbCard.jsx';

import stylesJS from '../stylesJSS/ControlPanelStylesJS';

import floorMock from '../../UserHousePage/PageComponents/floorMock';

const ControlPanel = ({ classes }) => (
    <div className={classes.controlPanelContainer}>
        <Typography variant='caption' className={classes.roomTitle}>Моя квартира</Typography>
        <Divider />
        <div className={classes.floorContainer}>
            <ThermometerCard unit={floorMock.floorUnits[0]} />
            <LightningBlumbCard unit={floorMock.floorUnits[1]} />
        </div>
    </div>
);

ControlPanel.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(stylesJS)(ControlPanel);
