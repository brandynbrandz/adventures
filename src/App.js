import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp';



function App() {
  return (
    <>
      <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/services" component={Services}/>
        <Route exact path="/products" component={Products}/>
        <Route exact path="/sign-up" component={SignUp}/>

      </Switch>
      </Router>
 
    </>
  );
}

export default App;
