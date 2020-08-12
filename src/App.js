import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Features from './components/Features';
import Charts from './components/Charts';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Carousel />
      </header>
      <main data-spy="scroll" data-target="#main-nav" data-offset="0">
        <Features />
        <Charts />
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default App;
