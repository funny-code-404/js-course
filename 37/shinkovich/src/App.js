import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import ContactInfo from './components/ContactInfo/ContactInfo';
import NumberInfo from './components/NumberInfo/NumberInfo';
import FriendCard from './components/FriendCard/FriendCard';
import NumberCard from './components/NumberCard/NumberCard';

function App() {
	return (
		<Router>
			<Navigation />
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/contacts/:name' exact component={ContactInfo} />
				<Route path='/numbers/:number' exact component={NumberInfo} />
				<Route path='/contacts/:name/:friendNumber' exact component={FriendCard} />
				<Route path='/contacts/friends/:number/:friendName' exact component={NumberCard} />
			</Switch>
		</Router>
	);
}

export default App;
