import thermBack from '../../../../assets/TemperatureCard.png';
import humidity from '../../../../assets/HumidityCard.png';
import presure from '../../../../assets/PresureCard.png';

const stylesJS = theme => (
    {
        leftSide: {
            display: 'flex',
            flex: '2 0 auto',
            minWidth: '350px',
            width: '50%',
            flexDirection: 'column',
            padding: '10px',
            boxSizing: 'border-box',
            flexWrap: 'wrap',
            marginRight: '10px',
            [theme.breakpoints.down('930')]: {
                margin: '0 0 10px 0'
            }
        },
        rightSide: {
            flex: '1 0 auto',
            minWidth: '350px',
            padding: '10px',
            boxSizing: 'border-box',
            [theme.breakpoints.down('930')]: {
                width: '100%'
            }
        },
        temperature: {
            background: `url(${thermBack})`
        },
        humidity: {
            background: `url(${humidity})`
        },
        pressure: {
            background: `url(${presure})`
        },
        graphPaper: {
            display: 'flex',
            flexDirection: 'row',
            flexShrink: 0,
            justifyContent: 'space-between',
            width: '310px',
            height: '90px',
            padding: '10px',
            margin: '10px 5px 0',
            '&  *': {
                color: 'white'
            }
        },
        flexColumn: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around'
        },
        flexRow: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        },
        unitData: {
            fontSize: '4rem',
            lineHeight: '3rem',
            display: 'flex',
            '& > span': {
                fontSize: '1rem',
                lineHeight: '1rem'
            }
        },
        additionalData: {
            margin: '10px 0 0 0',
            '& *': {
                lineHeight: '1rem'
            }
        }
    }
);

export default stylesJS;
