import logo from './logo.svg';
//import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import React from 'react';
import StaffReg from './StaffReg';
import FirstPage from './FirstPage';
import Home from './Home';
import Dashboard from './Dashboard';
import Student from './Student';
import { Router, Switch, Route, Link, BrowserRouter, Routes } from "react-router-dom";



function App() {
    
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Link to="/Home">Home</Link> */}
    <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/StaffReg" element={<StaffReg/>} />
        <Route path="/FirstPage" element={<FirstPage/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Student" element={<Student/>} />
     
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;


// function App()
//  {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
      
//     </div>
  
  
//   );
// }

// export default App;
