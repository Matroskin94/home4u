import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import TopMenu from '../components/TopMenu/TopMenu.jsx';
import Content from '../components/HomePage/Content.jsx';
import Footer from '../components/HomePage/Footer.jsx';
import homePageWrapper from '../components/HomePage/HomePageWrapper.jsx';
import HiddenMenu from '../components/TopMenu/HiddenMenu.jsx';

@homePageWrapper()
class housePage extends PureComponent {
    static propTypes = {
        styles: PropTypes.object
    };

    static defaultProps = {
        styles: {}
    };

    menuItems = [
        { itemText: 'Вход', itemLink: '/login' },
        { itemText: 'Регистрация', itemLink: '/registration' }
    ];

    render() {
        const styles = { ...this.props.styles };

        return (
            <div className={styles.wrapper}>
                <TopMenu menuItems={this.menuItems} />
                <Content />
                <Footer />
                <HiddenMenu menuItems={this.menuItems} />
            </div>
        );
    }
}

export default housePage;
