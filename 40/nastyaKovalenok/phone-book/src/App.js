import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from "./components/HomePage/HomePage";
import DescriptionContact from "./components/DescriptionContact/DescriptionContact";


function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' component={HomePage} exact/>
                <Route path='/descriptionContact/:contactId' component={DescriptionContact}/>
            </Switch>
        </Router>
    );
}

export default App;