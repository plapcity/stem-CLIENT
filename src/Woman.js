import React from 'react';

class Woman extends React.Component {
	state = {
		data: null,
	}

	componentDidMount() {
		fetch(`/api/women/${this.props.id}`, {
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




	render() {
		if (!this.state.data) return null;
		return (
			<div className="woman">
				<h1>{this.props.attributes.name}</h1>
				<p>{this.props.attributes.bio}</p>
			</div>
		)
	}
}

export default Woman