import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import initStore from '../store/appStore';
import HomePage from './HomePage.jsx';
import RegistrationPage from './RegistrationPage.jsx';
import LogInPage from './LogInPage.jsx';
import AuthorisationCheck from './AuthorisationCheck.jsx';
// import YourhousePageRouter from './YourhousePageRouter.jsx';
import YourHomePageRouter from './YourHomePageRouter.jsx';
import '../styles/styles.css';

const store = initStore();

injectTapEventPlugin();

const AppRouter = props => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path='/'
                    component={HomePage}
                />
                <Route path='/login' component={LogInPage} />
                <Route path='/registration' component={RegistrationPage} />
                <AuthorisationCheck path='/myhome/' component={YourHomePageRouter} />
            </Switch>
        </BrowserRouter>
    </Provider>
);

export default AppRouter;
