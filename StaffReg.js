import logo from './logo.svg';
import React from 'react';
import { Router, Switch, Route, Link } from "react-router-dom";
//import './App.css';
//import './FirstPage.css';
import './StaffReg.css';

function StaffReg() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Staff Registration Form 
        </p>
        <div className='container'>
                                    <div>
                                <input className='Signtext' type='text' placeholder='Last Name'></input><br></br>
                                <input className='Signtext' type='text' placeholder='First Name'></input><br></br>
                                <input className='Signtext' type='text' placeholder='Department'></input><br></br>
                                <input className='Signtext' type='text' placeholder='Computer Number'></input><br></br>
                                <input className='Signtext' type='text' placeholder='Designation'></input><br></br>
                                <input className='Signtext' type='text' placeholder='Cadre'></input><br></br>
                                <button className='Bsign'>Register</button>
                                <Link to="/"> <button className='Bsign'>Cancel</button></Link>
                                </div>
                                <div>
                                    <div>
                                        <input className='frame'></input><br></br>
                                    
                                        <input type="file"/><br></br>
                                        <a>Please Select Image to Upload</a>
                                    </div>
                                </div>

      </div>
         
      </header>
     
    </div>
    
  
  );
}

export default StaffReg;
