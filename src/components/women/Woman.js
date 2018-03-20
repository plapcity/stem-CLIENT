import React from 'react';
import { Link } from 'react-router-dom';
import { WomanForm } from './WomanForm';


class Woman extends React.Component {
	state = {
		data: null,
	}

	componentWillMount() {
		console.log("will mount", this.props);
	}

	componentDidMount() {
		console.log("did mount", this.props);
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
				<Link to={`/women/edit/${parseInt(this.props.id, 10)}`}>Edit</Link>
			</div>
		)
	}
}

export default Woman