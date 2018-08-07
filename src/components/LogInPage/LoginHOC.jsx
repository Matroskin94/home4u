import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import changeHistory from '../HOC/ChangeHistory.jsx';
import { noop } from '../../utils/globalUtils';
import { loginRequestAction, loginSuccessAction } from '../../services/actions/ProfileActions';

function mapDispatchToProps(dispatch) {
    return {
        loginUser: user => dispatch(loginRequestAction(user)),
        enterUser: user => dispatch(loginSuccessAction(user))
    };
}

function mapStateToProps(state) {
    return {
        isFetching: state.networkReducer.isFetching
    };
}

@connect(mapStateToProps, mapDispatchToProps)
@changeHistory()
export default () => WrappedComponent => {
    class LoginHOC extends PureComponent {
        static propTypes = {
            isFetching: PropTypes.bool,
            historyPush: PropTypes.func, // Функция из HOC changeHistory для перехода на страницы
            loginUser: PropTypes.func,
            enterUser: PropTypes.func
        };
        static defaultProps = {
            isFetching: false,
            historyPush: noop,
            loginUser: noop,
            enterUser: noop
        };

        handleEnterClick = user => {
            return this.props.loginUser(user).then(response => {
                this.props.enterUser(user);
                this.props.historyPush({ url: '/myhome' });
            });
        }

        render() {
            return <WrappedComponent
                {...this.props}
                isFetching={this.props.isFetching}
                onEnterClick={this.handleEnterClick}
            />;
        }
}

return LoginHOC;
};
