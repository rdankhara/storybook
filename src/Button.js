import React from 'react';
import PropTypes from 'prop-types';

const Button = ({bg, children}) => (
    <button style={{backgroundColor: bg}}>{children}</button>
);

Button.propTypes = {
    bg: PropTypes.string.isRequired,
    children : PropTypes.element.isRequired
}

Button.defaultProps = {
    bg: 'red',
    children : 'hello red button'
}
export default Button;