import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class WomanForm extends React.Component {



	render() {
		// if (!this.state.data) return null;
		const name = this.props.woman.attributes.name || ''
		const bio = this.props.woman.attributes.bio || ''
		return (
			<Form onSubmit={this.props.onSave}>
				<FormGroup>
					<Label htmlFor="name">Name: </Label>
        	<Input id="name" name="name" type="text"  value={name} onChange={(e) => this.props.onChange(e)}/>
				</FormGroup>
				<FormGroup>
        	<Label htmlFor="bio">Bio: </Label>
        	<Input id="bio" name="bio" type="textarea" value={bio} onChange={(e) => this.props.onChange(e)} />
        </FormGroup>
        <input className="btn btn-primary" type="submit" value="submit"/>
			</Form>
		)
	}
}

export default WomanForm