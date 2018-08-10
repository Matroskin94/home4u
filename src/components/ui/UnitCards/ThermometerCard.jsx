import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import {
    Typography,
    Card,
    CardContent,
    CardMedia,
    Button,
    withStyles
} from '@material-ui/core';
import { SettingsOutlined } from '@material-ui/icons';

import thermometer from '../../../assets/Thermometer(100_100).png';

import stylesJS from './stylesJSS/cardStyles';

const ThermometerCard = ({ classes, unit }) => (
    <Fragment>
    	<Card className={classes.smallCard}>
                <CardContent className={classes.smallCardContent}>
                    <div className={classes.unitInfo}>
                        <Typography variant='body1' className={classes.unitTitle}>
                        {unit.unitName}
                        </Typography>
                        <Typography variant='subheading' color='textSecondary' className={classes.unitData}>
                            {`Температура: ${unit.temperature}`}&deg;
                        </Typography>
                        <Typography variant='subheading' color='textSecondary' className={classes.unitData}>
                            {`Влажность: ${unit.humidity}%`}
                        </Typography>
                    </div>
                    <div className={classes.cardActions}>
                        <Button variant="fab" mini color="primary" aria-label="Add" className={classes.cardActionButton}>
                            <SettingsOutlined />
                        </Button>
                    </div>
                </CardContent>
                <CardMedia
                    className={classes.maediaImg}
                    image={thermometer}
                />
            </Card>
    </Fragment>
);

ThermometerCard.propTypes = {
    classes: PropTypes.object.isRequired,
    unit: PropTypes.object
};

ThermometerCard.defaultProps = {
    unit: {}
};

export default withStyles(stylesJS)(ThermometerCard);