import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import changeHistory from '../HOC/ChangeHistory.jsx';
import { noop } from '../../utils/globalUtils';
import checkUserAction from './LoginActions';

function mapDispatchToProps(dispatch) {
    return {
        checkUser: user => dispatch(checkUserAction(user))
    };
}

@connect(undefined, mapDispatchToProps)
@changeHistory()
export default () => WrappedComponent => {
    class LoginHOC extends PureComponent {
        static propTypes = {
            historyPush: PropTypes.func,
            checkUser: PropTypes.func
        };
        static defaultProps = {
            historyPush: noop,
            checkUser: noop
        };
        handleEnterClick = user => {
            this.props.checkUser(user);
            this.props.historyPush({ url: '/myhome' });
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
