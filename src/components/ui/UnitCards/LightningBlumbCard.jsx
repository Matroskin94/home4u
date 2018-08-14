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

import { getUnitState, noop } from '../../../utils/globalUtils';

import stylesJS from './stylesJSS/cardStyles';

const LightningBlumbCard = ({ classes, unit, onEdit }) => (
    <Fragment>
        <Card className={classes.smallCard}>
            <CardContent className={classes.smallCardContent}>
                <div className={classes.unitInfo}>
                    <Typography variant='body1' className={classes.unitTitle}>
                        {unit.unitName}
                    </Typography>
                    <Typography
                        variant='subheading'
                        color='textSecondary'
                        className={classes.unitData}
                    >
                        {getUnitState(unit.isOn)}
                    </Typography>
                </div>
                <div className={classes.cardActions}>
                    <Button
                        variant='fab'
                        mini
                        color='primary'
                        aria-label='Add'
                        className={classes.cardActionButton}
                        onClick={onEdit(unit)}
                    >
                        <SettingsOutlined />
                    </Button>
                    <Button
                        variant='fab'
                        mini
                        color='primary'
                        aria-label='Add'
                        className={classes.cardActionButton}
                    >
                        <OfflineBolt />
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
    unit: PropTypes.object,
    onEdit: PropTypes.func
};

LightningBlumbCard.defaultProps = {
    unit: {},
    onEdit: noop
};

export default withStyles(stylesJS)(LightningBlumbCard);
