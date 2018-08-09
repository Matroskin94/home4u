import React from 'react';
import PropTypes from 'prop-types';

import {
    Typography,
    Divider,
    Card,
    CardContent,
    CardMedia,
    Switch
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import thermometer from '../../../assets/Thermometer(100_100).png';
import lightningBlumb from '../../../assets/LightningBlumb(100_100).png';

import stylesJS from '../stylesJSS/roomStyles';

const Room = ({ classes }) => (
    <div>
        <Typography variant='caption'>Этаж1 - Прихожая</Typography>
        <Divider />
        <div className={classes.floorContainer}>
            <Card className={classes.smallCard}>
                <CardContent className={classes.smallCardContent}>
                    <Typography variant='title'>Температура в квартире</Typography>
                    <Typography variant='subheading' color='textSecondary'>
                        22&deg;
                    </Typography>
                </CardContent>
                <CardMedia
                    className={classes.maediaImg}
                    image={thermometer}
                />
            </Card>
            <Card className={classes.smallCard}>
                <div className={classes.details}>
                    <CardContent className={classes.smallCardContent}>
                        <Typography variant='title'>Освещение в прихожей</Typography>
                        <Typography variant='subheading' color='textSecondary'>
                            Переключатель
                        </Typography>
                    </CardContent>
                </div>
                <CardMedia
                    className={classes.maediaImg}
                    image={lightningBlumb}
                />
            </Card>

        </div>
    </div>
);

Room.propTypes = {
    classes: PropTypes.object.isRequired
};

/* Room.defaultProps = {
    isMenuOpened: true,
    floors: []
}; */

export default withStyles(stylesJS)(Room);
