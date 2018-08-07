import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import ROUTES from '../constants/routes';

const AuthorisationCheck = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => (
            rest.isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: ROUTES.BASE
                    }}
                />
            )
        )}
    />
);

function mapStateToProps(state) {
    return {
        isAuthenticated: state.profileReducer.isAuthenticated
    };
}

AuthorisationCheck.propTypes = {
    component: PropTypes.func,
    isAuthenticated: PropTypes.bool
};

AuthorisationCheck.defaultProps = {
    component: {},
    isAuthenticated: false
};

export default connect(mapStateToProps)(AuthorisationCheck);
