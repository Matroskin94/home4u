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
        roomTitle: {
            marginBottom: '5px'
        },
        smallCard: {
            display: 'flex',
            alignItems: 'center',
            overflow: 'inherit',
            justifyContent: 'space-between',
            width: 320,
            height: 130,
            margin: '0 10px 10px 0',
            paddingRight: '10px'
        },
        smallCardContent: {
            display: 'flex',
            alignSelf: 'stretch',
            padding: '10px',
            flexDirection: 'column',
            justifyContent: 'space-between'
        },
        maediaImg: {
            width: 80,
            minWidth: 80,
            height: 80
        },
        unitInfo: {
            height: '80px'
        },
        unitTitle: {
            fontSize: '1rem'
        },
        unitData: {
            fontSize: '0.85rem'
        },
        cardActionButton: {
            marginRight: '5px'
        },
        cardActions: {

        }
    }
);

export default stylesJS;
