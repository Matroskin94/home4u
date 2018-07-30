import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ListItemText, Typography, MenuItem } from '@material-ui/core';

const HiddenMenuItem = ({ item }) => (
    <Link to={item.itemLink}>
        <MenuItem>
            <ListItemText>
                <Typography align='right'>
                    {item.itemText}
                </Typography>
            </ListItemText>
        </MenuItem>
    </Link>
);

HiddenMenuItem.propTypes = {
    item: PropTypes.object
};

HiddenMenuItem.defaultProps = {
    item: {}
};

export default HiddenMenuItem;
