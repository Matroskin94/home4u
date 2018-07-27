import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Paper, Card, CardContent, CardActions } from '@material-ui/core';
import PropTypes from 'prop-types';
import stylesJS from './stylesJSS/ContentStylesJS';

const Content = ({ classes }) => (
    <Paper className={classes.container}>
    	<div>
	        <Typography variant='display1'>Testing of termometer</Typography>
	        <Card className={classes.termometerContainer}>
	        	<CardContent>
	        		<p>Card Content place for termometer</p>
	        	</CardContent>
	        </Card>
	    </div>
    </Paper>
);

Content.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(stylesJS)(Content);
