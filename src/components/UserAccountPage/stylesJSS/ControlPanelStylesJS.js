const stylesJS = theme => (
    {
        controlPanelContainer: {
            width: '100%'
        },
        floorContainer: {
            display: 'flex',
            flex: '1 1 auto',
            flexWrap: 'wrap',
            margin: '10px 0 0 0'
            /* [theme.breakpoints.down('xs')]: {
                width: '90%',
                margin: '70px auto 20px auto'
            } */
        },
        roomTitle: {
            marginBottom: '5px'
        }
    }
);

export default stylesJS;
