import React from 'react';
import { Link } from 'react-router-dom';

const TopMenu = props => (
    <div>
        <ul>
            <li><Link to='/'>Главная</Link></li>
            <li><Link to='/registration'>Регистрация </Link></li>
        </ul>
    </div>
);

export default TopMenu;
