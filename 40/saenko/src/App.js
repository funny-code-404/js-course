import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { contacts } from './components/ContactsList/config';
import ContactsList from './components/ContactsList/ContactsList';

function App() {
  return (
    
    <div className="App">
      <Router>
        <Switch>
          <Route path='/'/>
        </Switch>
      </Router>
      <ContactsList contacts={contacts}/>
    </div>
  );
}

export default App;
