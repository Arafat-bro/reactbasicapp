import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Services from './components/Services';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar/>
    <Switch>
        <Route exact path="/" component={ Home}/>
        <Route exact path="/about" component={ About}/>
        <Route exact path="/service" component={ Services}/>
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
