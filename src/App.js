import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import Home from './Pages/Home'; // Home sayfası
import Contact from './Pages/Contact'; // Contact sayfası
import Footer from './Component/Footer';
import FAQ from './Pages/FAQ';
import About from './Pages/About';
import Products from './Pages/Products';
import Resources from './Pages/Resources';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/resources" element={<Resources/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
