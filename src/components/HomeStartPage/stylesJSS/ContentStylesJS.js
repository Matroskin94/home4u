const stylesJS = theme => (
    {
        container: {
            flex: '1 0 auto',
            width: '95%',
            margin: '80px auto 20px auto',
            padding: '12px',
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
        media: {
            paddingTop: '10px',
            height: 200,
            backgroundSize: 'auto'
        },
        card: {
            boxSizing: 'content-box',
            minHeight: 370,
            position: 'relative'
        },
        cardActions: {
            position: 'absolute',
            bottom: 0
        }
    }
);

export default stylesJS;
