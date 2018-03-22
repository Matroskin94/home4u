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
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    },
    button: {
        margin: '5px auto'
    },
    textField: {
        width: '100%'
    },
    icon: {
        margin: '35px 10px 5px 0px',
        color: '#303F9F'
    }
});

export default stylesJS;
