import React from 'react';
import { random } from 'lodash';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import { withStyles } from '@material-ui/core/styles';
import { Avatar, List, ListItem, ListItemText, Paper, Grow } from '@material-ui/core/';
import { HomeRounded } from '@material-ui/icons/';

import ROUTES from '../../../constants/routes';

const HouseList = ({ houseList }) => (
    <Grow in>
        <Paper>
            {houseList.map(house => (
                <List dense key={random(0, 1, true)}>
                    <Link to={`${ROUTES.MY_HOME}/${house.id}`}>
                        <ListItem button>
                            <Avatar>
                                <HomeRounded />
                            </Avatar>
                            <ListItemText primary={house.houseName} secondary={house.address} />
                        </ListItem>
                    </Link>
                </List>
            ))}
        </Paper>
    </Grow>
);

HouseList.propTypes = {
    houseList: PropTypes.array
    // classes: PropTypes.object.isRequired
};

HouseList.defaultProps = {
    houseList: []
};

// export default withStyles(stylesJS)(houseList);
export default HouseList;
