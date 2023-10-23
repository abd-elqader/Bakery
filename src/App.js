import './App.css';
import { Component, Fragment } from 'react';


import Header from './Components/Header/Header.jsx';
import About from './Components/About/About.jsx';
import Home from './Components/Home/Home.jsx';
import Recipes from './Components/Recipes/Recipes.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Testimonials from './Components/Testimonials/Testimonials.jsx';

import "./style.css";
class App extends Component {

  render() {
    return <Fragment>

      <div className="peachy-pup-bakery">
        <div className="div">
          <Home />
          <About />
          <Testimonials />
          <Contact />
          <Footer />
          <Header />
          <Recipes />
        </div>
      </div>

    </Fragment>
  }
}



export default App;
