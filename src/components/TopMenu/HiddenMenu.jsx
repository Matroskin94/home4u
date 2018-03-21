import React from 'react';
import { Link } from 'react-router-dom';
import { MenuList, MenuItem } from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
import { ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { Typography } from 'material-ui';
import Hidden from 'material-ui/Hidden';
import stylesCSS from './hiddenMenu.css';

const HiddenMenu = () => (
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
                    <Link to='/login'>
                        <MenuItem>
                            <ListItemText>
                                <Typography align='right'>
                                    Вход
                                </Typography>
                            </ListItemText>
                        </MenuItem>
                    </Link>
                    <Divider />
                    <Link to='/registration'>
                        <MenuItem>
                            <ListItemText>
                                <Typography align='right'>
                                    Регистрация
                                </Typography>
                            </ListItemText>
                        </MenuItem>
                    </Link>
                </MenuList>
            </Paper>
        </div>
    </Hidden>
);

export default HiddenMenu;
