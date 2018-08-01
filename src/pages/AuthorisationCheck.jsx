import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthorisationCheck = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => (
            rest.isAuthenticated ? (
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
