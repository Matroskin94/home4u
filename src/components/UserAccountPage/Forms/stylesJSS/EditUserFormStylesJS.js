const styleJSS = theme => ({
    formContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    textField: {
        marginRight: theme.spacing.unit,
        marginTop: 0,
        flex: '1 1 auto',
        [theme.breakpoints.down('xs')]: {
            flex: '1 1 100%'
        }
    },
    textFieldLarge: {
        marginRight: theme.spacing.unit,
        marginTop: 0,
        flex: '1 1 100%'
    }
});

export default styleJSS;
