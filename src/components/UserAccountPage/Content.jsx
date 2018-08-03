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
    ExpansionPanelSummary
} from '@material-ui/core';
import { AccountCircle, ViewQuilt } from '@material-ui/icons';

import ProfileInfo from './PageComponents/ProfileInfo.jsx';
import FormModal from './Modals/FormModal.jsx';
import Preloader from '../ui/Preloader/Preloader.jsx';
import HouseInfo from './PageComponents/HouseInfo.jsx';

import { editProfileRequest } from './UserAccountActions';
import { noop } from '../../utils/globalUtils';

import { EDIT_PROFILE, ADD_HOUSE } from '../../constants/constants';

import stylesJS from './stylesJSS/ContentStylesJS';

const houseList = [
    {
        houseName: 'Моя квартира',
        address: 'Витебск, пр.Фрунзе, д.35, кв.23',
        houseDescription: 'Съёмная квартира',
        timezone: '(GMT+3)'
    },
    {
        houseName: 'Дача',
        address: 'Витебск, ул. Дачная, д.15',
        houseDescription: 'Съёмная квартира',
        timezone: '(GMT+3)'
    }
];

class Content extends PureComponent {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        userInfo: PropTypes.object,
        isFetching: PropTypes.bool,
        editUser: PropTypes.func
    };

    static defaultProps = {
        userInfo: {
            name: '',
            surname: '',
            phone: '',
            email: '',
            userLogin: ''
        },
        editUser: noop,
        isFetching: false
    };

    state = {
        openModals: {
            [EDIT_PROFILE]: false
        }
    };

    onProfileChangesSave = values => this.props.editUser(values);

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
        const { classes, userInfo, isFetching } = this.props;
        const { openModals } = this.state;

        return (
            <Fragment>
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
                            houseList={houseList}
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
                        handleSave={this.onProfileChangesSave}
                        handleClose={() => this.toggleModal(ADD_HOUSE)}
                    />
                </Paper>
                <Preloader show={isFetching} />
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.profileReducer,
        isFetching: state.networkReducer.isFetching
    };
}

function mapDispatchToProps(dispatch) {
    return {
        editUser: userInfo => dispatch(editProfileRequest(userInfo))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(stylesJS)(Content));
