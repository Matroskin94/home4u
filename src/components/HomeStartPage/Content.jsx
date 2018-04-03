import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { Typography, Paper, Grid } from 'material-ui';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import stylesJS from './stylesJSS/ContentStylesJS';
import homeIcon from './img/house(200).png';
import homeSettingsIcon from './img/houseCustoming(200).png';

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
                        image={homeIcon}
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
                        <Button size='small' color='primary'>
                            Профиль
                        </Button>
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
                        image={homeSettingsIcon}
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
                        <Button size='small' color='primary'>
                            Управление
                        </Button>
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
