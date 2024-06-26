import logo from './logo.svg';
import './App.css';
import './FirstPage.css';
import React from 'react';
import FirstPage from './FirstPage';
import { Router, Switch, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className='SignUp'>
        <div className="App">
    <header className="App-header">
    <p> WELCOME TO FACULTY OF COMPUTING MANAGEMENT SYSTEM</p> 
    <img src={`unidel pic.jpg`} alt="" className="del_logo" />
      {/* <img src={logo} className="App-logo" alt="logo" /> */}

    </header>
                            <div className='SignUp'>
                            <a className='reftext'>Already Have an Account? Please Sign In </a> <br></br>
                            <input className='Username' placeholder='Username' required></input><br></br>
                            <input className='Password' type='password' placeholder='Password' required></input><br></br>
                            <button className='newsign'>Sign In</button>  <br></br>
                            <a className='reftext'>Don't Have an Account? Please Register Here </a> <br></br>
                            <br></br>
                            <Link to="StaffReg"><button className='Hsign'>Register New Staff</button></Link>
                            <Link to="Student"> Student </Link>
                            <Link to="FirstPage ">
                          <button className='H_sign'>Register New Student</button><br></br>
                            </Link>
                            <Link to="Dashboard">
                            <button className='Dash'>Dashboard</button><br></br>
                            </Link>
                            </div>
  </div>
  
  </div>
    
    
  
  );
}

export default Home;
