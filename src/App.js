import './App.css';
import { Component, Fragment } from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/Home.jsx';
import Footer from './Components/Footer/Footer.jsx';
class App extends Component {

  render() {
    return <Fragment>
      <Navbar />
      <Home />
      <Footer />
    </Fragment>
  }
}



export default App;
