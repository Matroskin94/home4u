import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import checkAccessPermition from './CheckAccessPermition.jsx';

const AuthorisationCheck = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => (
            checkAccessPermition() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/'
                    }}
                />
            )
        )}
    />
);

AuthorisationCheck.propTypes = {
    component: PropTypes.func
};

AuthorisationCheck.defaultProps = {
    component: {}
};

export default AuthorisationCheck;
