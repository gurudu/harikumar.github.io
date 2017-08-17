import React, { Component } from 'react';
//import logo from './logo.svg';
import '.././styles/App.css';
import {projectsData} from '../data/projectsData';


import {Header,Footer, Projects} from '../components/components';

class App extends Component {
  render() {

    return (
      <div className="main-app-container container-fluid">
          <Header />
        <div className="introduction row">
        <div className="col-md-8">
           <br />
           <br />
          <h3>Hi, I am Hari Kumar. <br/> I am an enthusiastic and passionate web developer.</h3> <br/>

           </div>
           <div className="col-md-4">
           <img src="Hari.png" alt="Hari" className="profile-pic"></img>
           </div>
        </div>
        <div className="main-app-nav">Some of my selected projects:</div>
          <Projects projectsData={projectsData}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
