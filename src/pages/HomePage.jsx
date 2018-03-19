import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import changeState from '../components/HomePage/actions';
import TopMenu from '../components/TopMenu/TopMenu.jsx';
import Content from '../components/HomePage/Content.jsx';

class HomePage extends PureComponent {
    static propTypes = {
        changeState: PropTypes.func,
        homeState: PropTypes.bool
    };

    static defaultProps = {
        changeState: {},
        homeState: false
    };

    handleClick = () => {
        this.props.changeState(this.props.homeState);
    }

    render() {
        return (
            <div>
                <TopMenu />
                <Content />
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
