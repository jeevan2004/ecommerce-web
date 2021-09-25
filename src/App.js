import React, {useState} from 'react';
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
import About from './Pages/About';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
const App = () => {
  
    return (
        <Router>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route  path="/about" component={About}/>
       </Switch>
       <Footer/>
        </Router>
    )
}

export default App
