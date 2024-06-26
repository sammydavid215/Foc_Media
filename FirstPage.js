import logo from './logo.svg';
import './App.css';
import './FirstPage.css';
import React from 'react';
import { Router, Switch, Route, Link } from "react-router-dom";

function FirstPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Student Registration Form 
        </p>
        <div>

        <div>
                                    <div>
                                        <input className='frame'></input><br></br>
                                    
                                        <input type="file"/><br></br>
                                        <a>Please Select Image to Upload</a>
                                    </div>
                                </div>
        <div className='Container1'>
        <input className='Signtext' type='text' placeholder='Last Name'></input><br></br>
        <input className='Signtext' type='text' placeholder='First Name'></input><br></br>
        <input className='Signtext' type='text' placeholder='Department'></input><br></br>
        <input className='Signtext' type='text' placeholder='Mat Number'></input><br></br>
        <input className='Signtext' type='text' placeholder='Level'></input><br></br>
        <button className='Bsign'>Register</button>
        <Link to="/"><button className='Bsign'>Cancel</button></Link>

      </div>
    

        </div>
       
      </header>
     
    </div>
    
  
  );
}

export default FirstPage;
