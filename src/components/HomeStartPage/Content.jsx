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
    withStyles,
    Zoom
} from '@material-ui/core';
import PropTypes from 'prop-types';

import stylesJS from './stylesJSS/ContentStylesJS';

import profileIcon from '../../assets/ProfileIcon_Type_1_(200_200).png';
import houseSettingsIcon from './img/houseCustoming(200).png';
import houseMonitoringIcon from '../../assets/homeMonitoring(200_200).png';

const Content = ({ classes }) => (
    <Zoom in>
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
                            image={profileIcon}
                            className={classes.media}
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

                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                >
                    <Card className={classes.card}>
                        <CardMedia
                            title='Contemplative Reptile'
                            image={houseMonitoringIcon}
                            className={classes.media}
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant='headline'
                                component='h2'
                            >
                            Мониторинг
                            </Typography>
                            <Typography component='p'>
                                Просмотр информации о системе.
                            </Typography>
                        </CardContent>
                        <CardActions className={classes.cardActions}>
                            <Link to='/myhome/account'>
                                <Button size='small' color='primary'>
                                    Мониторинг
                                </Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Paper>
    </Zoom>
);

Content.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(stylesJS)(Content);
