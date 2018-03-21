const stylesJS = theme => ({
    container: {
        boxSizing: 'border-box',
        width: '100vw',
        height: '100vh',
        display: 'flex',
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
    buttonContainer: {
        display: 'flex'
    },
    button: {
        margin: '5px auto'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '45%',
        [theme.breakpoints.down('xs')]: {
            width: '90%'
        }
    }
});

export default stylesJS;
