import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import initStore from '../store/appStore';
import HomePage from './HomePage.jsx';
import RegistrationPage from './RegistrationPage.jsx';
import LogInPage from './LogInPage.jsx';
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
                <Route path='/registration' component={RegistrationPage} />
                <Route path='/login' component={LogInPage} />

            </Switch>
        </BrowserRouter>
    </Provider>
);

export default AppRouter;
