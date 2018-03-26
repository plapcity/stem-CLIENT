import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class WomanForm extends React.Component {



	render() {
		// if (!this.state.data) return null;
		const name = this.props.woman.name || ''
		const bio = this.props.woman.bio || ''
		const image = this.props.woman.image_src || ''
		return (
			<div>
			<Form onSubmit={this.props.onSave}>
				<FormGroup>
					<Label htmlFor="name">Name: </Label>
        	<Input id="name" name="name" type="text"  value={name} onChange={(e) => this.props.onChange(e)}/>
				</FormGroup>
				<FormGroup>
        	<Label htmlFor="bio">Bio: </Label>
        	<Input id="bio" name="bio" type="textarea" rows="10" value={bio} onChange={(e) => this.props.onChange(e)} />
        </FormGroup>
        <FormGroup>
					<Label htmlFor="name">Image URL: </Label>
        	<Input id="image_src" name="image_src" type="text"  value={image} onChange={(e) => this.props.onChange(e)}/>
				</FormGroup>
        <input className="btn btn-primary" type="submit" value="submit"/>
        
			</Form>
			<button onClick={this.props.onCancel} className="btn btn-primary">Cancel</button>
			</div>
		)
	}
}

export default WomanForm