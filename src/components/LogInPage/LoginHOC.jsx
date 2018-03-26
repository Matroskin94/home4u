import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import changeHistory from '../HOC/ChangeHistory.jsx';
import { noop } from '../../utils/globalUtils';
import { loginRequestAction, loginSuccessAction } from './LoginActions';

function mapDispatchToProps(dispatch) {
    return {
        loginUser: user => dispatch(loginRequestAction(user)),
        enterUser: user => dispatch(loginSuccessAction(user))
    };
}

@connect(undefined, mapDispatchToProps)
@changeHistory()
export default () => WrappedComponent => {
    class LoginHOC extends PureComponent {
        static propTypes = {
            historyPush: PropTypes.func, // Функция из HOC changeHistory для перехода на страницы
            loginUser: PropTypes.func,
            enterUser: PropTypes.func
        };
        static defaultProps = {
            historyPush: noop,
            loginUser: noop,
            enterUser: noop
        };
        handleEnterClick = user => {
            this.props.loginUser(user).then(response => {
                this.props.enterUser(user);
                this.props.historyPush({ url: '/myhome' });
            });
        }
        render() {
            return <WrappedComponent
                {...this.props}
                onEnterClick={this.handleEnterClick}
            />;
        }
}

return LoginHOC;
};
