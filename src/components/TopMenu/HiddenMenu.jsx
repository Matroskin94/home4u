import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { MenuList } from '@material-ui/core/Menu';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import stylesCSS from './hiddenMenu.css';
import HiddenMenuItem from './MenuItems/HiddenMenuItem.jsx';

const HiddenMenu = ({ menuItems }) => (
    <Hidden smUp>
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
                        <Fragment key={item.itemText}>
                            <HiddenMenuItem item={item} />
                            <Divider />
                        </Fragment>
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
