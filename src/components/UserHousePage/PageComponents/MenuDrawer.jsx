import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import {
    Typography,
    Drawer,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core/';
import { Layers } from '@material-ui/icons';

import stylesJS from '../stylesJSS/stylesJS';

const MenuDrawer = ({ classes, isMenuOpened, floors }) => (
    <Drawer
        variant='persistent'
        anchor='left'
        open={isMenuOpened}
        classes={{
            paper: classes.drawerPaper
        }}
    >
        <div className={classes.drawerHeader}>
            <Typography variant='subheading'>Этажи</Typography>
        </div>
        <Divider />
        {floors.map(item => (
            <List key={item.id}>
                <ListItem button>
                    <ListItemIcon>
                        <Layers />
                    </ListItemIcon>
                    <ListItemText primary={`Этаж ${item.floorNumber}`} />
                </ListItem>
            </List>
        ))}
    </Drawer>
);

MenuDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    floors: PropTypes.array,
    isMenuOpened: PropTypes.bool
};

MenuDrawer.defaultProps = {
    isMenuOpened: true,
    floors: []
};

export default withStyles(stylesJS)(MenuDrawer);
