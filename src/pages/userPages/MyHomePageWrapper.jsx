import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import TopMenu from '../../components/TopMenu/TopMenu.jsx';
import Footer from '../../components/HomePage/Footer.jsx';
import homePageWrapper from '../../components/HomePage/HomePageWrapper.jsx';
import HiddenMenu from '../../components/TopMenu/HiddenMenu.jsx';

@homePageWrapper()
class houseAccountPage extends PureComponent {
    static propTypes = {
        styles: PropTypes.object,
        children: PropTypes.element.isRequired
    };
    static defaultProps = {
        styles: {}
    };

    menuItems = [
        { itemText: 'Профиль', itemLink: '/myhome/account' },
        { itemText: 'Управление', itemLink: '/myhome/control' },
        { itemText: 'Выход', itemLink: '/' }
    ];

    render() {
        const styles = { ...this.props.styles };

        return (
            <div className={styles.wrapper}>
                <TopMenu menuItems={this.menuItems} />
                {this.props.children}
                <Footer />
                <HiddenMenu menuItems={this.menuItems} />
            </div>
        );
    }
}


export default houseAccountPage;

