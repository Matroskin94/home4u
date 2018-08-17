import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core/';

import UnitGraphCard from '../../UnitCards/UnitComponents/UnitGraphCard.jsx';

// import humidityIcon from '../../../../assets/HumidityGraph(64_64).png';
// import pressureIcon from '../../../../assets/PressureGraph(64_64).png';

import { MESURE_TYPES } from '../../../../constants/constants';

import stylesJS from '../styles/ThermometerCardStyles';

const ThermometerModal = ({ classes, unit }) => (
    <Fragment>
        <Paper className={classes.leftSide}>
            <Typography variant='display1'>Показания датчика</Typography>
            <div className={classes.flexRow}>
                <UnitGraphCard
                    classes={classes}
                    unit={unit}
                    type={MESURE_TYPES.TEMPERATURE}
                />
                <UnitGraphCard
                    classes={classes}
                    unit={unit}
                    type={MESURE_TYPES.HUMIDITY}
                />
                <UnitGraphCard
                    classes={classes}
                    unit={unit}
                    type={MESURE_TYPES.PRESSURE}
                />
            </div>
        </Paper>
        <Paper className={classes.rightSide}>
            <Typography variant='display1'>Информация показателя</Typography>
        </Paper>
    </Fragment>
);

ThermometerModal.propTypes = {
    classes: PropTypes.object.isRequired,
    unit: PropTypes.object
};

ThermometerModal.defaultProps = {
    unit: {}
};

export default withStyles(stylesJS)(ThermometerModal);
