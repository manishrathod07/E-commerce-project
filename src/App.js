
import Sidebar from './components/Sidebar';
import Home from './components/Home';
// import Login from "./components/Login"
// import Signup from "./components/Signup"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from 'react';
function App() {
  return(
    <div >
      <div className='flex flex-row'>
      <Sidebar/>
      <Home/>
      </div>
    </div>
  );
}

export default App;
