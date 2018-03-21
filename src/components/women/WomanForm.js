import React from 'react';

class WomanForm extends React.Component {



	render() {
		// if (!this.state.data) return null;
		return (
			<form onSubmit={this.props.onSave}>
				<label htmlFor="name">Enter name</label>
        <input id="name" name="name" type="text"  onChange={(e) => this.props.onChange(e)}/>

        <label htmlFor="bio">Enter the bio</label>
        <input id="bio" name="bio" type="text" onChange={(e) => this.props.onChange(e)} />

        <input type="submit" value="submit"/>
			</form>
		)
	}
}

export default WomanForm