const stylesJS = theme => (
    {
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
        smallCard: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: 320,
            height: 100,
            margin: '0 10px 10px 0',
            paddingRight: '10px'
        },
        smallCardContent: {
            alignSelf: 'flex-start',
            padding: '10px'
        },
        maediaImg: {
            width: 80,
            minWidth: 80,
            height: 80
        }
    }
);

export default stylesJS;
