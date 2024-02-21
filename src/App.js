// Trong file App.js hoặc file chứa các Route
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cartview from './Cart';
import ShoppingCart from './ShoppingCart';

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/cart" element={<Cartview />} /> {/* Đảm bảo đường dẫn cho trang Cart */}
      </Routes>
      <Routes>
        <Route path="/" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
}

export default App;