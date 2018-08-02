import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Typography, Button, Paper } from '@material-ui/core/';
import { Home } from '@material-ui/icons';

import HouseList from './HouseList.jsx';

import stylesJS from '../stylesJSS/HouseListStylesJS';

class HousesInfo extends PureComponent {
	static propTypes = {
	    classes: PropTypes.object.isRequired,
	    houseList: PropTypes.array
	};

	static defaultProps = {
		houseList: []
	}

	renderHouseList = () => {
		const houseList = this.props.houseList.length === 0 ?
			<Typography align='center' variant='caption'>Список домов пуст</Typography> :
			<HouseList />;

		return houseList;
	}

	render() {
		const { classes } = this.props;

		return (
		    <div className={classes.container}>
		        <Typography variant='display1'>Мои дома</Typography>
		        <Paper className={classes.houseListContainer}>
		        	<div className={classes.housesList}>
		        		{this.renderHouseList()}
		        	</div>
			        <Button
			                variant='contained'
			                color='default'
			                size='small'
			                className={classes.smallButton}
			            >
			            	<Home className={classes.icon}/>
			                Добавить дом
			            </Button>
		        </Paper>
		    </div>
		);
	}
}

export default withStyles(stylesJS)(HousesInfo);
