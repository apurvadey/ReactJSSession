import React from 'react';
import PropTypes from 'prop-types';

class LinkComponent extends React.Component {
    componentDidMount() {
        console.log("I am mounted in LinkComponent");
    }

    render() {
        let linkColor = this.props.color;
        let linkWeight = this.props.fontWeight;
        let linkSize = this.props.fontSize;
        let linkStyle = {
            color: linkColor,
            fontWeight: linkWeight,
            fontSize: linkSize
        };
        return (
            <a style={linkStyle} href="true">{this.props.urlName}</a>
        );
    }
}


LinkComponent.propTypes = {
    color: PropTypes.string,
    apiUrl: PropTypes.string,
    urlName: PropTypes.string,
}

export default LinkComponent;