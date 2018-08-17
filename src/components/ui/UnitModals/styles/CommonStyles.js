const stylesJS = theme => (
    {
        container: {
            flex: '1 0 auto',
            width: '96%',
            [theme.breakpoints.down('xs')]: {
                width: '90%',
                margin: '70px auto 20px auto'
            }
        }
    }
);

export default stylesJS;
