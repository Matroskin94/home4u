import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { submit } from 'redux-form';
import { connect } from 'react-redux';

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle
} from '@material-ui/core';

import EditUserForm from '../Forms/EditUserForm.jsx';

import { noop } from './../../../utils/globalUtils';

class EditProfileModal extends PureComponent {
    static propTypes = {
        isOpen: PropTypes.bool,
        dispatch: PropTypes.func,
        handleClose: PropTypes.func
    };

    static defaultProps = {
        isOpen: false,
        dispatch: noop,
        handleClose: noop
    };

    handleSaveChanges = () => {
        // const submitEvent = new Event('submit');
        this.props.dispatch(submit('editUser'));
    }

    handleSubmit = values => {
        console.log('VAL', values);
    }

    render() {
        const { isOpen, handleClose } = this.props;

        return (
            <Dialog
                open={isOpen}
                onClose={handleClose}
                aria-labelledby='form-dialog-title'
                maxWidth='md'
            >
                <DialogTitle id='form-dialog-title'>Редактирование профиля</DialogTitle>
                <DialogContent>
                    <EditUserForm onSaveChanges={this.handleSubmit} />
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
                      Сохранить
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default connect(null)(EditProfileModal);
