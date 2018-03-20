import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { Typography } from 'material-ui';
import PropTypes from 'prop-types';

const stylesJS = theme => (
    {
        container: {
            flex: '1 0 auto',
            width: '75%',
            margin: '20px auto'
        },
        alignTop10: {
            marginTop: '10px'
        }
    }
);

const Content = props => (
    <div className={props.classes.container}>
        <Typography variant='display3'>
            Home for you
        </Typography>
        <Typography variant='title'>
            Приложение для мониторинга и управления системой домашней автоматизации
        </Typography>
        <Typography className={props.classes.alignTop10}>
            Для работы с системой <Link to='/login'>Войдите</Link> или <Link to='/registration'>Зарегистрируйтесь</Link>
        </Typography>
    </div>
);

Content.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(stylesJS)(Content);
