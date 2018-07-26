import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const RenderTextField = ({
    input,
    label,
    formStyle,
    helperText,
    meta: { touched, error },
    ...custom
}) => (
    <TextField
        label={(touched && error) ? <span style={{ color: 'rgba(0, 0, 0, 0.5)' }}>{label}</span> : <span>{ label }</span>}
        helperText={(touched && error) ? (touched && error) : ' '}
        error={!!(touched && error)}
        className={formStyle}
        {...input}
        {...custom}
    />
);

RenderTextField.propTypes = {
    formStyle: PropTypes.string,
    helperText: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
    meta: PropTypes.object,
    input: PropTypes.object
};
RenderTextField.defaultProps = {
    formStyle: '',
    helperText: '',
    placeholder: '',
    label: '',
    id: '',
    meta: {},
    input: {}
};

export default RenderTextField;
