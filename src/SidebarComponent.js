import React, { lazy, Suspense} from 'react';
import './App.css'
//import { ReactComponent } from '*.svg';
import LinkComponent from './Linkcomponent';
//import NameForm from './NameForm';
const NameForm = lazy(() => import('./NameForm'));



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
                <LinkComponent apiUrl={value.apiUrl} urlName={value.urlName} color={value.color} fontWeight={value.fontWeight} fontSize={value.fontSize}/>
            </li>);
        });
    }


        return (
        <>
            <ul>
              {linkContainer}
            </ul>
            <Suspense fallback={<div>Loading....</div>}>
               <NameForm/>
            </Suspense>
        </>
        );
    }
}


export default SidebarComponent;