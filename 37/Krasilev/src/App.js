import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Services from './components/Services/Services';
import Work from './components/Work/Work';

const App = () => (
  <>
    <Header />
    <Navigation />
    <main className="main">
      <About />
      <Services />
      <Work />
    </main>
  </>
);

export default App;
