import React, { Component } from 'react';

import Select from './components/select/Select';
import BreedImage from './components/breed-image/BreedImage';

import './App.css';

class App extends Component {
	state = {
		breedsList: null,
		selectedBreed: null,
		error: false
	}

	componentDidMount() {
		this.fetchAllBreeds();
	}

	fetchAllBreeds = async () => {
		try {
			const response = await fetch('https://dog.ceo/api/breeds/list/all');
			if (response.ok) {
				const data = await response.json();
				this.setState({
					breedsList: Object.keys(data.message)
				})
			} else {
				this.setState({
					error: true
				})
				alert('Sorry, can not display the data')
			}
		} catch (e) {
			this.setState({
				error: true
			})
			alert('Sorry, can not display the data')
		}
	}
	selectHandler = (breed) => {
		this.setState({
			selectedBreed: breed
		})
	}
	render() {
		console.log(this.state.selectedBreed);
		return (
			<div className="App">
				<Select breedsList={this.state.breedsList} onSelect={this.selectHandler} isError={this.state.error} />
				<BreedImage breed={this.state.selectedBreed} />
			</div>
		);
	}
}

export default App;