import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';

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
import Floor from './PageComponents/Floor.jsx';
import ModalFullScreen from '../ui/ModalFullScreen/ModalFullScreen.jsx';
import { ThermometerModal, LightBlumbModal, CameraModal } from '../ui/UnitModals';

import { noop } from '../../utils/globalUtils';

import { STATE_FIELDS, UNIT_TYPES } from '../../constants/constants';

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
        // houseId: this.props.getURLParams().id,
        [STATE_FIELDS.FLOORS_MENU_OPEN]: true,
        [STATE_FIELDS.FULL_SCREEN_MODAL_OPEN]: false,
        activeModal: '',
        activeUnit: {}
    }

    toggleStateField = fieldName => () => {
        this.setState(prevState => ({
            [fieldName]: !prevState[fieldName]
        }));
    }

    toggleModal = unit => () => {
        this.setState(prevState => ({
            [STATE_FIELDS.FULL_SCREEN_MODAL_OPEN]: !prevState[STATE_FIELDS.FULL_SCREEN_MODAL_OPEN],
            activeModal: unit.unitType,
            activeUnit: unit
        }));
    }

    renderModal = () => { // TODO: Вынести в отдельный файл CardModal вместе с JSX модалки
        const { activeModal, activeUnit } = this.state;

        switch (activeModal) {
            case UNIT_TYPES.CAMERA: {
                return (<CameraModal unit={activeUnit} />);
            }

            case UNIT_TYPES.THERMOMETER: {
                return (<ThermometerModal unit={activeUnit} />);
            }

            case UNIT_TYPES.LIGHT_BULB: {
                return (<LightBlumbModal />);
            }

            default: {
                return <Typography>Modal error!</Typography>;
            }
        }
    }

    render() {
        const { classes } = this.props;
        const {
            [STATE_FIELDS.FLOORS_MENU_OPEN]: isMenuOpened,
            [STATE_FIELDS.FULL_SCREEN_MODAL_OPEN]: isModalOpened,
            activeUnit
        } = this.state;

        return (
            <Zoom in>
                <Paper className={classes.container}>
                    <Typography
                        onClick={this.toggleStateField(STATE_FIELDS.FULL_SCREEN_MODAL_OPEN)}
                        variant='title'
                    >
                        Моя квартира
                    </Typography>
                    <Typography variant='caption' gutterBottom>Витебск, пр. Фрунзе, д.35, кв.23</Typography>
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
                            <Floor handleEditUnit={this.toggleModal} />
                        </main>
                    </div>
                    <ModalFullScreen
                        title={activeUnit.unitName}
                        isOpen={isModalOpened}
                        onClose={this.toggleStateField(STATE_FIELDS.FULL_SCREEN_MODAL_OPEN)}
                    >
                        {this.renderModal()}
                    </ModalFullScreen>
                </Paper>
            </Zoom>
        );
    }
}

function mapStateToProps(state) {
    return {
        /* userInfo: state.profileReducer,
        isPartialFetching: state.networkReducer.isPartialFetching,
        isFetching: state.networkReducer.isFetching,
        userHouses: state.houseReducer.userHouses */
    };
}

function mapDispatchToProps(dispatch) {
    return {
        /* getHouses: () => dispatch(getHousesRequest()),
        editUser: userInfo => dispatch(editProfileRequest(userInfo)),
        addHouse: houseInfo => dispatch(addHouseRequest(houseInfo)) */
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(stylesJS)(Content));
