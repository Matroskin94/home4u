import React from 'react';
import { Field, reduxForm, Form } from 'redux-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';

import RenderFormTextField from '../../common/RenderFormTextField.jsx';

import { noop } from '../../../utils/globalUtils';
import { validateEditUser } from '../../../utils/validateForm';

import stylesJS from './stylesJSS/EditUserFormStylesJS';

let EditUserForm = ({ classes, handleSubmit, onSaveChanges }) => (
    <Form
        className={classes.formContainer}
        name='editUser'
        onSubmit={handleSubmit(onSaveChanges)}
    >
        <div className={classes.rowContainer}>
            <Field
                name='name'
                id='name'
                label='Имя'
                margin='normal'
                component={RenderFormTextField}
                className={classes.textField}
            />
            <Field
                name='surname'
                id='surname'
                label='Фамилия'
                margin='normal'
                component={RenderFormTextField}
                className={classes.textField}
            />
        </div>
        <div className={classes.rowContainer}>
            <Field
                name='phone'
                id='phone'
                label='Телефон'
                margin='normal'
                component={RenderFormTextField}
                className={classes.textFieldLarge}
            />
        </div>
        <div className={classes.rowContainer}>
            <Field
                name='password'
                id='password'
                label='Старый пароль'
                type='password'
                margin='normal'
                component={RenderFormTextField}
                formStyle={classes.textField}
            />
            <Field
                name='newPassword'
                id='newPassword'
                label='Новый пароль'
                type='password'
                margin='normal'
                component={RenderFormTextField}
                formStyle={classes.textField}
            />
            <Field
                name='confirmPassword'
                id='confirmPassword'
                label='Подтверждение пароля'
                type='password'
                margin='normal'
                component={RenderFormTextField}
                formStyle={classes.textField}
            />
        </div>
    </Form>
);

EditUserForm.propTypes = {
    classes: PropTypes.object.isRequired,
    initialValues: PropTypes.object,
    onSaveChanges: PropTypes.func,
    handleSubmit: PropTypes.func
};

EditUserForm.defaultProps = {
    initialValues: {},
    handleSubmit: noop,
    onSaveChanges: noop
};

function mapStateToProps(state) {
    return {
        initialValues: state.loginReducer
    };
}

EditUserForm = reduxForm({
    form: 'editUser',
    validate: validateEditUser(),
    persistentSubmitErrors: false,
    destroyOnUnmount: false
})(EditUserForm);

export default connect(mapStateToProps)(withStyles(stylesJS)(EditUserForm));
