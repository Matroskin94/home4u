import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import TopMenu from '../../components/TopMenu/TopMenu.jsx';
import Footer from '../../components/HomePage/Footer.jsx';
import homePageWrapper from '../../components/HomePage/HomePageWrapper.jsx';
import HiddenMenu from '../../components/TopMenu/HiddenMenu.jsx';

import ROUTES from '../../constants/routes';

@homePageWrapper()
class Layout extends PureComponent {
    static propTypes = {
        styles: PropTypes.object,
        children: PropTypes.element.isRequired
    };
    static defaultProps = {
        styles: {}
    };

    menuItems = [
        { itemText: 'Профиль', itemLink: ROUTES.MY_HOME_ACCOUNT },
        { itemText: 'Управление', itemLink: ROUTES.MY_HOME_CONTROL },
        { itemText: 'Мониторинг', itemLink: ROUTES.MY_HOME_MONITORING },
        { itemText: 'Выход', itemLink: ROUTES.BASE }
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


export default Layout;

