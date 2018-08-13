const drawerWidth = 200;
const frameHeight = 380;
const stylesJS = theme => (
    {
        container: {
            flex: '1 0 auto',
            width: '75%',
            margin: '80px auto 20px auto',
            padding: '20px',
            [theme.breakpoints.down('xs')]: {
                width: '90%',
                margin: '70px auto 20px auto'
            }
        },
        appFrame: {
            height: frameHeight,
            zIndex: 1,
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            width: '100%'
        },
        appBar: {
            position: 'absolute',
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            })
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth})`,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            })
        },
        appBarShiftLeft: {
            marginLeft: drawerWidth
        },
        drawerPaper: {
            position: 'relative',
            width: drawerWidth
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: '0 8px 0 24px',
            minHeight: '35px'
        },
        content: {
            flexGrow: 1,
            overflow: 'auto',
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing.unit * 3,
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            })
        },
        contentLeft: {
            marginLeft: -drawerWidth
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            })
        },
        icon: {
            paddingRight: '10px'
        },
        floorsContainer: {
            padding: '10px 0px'
        }
    }
);

export default stylesJS;
