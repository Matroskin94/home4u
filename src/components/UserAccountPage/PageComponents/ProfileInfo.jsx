import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';

import stylesJS from './../stylesJSS/ContentStylesJS';

import { noop } from './../../../utils/globalUtils';

const ProfileInfo = ({ classes, userInfo, handleChangeClick }) => {
    const {
        name,
        surname,
        phone,
        email,
        userLogin
    } = userInfo;

    return (
        <div>
            <Typography>Логин: {`${userLogin}`}</Typography>
            <Typography>E-mail: {`${email}`}</Typography>
            <Typography>Имя: {`${name}`}</Typography>
            <Typography>Фамилия: {`${surname}`}</Typography>
            <Typography gutterBottom>Телефон: {`${phone}`}</Typography>
            <Button
                variant='contained'
                color='default'
                size='small'
                className={classes.smallButton}
                onClick={handleChangeClick}
            >
                <Edit className={classes.icon} />
                Изменить
            </Button>
            <Button
                variant='contained'
                color='secondary'
                size='small'
                className={classNames(classes.rightIcon, classes.smallButton)}
            >
                <Delete className={classes.icon} />
                Удалить
            </Button>
        </div>
    );
};

ProfileInfo.defaultProps = {
    userInfo: {
        name: 'noName',
        surname: 'noSurname',
        phone: '',
        email: '',
        userLogin: ''
    },
    handleChangeClick: noop
};

ProfileInfo.propTypes = {
    userInfo: PropTypes.object,
    handleChangeClick: PropTypes.func,
    classes: PropTypes.object.isRequired
};

export default withStyles(stylesJS)(ProfileInfo);
