import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import HomeControlPage from './userPages/HomeControlPage.jsx';
import Layout from './userPages/Layout.jsx';
import HomeStartPage from './userPages/HomeStartPage.jsx';
import UserAccountPage from './userPages/UserAccountPage.jsx';
import UserHousePage from './userPages/UserHousePage.jsx';
import MonitoringPage from './userPages/MonitoringPage.jsx';

const YourHomePageRouter = ({ match }) =>
    <Layout>
        <Switch>
            <Route
                exact
                path={`${match.url}`}
                component={HomeStartPage}
            />
            <Route path={`${match.url}/control`} component={HomeControlPage} />
            <Route path={`${match.url}/account`} component={UserAccountPage} />
            <Route path={`${match.url}/monitoring`} component={MonitoringPage} />
            <Route path={`${match.url}/:id`} component={UserHousePage} />
        </Switch>
    </Layout>;

YourHomePageRouter.propTypes = {
    match: PropTypes.object
};

YourHomePageRouter.defaultProps = {
    match: ''
};

export default YourHomePageRouter;
