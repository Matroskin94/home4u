import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
    withStyles,
    Zoom,
    Typography,
    AppBar,
    Toolbar,
    IconButton,
    Paper
} from '@material-ui/core';
import { Menu, ChevronLeft } from '@material-ui/icons';

import changeHistory from '../HOC/ChangeHistory.jsx';
import MenuDrawer from './PageComponents/MenuDrawer.jsx';
import Room from './PageComponents/Room.jsx';

import { noop } from '../../utils/globalUtils';

import { STATE_FIELDS } from '../../constants/constants';

import stylesJS from './stylesJSS/stylesJS';

import floors from './mockData';

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
        houseId: this.props.getURLParams().id,
        [STATE_FIELDS.FLOORS_MENU_OPEN]: true
    }

    toggleStateField = fieldName => () => {
        this.setState(prevState => ({
            [fieldName]: !prevState[fieldName]
        }));
    }

    render() {
        const { classes } = this.props;
        const { [STATE_FIELDS.FLOORS_MENU_OPEN]: isMenuOpened } = this.state;

        return (
            <Zoom in>
                <Paper className={classes.container}>
                    <Typography variant='title'>{`House id ${this.state.houseId}`}</Typography>
                    <div className={classes.appFrame}>
                        <AppBar
                            position='static'
                            className={classNames(classes.appBar, {
                                [classes.appBarShift]: isMenuOpened,
                                [classes.appBarShiftLeft]: isMenuOpened
                            })}
                        >
                            <Toolbar variant='dense'>
                                <IconButton
                                    className={classes.menuButton}
                                    color='inherit'
                                    aria-label='Menu'
                                    onClick={this.toggleStateField(STATE_FIELDS.FLOORS_MENU_OPEN)}
                                >
                                    {!isMenuOpened ? (<Menu />) : (<ChevronLeft />)}
                                </IconButton>
                                <Typography variant='title' color='inherit'>
                                    Устройства
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <MenuDrawer isMenuOpened={isMenuOpened} floors={floors} />
                        <main
                            className={classNames(classes.content, {
                                [classes.contentLeft]: !isMenuOpened,
                                [classes.contentShift]: isMenuOpened,
                                [classes.contentShiftLeft]: isMenuOpened
                            })}
                        >
                            <div className={classes.drawerHeader} />
                            <Room />
                        </main>
                    </div>
                </Paper>
            </Zoom>
        );
    }
}

export default withStyles(stylesJS)(Content);
