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
        }
    }
);

export default stylesJS;


/*
margin: '80px auto 20px auto',
            padding: '12px',
            [theme.breakpoints.down('xs')]: {
                width: '90%',
                margin: '70px auto 20px auto'
            }

*/