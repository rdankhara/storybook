import React from 'react';
import PropTypes from 'prop-types';

const Button = ({bg, children}) => (
    <button style={{backgroundColor: bg}}>{children}</button>
);

Button.propTypes = {
    bg: PropTypes.string.isRequired,
    children : PropTypes.element.isRequired
}
export default Button;