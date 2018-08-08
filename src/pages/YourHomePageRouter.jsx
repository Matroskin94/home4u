import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import HomeControlPage from './userPages/HomeControlPage.jsx';
import MyHomePageWrapper from './userPages/MyHomePageWrapper.jsx';
import HomeStartPage from './userPages/HomeStartPage.jsx';
import UserAccountPage from './userPages/UserAccountPage.jsx';
import UserHousePage from './userPages/UserHousePage.jsx';

const YourHomePageRouter = ({ match }) =>
    <MyHomePageWrapper>
        <Switch>
            <Route
                exact
                path={`${match.url}`}
                component={HomeStartPage}
            />
            <Route path={`${match.url}/control`} component={HomeControlPage} />
            <Route path={`${match.url}/account`} component={UserAccountPage} />
            <Route path={`${match.url}/:id`} component={UserHousePage} />
        </Switch>
    </MyHomePageWrapper>;

YourHomePageRouter.propTypes = {
    match: PropTypes.object
};

YourHomePageRouter.defaultProps = {
    match: ''
};

export default YourHomePageRouter;
