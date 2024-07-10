import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Cart from './cart/Cart';
// import Navbar from './components/Navbar';
import DetailedCategory from './cart/DetailedCategory';
import AddDetailForm from './components/AddDetailForm';
import ProfilePage from './components/ProfilePage';
// import Search from './cart/Search';
import OrderConfirmation from './components/Order';
import EditProfilePage from './components/EditProfile';

function App() {
  const [addedProducts, setAddedProducts] = useState([]);

  useEffect(() => {
    // Load cart items from local storage on initial render
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      setAddedProducts(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    // Save cart items to local storage whenever addedProducts changes
    localStorage.setItem('cartItems', JSON.stringify(addedProducts));
  }, [addedProducts]);

  const updateAddedProducts = (updatedAddedProducts) => {
    setAddedProducts(updatedAddedProducts);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <div className="flex flex-col h-auto">
              <div className="h-auto flex">
                <Sidebar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route
                    path="/cart"
                    element={
                      <Cart
                        addedProducts={addedProducts}
                        updateAddedProducts={updateAddedProducts}
                      />
                    }
                  />
                  <Route
                    path="/:categoryId"
                    element={
                      <DetailedCategory
                        addedProducts={addedProducts}
                        addToCart={(product) => updateAddedProducts([...addedProducts, product])}
                      />
                    }
                  />
                  <Route
                    path="/login"
                    element={
                      <div className="flex flex-col w-full">
                        <Login />
                      </div>
                    }
                  />
                  <Route
                    path="/profile"
                    element={
                      <div className="flex flex-col w-full">
                        <ProfilePage />
                      </div>
                    }
                  />
                  <Route
                    path="/order"
                    element={
                      <div className="flex flex-col w-full">
                        {/* <Navbar /> */}
                        <OrderConfirmation />
                      </div>
                    }
                  />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/addproducts" element={<AddDetailForm />} />
                  <Route path="/edit-profile" element={<EditProfilePage />} />
                </Routes>
              </div>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
