import React from 'react';
import './App.css'
//import { ReactComponent } from '*.svg';

class LinkComponent extends React.Component {
    componentDidMount() {
        console.log("I am mounted in LinkComponent");
    }
    render() {
        return (
            <a href={this.props.apiUrl}>{this.props.urlName}</a>
        );
    }
}

class SidebarComponent extends React.Component {
    
    componentDidMount() {
        console.log("I am mounted in Sidebar");
    }
    render() {
        console.log('I am the prop',this.props);
        console.log(this.props.urlList.length);
        let linkContainer = [];

        if (this.props.urlList.length > 0) {
            this.props.urlList.forEach((value, index) => {
            linkContainer.push(
            <li key={index}>
                <LinkComponent apiUrl={value.apiUrl} urlName={value.urlName}/>
            </li>);
        });
    }


        return (
        <>
        
            <ul>
              {linkContainer}
            </ul>
        </>
        );
    }
}


export default SidebarComponent;