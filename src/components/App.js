import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

//const App = () =>{
class App extends React.Component{
	state = { images: [] };

	onSearchSubmit = async (term) => {
		// console.log(term);
		const response = await axios
			.get('https://api.unsplash.com/search/photos', {
				params: {query: term },
				headers: {
					Authorization: 'Client-ID a93e11f41c80ce6be4b34339e5e1c37d9fe692aa07827941cb26bd3249adc458'
				}
			});
		/*.then( response => {
			console.log(response.data.results);
		});*/
		console.log(response.data.results);

		// console.log(this);
		this.setState({ images: response.data.results });
	}


	render(){	
		return (
				<div className="ui container" style={{ marginTop: '10px'}}>
					<SearchBar onSubmit={ this.onSearchSubmit }/>
					Found: {this.state.images.length} images
				</div>
			);
	}

}


export default App;