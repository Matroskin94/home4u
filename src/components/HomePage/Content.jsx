import React from 'react';
import { Link } from 'react-router-dom';

const Content = props => (
    <div>
        <h2>Home for you</h2>
        <h3>Приложение для мониторинга и управления системой домашней автоматизации</h3>
        <p>
            Для работы с системой <Link to='/login'>Войдите</Link> или <Link to='/registration'>Зарегистрируйтесь</Link>
        </p>
    </div>
);

export default Content;
