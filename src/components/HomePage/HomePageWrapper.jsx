import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const stylesJS = theme => (
    {
        wrapper: {
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            alignItems: 'space-between'
        }
    }
);

const homePageWrapper = () => WrappedComponent => {
    class AddStyles extends PureComponent {
        static propTypes = {
            classes: PropTypes.object.isRequired
        };
        render() {
            return <WrappedComponent
                {...this.props}
                styles={this.props.classes}
            />;
        }
    }
    return withStyles(stylesJS)(AddStyles);
};

export default homePageWrapper;
