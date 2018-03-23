import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import changeHistory from '../HOC/ChangeHistory.jsx';
import { noop } from '../../utils/globalUtils';

@changeHistory()
export default () => WrappedComponent => {
    class LoginHOC extends PureComponent {
        static propTypes = {
            historyPush: PropTypes.func
        };
        static defaultProps = {
            historyPush: noop
        };
        handleEnterClick = ({ password, userLogin }) => {
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
