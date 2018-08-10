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
import { SettingsOutlined, OfflineBolt } from '@material-ui/icons';

import lightningBlumb from '../../../assets/LightningBlumb(100_100).png';

import stylesJS from './stylesJSS/cardStyles';

const LightningBlumbCard = ({ classes, unit }) => (
    <Fragment>
    	<Card className={classes.smallCard}>
                <CardContent className={classes.smallCardContent}>
                    <div  className={classes.unitInfo}>
                        <Typography variant='body1' className={classes.unitTitle}>
                            {unit.unitName}
                        </Typography>
                        <Typography variant='subheading' color='textSecondary' className={classes.unitData}>
                            Включено
                        </Typography>
                    </div>
                    <div className={classes.cardActions}>
                        <Button variant="fab" mini color="primary" aria-label="Add" className={classes.cardActionButton}>
                            <SettingsOutlined />
                        </Button>
                        <Button variant="fab" mini color="primary" aria-label="Add" className={classes.cardActionButton}>
                            <OfflineBolt/>
                        </Button>
                    </div>
                </CardContent>
                <CardMedia
                    className={classes.maediaImg}
                    image={lightningBlumb}
                />
            </Card>
    </Fragment>
);

LightningBlumbCard.propTypes = {
    classes: PropTypes.object.isRequired,
    unit: PropTypes.object
};

LightningBlumbCard.defaultProps = {
    unit: {}
};

export default withStyles(stylesJS)(LightningBlumbCard);