import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (
    <div>
        <h1>Умный дом!!! {String(props.houseState)}</h1>
    </div>
);

Header.propTypes = {
    houseState: PropTypes.bool
};

Header.defaultProps = {
    houseState: false
};

export default Header;
