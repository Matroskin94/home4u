import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import initStore from '../store/appStore';
import HomePage from './HomePage.jsx';
import RegistrationPage from './RegistrationPage.jsx';
import LogInPage from './LogInPage.jsx';
import '../styles/styles.css';

const store = initStore();


const AppRouter = props => (
    <Provider store={store}>
        <MuiThemeProvider>
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
        </MuiThemeProvider>
    </Provider>
);

export default AppRouter;
