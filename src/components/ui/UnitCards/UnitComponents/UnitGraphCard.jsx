import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';
import classNames from 'classnames';

import thermometerIcon from '../../../../assets/ThermometerGraph(64_64).png';
import humidityIcon from '../../../../assets/HumidityGraph(64_64).png';
import pressureIcon from '../../../../assets/PressureGraph(64_64).png';

const UnitGraphCard = ({ classes, unit, type }) => {
    const icons = {
        humidity: humidityIcon,
        temperature: thermometerIcon,
        pressure: pressureIcon
    };

    return (
        <Paper
            className={classNames(classes.graphPaper, classes[type])}
            square
        >
            <div className={classes.flexColumn}>
                <Typography className={classes.unitData} variant='body1'>
                    {`${unit[type].value}`}<span>{`${unit[type].units}`}</span>
                </Typography>
                <div className={classes.additionalData}>
                    <Typography variant='body1'>
                        Среднее значение
                    </Typography>
                    <Typography variant='body1'>
                        {`${unit[type].average} ${unit[type].units}`}
                    </Typography>
                </div>
            </div>
            <div className={classes.flexColumn}>
                <img src={icons[type]} alt='' />
            </div>
        </Paper>
    );
};

UnitGraphCard.propTypes = {
    classes: PropTypes.object,
    unit: PropTypes.object,
    type: PropTypes.string
};

UnitGraphCard.defaultProps = {
    classes: {},
    unit: {},
    type: ''
};

export default UnitGraphCard;
