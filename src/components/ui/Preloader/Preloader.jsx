import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import stylesJS from './stylesJSS';

const Content = ({ classes, show }) => (
    <div className={classNames({ [classes.preloaderWrapper]: show }, { [classes.hiddenWrapper]: !show })}>
        <CircularProgress size={68} />
    </div>
);

Content.propTypes = {
    show: PropTypes.bool,
    classes: PropTypes.object.isRequired
};

Content.defaultProps = {
    show: false
};

export default withStyles(stylesJS)(Content);
