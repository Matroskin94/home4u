const stylesJS = theme => (
    {
        cameraCard: {
            flex: '2 0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0 10px',
            marginRight: '10px',
            minWidth: '400px',
            /* margin: '20px auto 20px auto', */
            [theme.breakpoints.down('900')]: {
                flex: '2 0 auto',
                margin: '0 0 10px 0'
            }
        },
        header: {
            padding: '10px 0'
        },
        infoContainer: {
            flex: '1 0 auto',
            minWidth: '400px',
            [theme.breakpoints.down('900')]: {
                width: '100%',
                flex: '2 0 auto'
            }
        },
        cameraInfo: {
            margin: '0 10px'
        },
        playerWrapper: {
            width: '100%',
            maxWidth: '640px',
            position: 'relative',
            paddingTop: '56.25%' /* Player ratio: 100 / (1280 / 720) */
        },
        reactPlayer: {
            position: 'absolute',
            maxHeight: '360px',
            top: 0,
            left: 0
        }
    }
);

export default stylesJS;
