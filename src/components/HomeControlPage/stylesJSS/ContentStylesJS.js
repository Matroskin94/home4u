const stylesJS = theme => (
    {
        container: {
            flex: '1 0 auto',
            width: '75%',
            margin: '80px auto 20px auto',
            [theme.breakpoints.down('xs')]: {
                width: '90%',
                margin: '70px auto 20px auto'
            }
        },
        headerFont: {
            [theme.breakpoints.down('xs')]: {
                fontSize: '2rem'
            }
        },
        descriptionFont: {
            [theme.breakpoints.down('xs')]: {
                fontSize: '1.2rem',
                textAlign: 'justify'
            }
        },
        alignTop10: {
            marginTop: '10px'
        },
        preloaderWrapper: {
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            background: 'rgb(92,107,192, 0.3)',
            zIndex: '1101'
        }
    }
);

export default stylesJS;
