import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

const stylesJS = theme => (
    {
        container: {
            width: '75%',
            margin: 'auto'
        }
    }
);

const Content = props => (
    <div className={props.classes.container}>
        <h2>Home for you</h2>
        <h3>Приложение для мониторинга и управления системой домашней автоматизации</h3>
        <p>
            Для работы с системой <Link to='/login'>Войдите</Link> или <Link to='/registration'>Зарегистрируйтесь</Link>
        </p>
    </div>
);

Content.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(stylesJS)(Content);
