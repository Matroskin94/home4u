const stylesJS = theme => (
    {
        container: {
            width: '75%',
            margin: 'auto',
            [theme.breakpoints.down('xs')]: {
                width: '90%'
            }
        },
        logoIcon: {
            marginRight: '10px'
        },
        link: {
            color: 'white'
        },
        flex: {
            flex: '1 0 auto'
        }
    }
);

export default stylesJS;
