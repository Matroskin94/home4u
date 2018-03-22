import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomeAccountPage from './HomeAccountPage.jsx';
import HomeControlPage from './HomeControlPage.jsx';

const YourHomePageRouter = ({ match }) => {
    return (
        <Switch>
            <Route
                exact
                path={`${match.url}`}
                component={HomeAccountPage}
            />
            <Route path={`${match.url}/control`} component={HomeControlPage} />
        </Switch>
    );
};

YourHomePageRouter.propTypes = {
    match: PropTypes.object
};

YourHomePageRouter.defaultProps = {
    match: ''
};

export default YourHomePageRouter;
