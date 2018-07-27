const stylesJS = theme => (
    {
        container: {
            width: '75%',
            margin: 'auto',
            [theme.breakpoints.down('xs')]: {
                width: '90%',
                fontSize: 14
            }
        },
        footer: {
            flexShrink: 0,
        }
    }
);

export default stylesJS;
