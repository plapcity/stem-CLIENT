import React from 'react';

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
			this.setState({
				data: json.data,
			})
		})
		.catch(console.error)
	}

	renderWomen(){
		return this.state.data.map(woman => <div key={woman.id}>{woman.attributes.name}</div>)
	}


	render() {
		if (!this.state.data) return null;
		return (
			<div className="list">
				{this.renderWomen()}
			</div>
		)
	}
}

export default WomenIndex