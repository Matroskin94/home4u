import React from 'react';
import PropTypes from 'prop-types';

import {
    Typography,
    Divider
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import ThermometerCard from '../../ui/UnitCards/ThermometerCard.jsx';
import LightningBlumbCard from '../../ui/UnitCards/LightningBlumbCard.jsx';
import CameraCard from '../../ui/UnitCards/CameraCard.jsx';

import { noop } from '../../../utils/globalUtils';

import stylesJS from '../stylesJSS/roomStyles';

import floorMock from './floorMock';
/*
    - Название
    - Состояние
    - Кнопка действия
    - Кнопка действия для перехода на страницу устройства
*/
const Floor = ({ classes, handleEditUnit }) => (
    <div>
        <Typography variant='caption' className={classes.roomTitle}>Этаж 1 - Прихожая</Typography>
        <Divider />
        <div className={classes.floorContainer}>
            <ThermometerCard onEdit={handleEditUnit} unit={floorMock.floorUnits[0]} />
            <LightningBlumbCard onEdit={handleEditUnit} unit={floorMock.floorUnits[1]} />
            <CameraCard onEdit={handleEditUnit} unit={floorMock.floorUnits[2]} />
        </div>
        <Typography variant='caption' className={classes.roomTitle}>Этаж 1 - Кухня</Typography>
        <Divider />
        <div className={classes.floorContainer}>
            <LightningBlumbCard onEdit={handleEditUnit} unit={floorMock.floorUnits[1]} />
            <ThermometerCard onEdit={handleEditUnit} unit={floorMock.floorUnits[0]} />
        </div>
    </div>
);

Floor.propTypes = {
    classes: PropTypes.object.isRequired,
    handleEditUnit: PropTypes.func
};

Floor.defaultProps = {
    handleEditUnit: noop
};

export default withStyles(stylesJS)(Floor);
