import React from 'react';
import { Field, reduxForm, Form } from 'redux-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';

import RenderFormTextField from '../../common/RenderFormTextField.jsx';

import { noop } from '../../../utils/globalUtils';

import stylesJS from './stylesJSS/EditUserFormStylesJS';

let AddHouseForm = ({ classes, handleSubmit, onSaveChanges }) => (
    <Form
        name='addHouse'
        className={classes.formContainer}
        onSubmit={handleSubmit(onSaveChanges)}
    >
        <Field
            name='houseName'
            id='houseName'
            label='Имя'
            margin='normal'
            className={classes.textFieldLarge}
            component={RenderFormTextField}
        />
        <Field
            name='houseDescription'
            id='houseDescription'
            label='Описание'
            margin='normal'
            className={classes.textFieldLarge}
            component={RenderFormTextField}
        />
        <Field
            name='address'
            id='name'
            label='Адрес'
            margin='normal'
            className={classes.textFieldLarge}
            component={RenderFormTextField}
        />
        <Field
            name='timezone'
            id='timezone'
            label='Часовой пояс'
            margin='normal'
            className={classes.textFieldLarge}
            component={RenderFormTextField}
        />
    </Form>
);

AddHouseForm.propTypes = {
    classes: PropTypes.object.isRequired,
    onSaveChanges: PropTypes.func,
    handleSubmit: PropTypes.func
};

AddHouseForm.defaultProps = {
    handleSubmit: noop,
    onSaveChanges: noop
};

AddHouseForm = reduxForm({
    form: 'addHouse',
    persistentSubmitErrors: false,
    destroyOnUnmount: false
})(AddHouseForm);

export default connect(null)(withStyles(stylesJS)(AddHouseForm));
