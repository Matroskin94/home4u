import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Typography, Button, Paper, CircularProgress } from '@material-ui/core/';
import { house } from '@material-ui/icons';

import HouseList from './HouseList.jsx';

import { noop } from '../../../utils/globalUtils';

import stylesJS from '../stylesJSS/HouseListStylesJS';

class HousesInfo extends PureComponent {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        houseList: PropTypes.array,
        handleAddClick: PropTypes.func,
        isHousesLoading: PropTypes.bool
    };

    static defaultProps = {
        houseList: [],
        handleAddClick: noop,
        isHousesLoading: false
    }

    renderhouseList = () => {
        let houseList;

        if (!this.props.isHousesLoading) {
            houseList = this.props.houseList.length === 0 ?
                <Typography align='center' variant='caption'>Список домов пуст</Typography> :
                <HouseList houseList={this.props.houseList} />;
        } else {
            houseList = <CircularProgress />;
        }

        return houseList;
    }

    render() {
        const { classes, handleAddClick } = this.props;

        return (
            <div className={classes.container}>
                <Typography variant='display1'>Мои дома</Typography>
                <Paper className={classes.houseListContainer}>
                    <div className={classes.housesList}>
                        {this.renderhouseList()}
                    </div>
                    <Button
                        variant='contained'
                        color='default'
                        size='small'
                        className={classes.smallButton}
                        onClick={handleAddClick}
                    >
                        <house className={classes.icon} />
                            Добавить дом
                    </Button>
                </Paper>
            </div>
        );
    }
}

export default withStyles(stylesJS)(HousesInfo);
