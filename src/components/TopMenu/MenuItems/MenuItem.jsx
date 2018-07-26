import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const MenuItem = ({ item, style }) => (
    <Link
        className={style.link}
        to={item.itemLink}
    >
        <Button color='inherit'>{item.itemText}</Button>
    </Link>
);

MenuItem.propTypes = {
    item: PropTypes.object,
    style: PropTypes.object
};

MenuItem.defaultProps = {
    item: {},
    style: {}
};

export default MenuItem;
