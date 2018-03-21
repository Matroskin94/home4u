import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { Typography } from 'material-ui';
import PropTypes from 'prop-types';
import stylesJS from './stylesJSS/ContentStylesJS';

const Content = ({ classes }) => (
    <div className={classes.container}>
        <Typography variant='display3' className={classes.headerFont}>
            Home for you
        </Typography>
        <Typography variant='title' className={classes.descriptionFont}>
            Приложение для мониторинга и управления системой домашней автоматизации
        </Typography>
        <Typography className={classes.alignTop10}>
            Для работы с системой <Link to='/login'>Войдите</Link> или <Link to='/registration'>Зарегистрируйтесь</Link>
        </Typography>
    </div>
);

Content.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(stylesJS)(Content);
