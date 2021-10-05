import React, {useEffect}from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";
import "./App.css";
import Home from './Pages/Home';
// import products from './components/Trending/products';
import TrendingPage from './Pages/TrendingPage';
import SellerPage from './Pages/SellerPage.';
// import SellerProduct from './components/Seller/SellerProduct';
import BlogPage from './Pages/BlogPage';
import BlogFullWidth from './Pages/BlogFullWidth';
import NotFound from './Pages/NotFound';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';
import About from './Pages/About';
import AOS from 'aos';
import "aos/dist/aos.css";
const App = () => {
  useEffect(() => {
      AOS.init()
  },[]);
    return (
        <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/trendingPage/:id" render={products =>(<TrendingPage {...products}/>)}></Route>
            <Route exact path="/sellerPage/:id" render={SellerProduct =>(   <SellerPage {...SellerProduct}/>)}></Route>
            <Route exact path="/blog" component={BlogPage}/>
            <Route exact path="/blog/full-width" component={BlogFullWidth}/>
            <Route exact path="/shop" component={NotFound}/>
            <Route exact path="/portfolio" component={Gallery}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/404" component={NotFound}/>
            <Route exact path="/about" component={About}/>

       </Switch>
        </Router>
    )
}

export default App
