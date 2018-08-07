const stylesJS = theme => ({
    container: {
        boxSizing: 'border-box',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        padding: '10px'
    },
    paper: {
        padding: 16,
        margin: 'auto',
        width: '50vw',
        maxWidth: '540px',
        [theme.breakpoints.down('sm')]: {
            width: '90%'
        }
    },
    errorContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        margin: '0 0 10px 34px'
    },
    restorePassword: {
        color: '#303F9F'
    },
    flexContainer: {
        display: 'flex',
        width: '100%'
    },
    button: {
        margin: '5px auto'
    },
    textField: {
        marginTop: '8px',
        width: '100%'
    },
    icon: {
        margin: '30px 10px 5px 0px',
        color: '#303F9F'
    }
});

export default stylesJS;
