import React, {useState} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";
import "./App.css";
import Navbar from './components/Navbar/Navbar';
import Slick from './components/Slider/Slick';
import Promo from './components/Promo/Promo'
import Trending from './components/Trending/Trending';
import Collection from './components/Collection/Collection';
import Seller from './components/Seller/Seller';
import Blog from './components/Blog/Blog';
import Service from './components/Services/Service';
import Footer from './components/Footer/Footer';

const App = () => {
  
    return (
        <>
        
            <Navbar/>
            <Slick/>
            <Promo/>
            <Trending/>
            <Collection/>
            <Seller/>
            <Blog/>
            <Service/>
            <Footer/>
       
        </>
    )
}

export default App
