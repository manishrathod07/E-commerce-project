import React from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Cart from './cart/Cart';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailedCategory from './cart/DetailedCategory';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <div className='flex flex-col h-auto'>
            
              <Routes className="h-auto">
                <Route path="/" element={
                <div className="flex flex-row h-auto">
                <Sidebar />
                <Home/>
                </div>} />
                <Route path="/cart" element={
                <div className="flex flex-row h-auto">
                <Sidebar />
                <Cart/>
                </div>} />
                <Route path="/detailedcategory" element={
                <div className="flex flex-row h-auto">
                <Sidebar />
                <DetailedCategory/>
                </div>} />
                <Route path="/login" element={
                <div className='flex flex-col w-full'>
                  <Navbar/>
                  <Login/>
                </div>} />
                {/* <Route path="/login" element={<Login />} /> */}
                <Route path="/signup" element={
                <div className='flex flex-col w-full'>
                  <Navbar/>
                  <Signup/>
                </div>} />
              </Routes>
            
            <Footer/>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
