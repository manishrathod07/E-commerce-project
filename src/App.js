import React from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
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
              <Routes className="h-full">
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
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
