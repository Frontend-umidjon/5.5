import { useState, useEffect, useRef } from 'react'
import './App.css'
import Header from './components/header/Header.jsx'
import Products from './components/hero/Products.jsx'
import Footer from './components/footer/Footer.jsx'
import { NavLink, useNavigate, useLocation, useSearchParams, Routes, Route } from 'react-router-dom';
import LogIn from './pages/LogIn/LogIn.jsx'
import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import Contact from './pages/contact/Contact.jsx'
import NotFound from './pages/notFound/NotFound.jsx'
import DetailPage from './pages/detail/Detail.jsx'

function App() {

  return (
    <>
     <Header/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/product/:id" element={<DetailPage />} />
     </Routes>
    
     <Footer/>
    </>
  )
}

export default App
