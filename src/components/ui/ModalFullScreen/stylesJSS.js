const styles = theme => ({
    appBar: {
        position: 'relative',
        overflow: 'hidden'
    },
    modalTitle: {
        marginLeft: '5px',
        flex: 1
    },
    contentContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        height: '100%',
        padding: '15px',
        boxSizing: 'border-box',
        backgroundColor: theme.palette.background.default
    }
});

export default styles;
