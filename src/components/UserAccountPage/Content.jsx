import React, { PureComponent } from 'react';
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
import EditProfileModal from './Modals/EditProfileModal.jsx';

import { EDIT_PROFILE_MODAL } from '../../constants/constants';

import stylesJS from './stylesJSS/ContentStylesJS';

class Content extends PureComponent {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        userInfo: PropTypes.object
    };

    static defaultProps = {
        userInfo: {
            name: '',
            surname: '',
            phone: '',
            email: '',
            userLogin: ''
        }
    };

    state = {
        openModals: {
            [EDIT_PROFILE_MODAL]: false
        },
        userInfo: this.props.userInfo
    };

    onProfileChangesSave = values => {
        console.log('Changes saved', values);
    }

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
        const { classes } = this.props;
        const { openModals, userInfo } = this.state;

        return (
            <Paper className={classes.container}>
                <Typography variant='display1'>Личный кабинет</Typography>
                <div className={classes.accountControls}>
                    <ExpansionPanel defaultExpanded>
                        <ExpansionPanelSummary>
                            <AccountCircle className={classes.icon} />
                            <Typography className={classes.panelHeader}> Персональная информация </Typography>
                        </ExpansionPanelSummary>
                        <Divider />
                        <ExpansionPanelDetails className={classes.panelContainer}>
                            <ProfileInfo
                                userInfo={userInfo}
                                handleSaveClick={this.onProfileChangesSave}
                                handleChangeClick={() => this.toggleModal(EDIT_PROFILE_MODAL)}
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
                </div>
                <EditProfileModal
                    userInfo={this.state.userInfo}
                    isOpen={openModals[EDIT_PROFILE_MODAL]}
                    handleSave={this.onProfileChangesSave}
                    handleClose={() => this.toggleModal(EDIT_PROFILE_MODAL)}
                />
            </Paper>
        );
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.loginReducer
    };
}

/* AuthorisationCheck.propTypes = {
    component: PropTypes.func,
    isAuthenticated: PropTypes.bool
};

AuthorisationCheck.defaultProps = {
    component: {},
    isAuthenticated: false
};

export default connect(mapStateToProps)(AuthorisationCheck); */

export default connect(mapStateToProps)(withStyles(stylesJS)(Content));
