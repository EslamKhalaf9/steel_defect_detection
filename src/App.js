import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Features from './components/Features';
import Charts from './components/Charts';
import Form from './components/Form';
import Footer from './components/Footer';
import Report from './components/Report'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

class App extends React.Component {
  state = {
    hasDefect: false,
    classes: [],
    mask: ''
  }
  changeResult = (result) => {
    this.setState({ result });
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/" exact>
            <header className="App-header">
              <Navbar />
              <Carousel />
            </header>
            <main data-spy="scroll" data-target="#main-nav" data-offset="0">
              <Features />
              <Charts />
              <Form changeResult={this.changeResult} />
            </main>
            <Footer />
          </Route>
          <Route path="/report" exact>
            <Report result={this.state} />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
