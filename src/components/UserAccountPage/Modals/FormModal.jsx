import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { submit, reset } from 'redux-form';
import { connect } from 'react-redux';

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle
} from '@material-ui/core';

import EditUserForm from '../Forms/EditUserForm.jsx';
import AddHouseForm from '../Forms/AddHouseForm.jsx';

import { noop } from './../../../utils/globalUtils';

import { FORM_TYPES } from './../../../constants/constants';

class FormModal extends PureComponent {
    static propTypes = {
        modalType: PropTypes.string,
        isOpen: PropTypes.bool,
        dispatch: PropTypes.func,
        handleClose: PropTypes.func,
        handleSave: PropTypes.func
    };

    static defaultProps = {
        modalType: '',
        isOpen: false,
        dispatch: noop,
        handleClose: noop,
        handleSave: noop
    };

    state = {
        modalType: FORM_TYPES[this.props.modalType]
    }

    handleSaveChanges = () => {
        this.props.dispatch(submit(this.state.modalType.FORM_NAME));
    }

    handleSubmit = values => {
        this.props.handleClose();
        this.props.handleSave(values);

        if (this.state.modalType.FORM_NAME === FORM_TYPES.ADD_HOUSE.FORM_NAME) {
            this.props.dispatch(reset('addHouse'));
        }
    }

    renderForm = () => {
        switch (this.state.modalType.FORM_NAME) {
            case FORM_TYPES.EDIT_PROFILE.FORM_NAME: {
                return (<EditUserForm onSaveChanges={this.handleSubmit} />);
            }

            case FORM_TYPES.ADD_HOUSE.FORM_NAME: {
                return (<AddHouseForm onSaveChanges={this.handleSubmit} />);
            }

            default: {
                return 'Form error';
            }
        }
    }

    render() {
        const { isOpen, handleClose } = this.props;
        const { modalType } = this.state;

        return (
            <Dialog
                open={isOpen}
                onClose={handleClose}
                aria-labelledby='form-dialog-title'
                fullWidth
                maxWidth='sm'
                scroll='body'
            >
                <DialogTitle id='form-dialog-title'>{modalType.DIALOG_TITLE}</DialogTitle>
                <DialogContent>
                    {this.renderForm()}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color='primary'>
                      Отмена
                    </Button>
                    <Button
                        type='submit'
                        color='primary'
                        onClick={this.handleSaveChanges}
                    >
                        {modalType.ACTION}
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default connect(null)(FormModal);
