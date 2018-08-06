import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import {
    Divider,
    Typography,
    Paper,
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    Zoom
} from '@material-ui/core';
import { AccountCircle, ViewQuilt } from '@material-ui/icons';

import ProfileInfo from './PageComponents/ProfileInfo.jsx';
import FormModal from './Modals/FormModal.jsx';
import Preloader from '../ui/Preloader/Preloader.jsx';
import HouseInfo from './PageComponents/HouseInfo.jsx';

import { editProfileRequest } from './UserAccountActions';
import { addHouseRequest } from '../../services/actions/HouseActions';
import { noop } from '../../utils/globalUtils';

import { EDIT_PROFILE, ADD_HOUSE } from '../../constants/constants';

import stylesJS from './stylesJSS/ContentStylesJS';

class Content extends PureComponent {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        resetForm: PropTypes.func,
        userInfo: PropTypes.object,
        isFetching: PropTypes.bool,
        userHouses: PropTypes.array,
        editUser: PropTypes.func,
        addHouse: PropTypes.func
    };

    static defaultProps = {
        userInfo: {
            name: '',
            surname: '',
            phone: '',
            email: '',
            userLogin: ''
        },
        resetForm: noop,
        editUser: noop,
        addHouse: noop,
        userHouses: [],
        isFetching: false
    };

    state = {
        openModals: {
            [EDIT_PROFILE]: false
        }
    };

    onProfileChangesSave = values => this.props.editUser(values);

    onAddHouse = values => this.props.addHouse(values);

    toggleModal = modalName => {
        this.setState(prevState => ({
            ...prevState,
            openModals: {
                ...prevState.openModals,
                [modalName]: !prevState.openModals[modalName]
            }
        }));
    }

    render() {
        const {
            classes,
            userInfo,
            isFetching,
            userHouses
        } = this.props;
        const { openModals } = this.state;

        return (
            <Fragment>
                <Zoom in>
                    <Paper className={classes.container}>
                        <Typography variant='display1'>Личный кабинет</Typography>
                        <div className={classes.accountControls}>
                            <ExpansionPanel>
                                <ExpansionPanelSummary>
                                    <AccountCircle className={classes.icon} />
                                    <Typography className={classes.panelHeader}> Персональная информация </Typography>
                                </ExpansionPanelSummary>
                                <Divider />
                                <ExpansionPanelDetails className={classes.panelContainer}>
                                    <ProfileInfo
                                        userInfo={userInfo}
                                        handleChangeClick={() => this.toggleModal(EDIT_PROFILE)}
                                    />
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel>
                                <ExpansionPanelSummary>
                                    <ViewQuilt className={classes.icon} />
                                    <Typography className={classes.panelHeader} variant='headline'> Панель управления </Typography>
                                </ExpansionPanelSummary>
                                <Divider />
                                <ExpansionPanelDetails>
                                    <p>Панель информации</p>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <HouseInfo
                                handleAddClick={() => this.toggleModal(ADD_HOUSE)}
                                houseList={userHouses}
                            />
                        </div>
                        <FormModal
                            modalType={EDIT_PROFILE}
                            isOpen={openModals[EDIT_PROFILE]}
                            handleSave={this.onProfileChangesSave}
                            handleClose={() => this.toggleModal(EDIT_PROFILE)}
                        />
                        <FormModal
                            modalType={ADD_HOUSE}
                            isOpen={openModals[ADD_HOUSE]}
                            handleSave={this.onAddHouse}
                            handleClose={() => this.toggleModal(ADD_HOUSE)}
                        />
                    </Paper>
                </Zoom>
                <Preloader show={isFetching} />
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.profileReducer,
        isFetching: state.networkReducer.isFetching,
        userHouses: state.houseReducer.userHouses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        editUser: userInfo => dispatch(editProfileRequest(userInfo)),
        addHouse: houseInfo => dispatch(addHouseRequest(houseInfo))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(stylesJS)(Content));
