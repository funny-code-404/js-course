import { Component } from 'react';

import Header from './components/Header';
import About from './components/About';
import Servicies from './components/Servicies';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App">
     <Header/>
     <About/>
     <Servicies/>
     <Footer />
    </div>
  );
} 
}

export default App;


// исключение: class -> className
//              for -> htmlForm
// стили инлайн: JSON-объект 
/*
<div
style={{
  color:r 'red',
  backgroundColor: 'green',
}}> </div>
 */
                 