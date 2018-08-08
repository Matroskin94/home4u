import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
    withStyles,
    Zoom,
    Paper,
    Typography
} from '@material-ui/core';

import changeHistory from '../HOC/ChangeHistory.jsx';

import { noop } from '../../utils/globalUtils';

import stylesJS from './stylesJSS/stylesJS';

@changeHistory()
class Content extends PureComponent {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        getURLParams: PropTypes.func
    };

    static defaultProps = {
        getURLParams: noop
    };

    state = {
        houseId: this.props.getURLParams().id
    }

    render() {
        const { classes } = this.props;

        return (
            <Zoom in>
                <Paper className={classes.container}>
                    <Typography variant='display1'>{`House id ${this.state.houseId}`}</Typography>
                </Paper>
            </Zoom>
        );
    }
}

export default withStyles(stylesJS)(Content);
