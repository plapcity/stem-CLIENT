import React from 'react';
import { Link } from 'react-router-dom';

class WomenIndex extends React.Component {
	state = {
		data: null,
	}

	componentDidMount() {
		fetch('/api/women', {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
		.then(response => {
			return response.json();
		})
		.then((json) => {
			console.log(json.data)
			this.setState({
				data: json.data,
			})
		})
		.catch(console.error)
	}


	renderWomen(){
		return this.state.data.map(woman => <li key={parseInt(woman.id,10)}><Link to={`/women/${parseInt(woman.id, 10)}`}>{woman.attributes.name}</Link></li>)
	}


	render() {
		if (!this.state.data) return null;
		return (
			<ul key="index" className="list">
				{this.renderWomen()}
			</ul>
		)
	}
}

export default WomenIndex