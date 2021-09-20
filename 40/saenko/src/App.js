import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ContactsList from './components/ContactsList';
import NameCard from './components/ContactInfo/NameCard';
import PhoneCard from './components/ContactInfo/PhoneCard';
import CallsList from './components/CallsList';

function App() {
  return (
      <Router>
        <Link to="/calls">Calls</Link>
        <Switch>
          <Route path='/' exact component={ContactsList}/>
          <Route path='/:name' exact component={NameCard} />
          <Route path='/:name/:phone' component={PhoneCard}/>
          <Route path='/calls' component={CallsList}/>
        </Switch>
      </Router>
  );
}

export default App;
