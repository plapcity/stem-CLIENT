import React from 'react';

class WomanForm extends React.Component {



	render() {
		// if (!this.state.data) return null;
		const name = this.props.woman.attributes.name || ''
		const bio = this.props.woman.attributes.bio || ''
		return (
			<form onSubmit={this.props.onSave}>
				<div className="formGroup">
					<label htmlFor="name">Enter name: </label>
        	<input id="name" name="name" type="text"  value={name} onChange={(e) => this.props.onChange(e)}/>
				</div>
				<div className="formGroup">
        	<label htmlFor="bio">Enter bio: </label>
        	<input id="bio" name="bio" type="textarea" value={bio} onChange={(e) => this.props.onChange(e)} />
        </div>
        <div>
        <input type="submit" value="submit"/>
        </div>
			</form>
		)
	}
}

export default WomanForm