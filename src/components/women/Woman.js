import React from 'react';
import { Link } from 'react-router-dom';
import { WomanForm } from './WomanForm';
import { connect } from 'react-redux';


class Woman extends React.Component {

	render() {
		console.log('woman render', this.props.woman);
		if (!this.props.woman) return null;
		return (
			<div className="woman">
				<h1>{this.props.woman.attributes.name}</h1>
				<p>{this.props.woman.attributes.bio}</p>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => {
	let woman = {id: '', attibutes: {name: '', bio: '', image_src: ''}};
	const womanId = props.match.params.id

	if (state.women.data.length) {
		woman = Object.assign({}, state.women.data.find(woman => womanId === woman.id))
	}
	return {woman};
}

export default connect(mapStateToProps)(Woman);
