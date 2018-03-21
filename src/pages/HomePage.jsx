import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import changeState from '../components/HomePage/actions';
import TopMenu from '../components/TopMenu/TopMenu.jsx';
import Content from '../components/HomePage/Content.jsx';
import Footer from '../components/HomePage/Footer.jsx';
import homePageWrapper from '../components/HomePage/HomePageWrapper.jsx';
import HiddenMenu from '../components/TopMenu/HiddenMenu.jsx';

@homePageWrapper()
class HomePage extends PureComponent {
    static propTypes = {
        changeState: PropTypes.func,
        homeState: PropTypes.bool,
        styles: PropTypes.object
    };

    static defaultProps = {
        changeState: {},
        homeState: false,
        styles: {}
    };

    handleClick = () => {
        this.props.changeState(this.props.homeState);
    }

    render() {
        const styles = { ...this.props.styles };

        return (
            <div className={styles.wrapper}>
                <TopMenu />
                <Content />
                <Footer />
                <HiddenMenu />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        homeState: state.homePageReducer.homeState
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changeState: homeState => dispatch(changeState(homeState))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
