import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Home from './Home';
import About from './About';
import Products from './Products';
import Contact from './Contact';
import Footer from './Footer';
import { AppContext } from '../context/AppContext';
import ProductDetails from './ProductDetails';

export default function Main() {
    const { blackNav } = useContext(AppContext);

    return (
        <BrowserRouter>
            <>
                <div className="header">
                    <Navbar />
                </div>
                <div className={`mainarea ${blackNav ? "main__black" : ''}`}>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact  path="/omnie" element={<About />} />
                        <Route exact  path="/torebki" element={ <Products />} />
                        <Route exact  path="/kontakt" element={<Contact />} />
                        <Route path="/torebki/:productId" element={<ProductDetails />} />
                    </Routes>
                </div>
                <Footer />
            </>
        </BrowserRouter>
    );
}