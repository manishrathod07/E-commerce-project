import React from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Login from './components/Login';
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <div className='flex flex-col h-auto'>
            <div className="flex flex-row h-auto">
              <Sidebar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
            <Footer/>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
