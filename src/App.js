import React from 'react';
import logo from './logo.svg';
import './App.css';
import SidebarComponent from './SidebarComponent';
import MainComponent from './Main';
//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//      <a
//          className="App-link"
//        href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}

class App extends React.Component {
  render() {
    let urlList= [
      {
        urlName: "vinit",
        apiUrl: "https://vinitkumar.me",
        color: "red",
        fontWeight: 700,
        fontSize: "40px"
      },
      {
        urlName: "apurva",
        apiUrl: "https://apurvadey.github.io",
        color: "green",
        fontWeight: 500,
        fontSize: "40px"
      },
    ];
    return (
      <div className="App">
        <div className="sidebar">
          <h1>Sidebar</h1>
          <SidebarComponent urlList={urlList}/>
        </div>
        <div className="main">
         <h1>Main Container</h1> 
         <MainComponent/>
         </div>
      </div>
    )
  }
}

export default App;
