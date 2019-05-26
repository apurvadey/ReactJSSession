import React from 'react';

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
            <a style={linkStyle} href={this.props.apiUrl}>{this.props.urlName}</a>
        );
    }
}

export default LinkComponent;