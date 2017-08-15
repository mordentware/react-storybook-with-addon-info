import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {

    handleClick = (...rest) => {
        this.props.onClick && this.props.onClick(...rest);
    }

    render() {
        const { children } = this.props;
        return (
            <button onClick={this.handleClick}>{children}</button>
        );
    }

}

Button.displayName = 'Button';
Button.propTypes = {
    /**
     * Button label
     */
    children: PropTypes.node,
    /** Click callback */
    onClick: PropTypes.func,
};
