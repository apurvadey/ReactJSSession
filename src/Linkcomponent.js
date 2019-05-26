import React from 'react';
import PropTypes from 'prop-types';

class LinkComponent extends React.Component {
    constructor(props) {
        super(props);
        this.gotClicked = this.gotClicked.bind(this);
        this.getPointerMove = this.getPointerMove.bind(this);
        this.state = {
            visited: false
        };
    }
    gotClicked(event) {
        event.preventDefault();
        console.log("I am event");
        console.log(event);
        console.log(event.target);
        this.setState({visited: true });
    }

    getPointerMove(e) {
        
        console.log("I am another event");
        console.log(e);
        console.log(e.target);
    }
    componentDidMount() {
        console.log("I am mounted in LinkComponent");
    }

    render() {
        let visitedColor = this.state.visited ? 'red' : 'green'
       // let linkColor = this.props.color;
        let linkWeight = this.props.fontWeight;
        let linkSize = this.props.fontSize;
        let linkStyle = {
            color: visitedColor,
            fontWeight: linkWeight,
            fontSize: linkSize
        };
        return (
            <a onPointerMove={this.getPointerMove} onClick={this.gotClicked} style={linkStyle} href={this.props.apiUrl}>{this.props.urlName}</a>
        );
    }
}


LinkComponent.propTypes = {
    color: PropTypes.string,
    apiUrl: PropTypes.string,
    urlName: PropTypes.string,
}

export default LinkComponent;