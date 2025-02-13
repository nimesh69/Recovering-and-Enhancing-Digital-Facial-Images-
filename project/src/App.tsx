import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  HomePage  from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import Message from './pages/Message';
import  { Trynow } from './pages/Trynow';
import   Aboutus  from './pages/Aboutus';
import   OurWork  from './pages/OurWork';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Contactus" element={<Message />} />
        <Route path="/Trynow" element={<Trynow />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/OurWork" element={<OurWork />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;