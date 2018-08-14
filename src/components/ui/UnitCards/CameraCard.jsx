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
import { SettingsOutlined, PowerSettingsNew } from '@material-ui/icons';

import camera from '../../../assets/Camera(100_100).png';

import { getUnitState, noop } from '../../../utils/globalUtils';

import stylesJS from './stylesJSS/cardStyles';

const CameraCard = ({ classes, unit, onEdit }) => (
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
                        <PowerSettingsNew />
                    </Button>
                </div>
            </CardContent>
            <CardMedia
                className={classes.maediaImg}
                image={camera}
            />
        </Card>
    </Fragment>
);

CameraCard.propTypes = {
    classes: PropTypes.object.isRequired,
    unit: PropTypes.object,
    onEdit: PropTypes.func
};

CameraCard.defaultProps = {
    unit: {},
    onEdit: noop
};

export default withStyles(stylesJS)(CameraCard);
