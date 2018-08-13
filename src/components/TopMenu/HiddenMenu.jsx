import React from 'react';
import PropTypes from 'prop-types';
import { Divider, Hidden, Paper, MenuList } from '@material-ui/core';

import stylesCSS from './hiddenMenu.css';
import HiddenMenuItem from './MenuItems/HiddenMenuItem.jsx';

const HiddenMenu = ({ menuItems }) => (
    <Hidden mdUp>
        <input
            type='checkbox'
            id='hmt'
            className={stylesCSS.hiddenMenuTicker}
        />
        <label htmlFor='hmt' className={stylesCSS.btnMenu}>
            <span className={stylesCSS.first} />
            <span className={stylesCSS.second} />
            <span className={stylesCSS.third} />
        </label>
        <div className={stylesCSS.hiddenMenu}>
            <Paper>
                <MenuList>
                    {menuItems.map(item => (
                        <div key={item.itemText}>
                            <HiddenMenuItem item={item} />
                            <Divider />
                        </div>
                    ))}
                </MenuList>
            </Paper>
        </div>
    </Hidden>
);

HiddenMenu.propTypes = {
    menuItems: PropTypes.array
};
HiddenMenu.defaultProps = {
    menuItems: []
};


export default HiddenMenu;
