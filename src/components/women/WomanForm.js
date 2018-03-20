import React from 'react';

class WomanForm extends React.Component {
	state = {
		name: this.props.name || '',
		bio: this.props.bio || '' 

	}

	handleSubmit = (e) => {
		e.preventDefault();
		fetch('/api/women', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				'name': this.state.name,
				'bio': this.state.bio
			})
		})
		.then(response => {
			return response.json();
		})
		.then((json) => {
			this.props.updateWomen(json.data)
		})
		.catch(error => console.log(error))

	}

	// handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	console.log(e)
	// }

	handleInput = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}



	render() {
		// if (!this.state.data) return null;
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="name">Enter name</label>
        <input id="name" name="name" type="text" value={this.state.name} onChange={this.handleInput}/>

        <label htmlFor="bio">Enter the bio</label>
        <input id="bio" name="bio" type="text" value={this.state.bio} onChange={this.handleInput} />

        <input type="submit" value="submit"/>
			</form>
		)
	}
}

export default WomanForm