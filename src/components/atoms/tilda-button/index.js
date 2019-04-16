import React from 'react';
import PropTypes from 'prop-types';

class TildaButton extends React.Component {
    render() {
        return (
            <button style={this.props.style}>{this.props.children}</button>
        )
    }
}

TildaButton.propTypes = {
    children: PropTypes.node,
    style: PropTypes.shape({
        color: PropTypes.string,
        backgroundColor: PropTypes.string.isRequired,
    }),
};

export default TildaButton;