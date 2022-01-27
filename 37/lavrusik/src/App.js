import {Content} from './components/content/content'
import { Component } from 'react';
import './App.scss';
import Header from './components/header/header';
import { Nav } from './components/nav/nav';
import { Footer } from './components/footer/footer';
class App extends Component {
  
  render(){
  return (<div>
  <section>   
    <Header HeaderText='PARTNER WITH KONSTUCT' SubtitleText='An award-winning construction management firm' HeaderFootText='SCROLL DOWN'/>
   <Nav/>
   </section>
     <Content/>
     <Footer/>
  
   </div>
  );
}
}

export default App;
