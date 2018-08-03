import React from 'react';
import { Link } from 'react-router-dom';

import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Paper,
    Grid,
    withStyles
} from '@material-ui/core';
import PropTypes from 'prop-types';

import stylesJS from './stylesJSS/ContentStylesJS';
import houseIcon from './img/house(200).png';
import houseSettingsIcon from './img/houseCustoming(200).png';

const Content = ({ classes }) => (
    <Paper className={classes.container}>
        <Grid
            container
            justify='center'
            spacing={24}
        >
            <Grid item xs={12}>
                <Typography align='center' variant='display1'>Умный дом для Вас!</Typography>
            </Grid>
            <Grid
                item
                xs={12}
                sm={6}
                md={4}
            >
                <Card className={classes.card}>
                    <CardMedia
                        title='Contemplative Reptile'
                        className={classes.media}
                        image={houseIcon}
                    />
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant='headline'
                            component='h2'
                        >
                        Профиль
                        </Typography>
                        <Typography component='p'>
                            Настройка личного профиля владельца системы.
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                        <Link to='/myhome/account'>
                            <Button size='small' color='primary'>
                                Профиль
                            </Button>
                        </Link>
                    </CardActions>
                </Card>
            </Grid>
            <Grid
                item
                xs={12}
                sm={6}
                md={4}
            >
                <Card className={classes.card}>
                    <CardMedia
                        title='Contemplative Reptile'
                        className={classes.media}
                        image={houseSettingsIcon}
                    />
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant='headline'
                            component='h2'
                        >
                        Управление
                        </Typography>
                        <Typography component='p'>
                            Управление и настройка параметров Вашей системы "Умный дом"
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                        <Link to='/myhome/control'>
                            <Button size='small' color='primary'>
                                Управление
                            </Button>
                        </Link>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    </Paper>
);

Content.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(stylesJS)(Content);
