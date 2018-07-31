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
        headerFont: {
            [theme.breakpoints.down('xs')]: {
                fontSize: '2rem'
            }
        },
        descriptionFont: {
            [theme.breakpoints.down('xs')]: {
                fontSize: '1.2rem',
                textAlign: 'justify'
            }
        },
        alignTop10: {
            marginTop: '10px'
        },
        termometerContainer: {
            flex: '1 0 auto',
            width: '50%'
        },
        accountControls: {
            padding: '10px 0px'
        },
        panelHeader: {
            fontSize: theme.typography.pxToRem(16),
            fontWeight: 400
        },
        icon: {
            paddingRight: '10px'
        },
        rightIcon: {
            marginLeft: theme.spacing.unit
        },
        smallButton: {
            paddingTop: '0px',
            paddingBottom: '0px'
        },
        panelContainer: {
            padding: '24px'
        }
    }
);

export default stylesJS;
