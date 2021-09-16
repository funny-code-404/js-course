import { Component } from 'react';


import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import TextBlock from './components/TextBlock';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="app">

				<Header />
				<TextBlock />
				<Main
					data={[
						{
							id: 1,
							title: "article1",
							text: "lorem ipsum dolor sit amet, consectetur adip "
						},
						{
							id: 2,
							title: "article2",
							text: "lorem ipsum dolor sit amet, consectetur adip "
						},
						{
							id: 3,
							title: "article3",
							text: "lorem ipsum dolor sit amet, consectetur adip "
						}

					]}
				/>
				<Footer loading={true} />
			</div>
		);
	}
}

export default App;

// const App = () => {
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<p>
// 					hello nastya
// 				</p>
// 			</header>
// 		</div>
// 	);
// }