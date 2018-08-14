import React from 'react';
import PropTypes from 'prop-types';

import {
    withStyles,
    Typography,
    Dialog,
    AppBar,
    Toolbar,
    IconButton,
    Slide
} from '@material-ui/core/';
import { Close } from '@material-ui/icons';

import { noop } from '../../../utils/globalUtils';

import stylesJS from './stylesJSS';

function Transition(props) {
    return <Slide direction='up' {...props} />;
}

const ModalFullScreen = ({
    classes,
    isOpen,
    onClose,
    onSave = noop,
    title,
    children
}) => (
    <Dialog
        fullScreen
        open={isOpen}
        onClose={onClose}
        TransitionComponent={Transition}
    >
        <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color='inherit'
                    onClick={onClose}
                    aria-label='Close'
                >
                    <Close />
                </IconButton>
                <Typography
                    variant='title'
                    color='inherit'
                    className={classes.flex}
                >
                    {title}
                </Typography>
                {/* <Button color='inherit' onClick={noop}>
                    ACTION
                </Button> */}
            </Toolbar>
        </AppBar>
        {children}
    </Dialog>
);

ModalFullScreen.propTypes = {
    children: PropTypes.element.isRequired,
    classes: PropTypes.object.isRequired,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    onSave: PropTypes.func,
    title: PropTypes.string
};

ModalFullScreen.defaultProps = {
    isOpen: false,
    onClose: noop,
    onSave: noop,
    title: 'Заголовок отсутствует'
};

export default withStyles(stylesJS)(ModalFullScreen);
