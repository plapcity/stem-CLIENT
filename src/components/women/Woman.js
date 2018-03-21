import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import WomanForm from './WomanForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as womanActions from '../../actions/womanActions'


class Woman extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isEditing: false,
			woman: this.props.woman
		};
	}

	toggleEdit = () => {
		console.log('toggle');
		this.setState({
			isEditing: !this.state.isEditing
		})
	}

	componentWillReceiveProps(nextProps) {
		console.log("comp will receive props", nextProps)
		if (this.props.woman.id != nextProps.woman.id) {
			this.setState({woman: nextProps.woman})
		}
	}

	updateWomanState = (e) => {
		const field = e.target.name
		const woman = this.state.woman
		woman.attributes[field] = e.target.value
		return this.setState({woman})
	}

	saveWoman = (e) => {
		e.preventDefault();
		this.props.actions.updateWoman(this.state.woman);
	}

	render() {
		if (!this.props.woman) return null;
		if(this.state.isEditing) {
			return (
				<div>
					<h1>Editing {this.props.woman.attributes.name}</h1>
					<WomanForm
						woman={this.state.woman}
						onSave={this.saveWoman}
						onChange={this.updateWomanState}
					/>
				</div>
			)
		}
		return (
			<div className="woman">
				<h1>{this.props.woman.attributes.name}</h1>
				<p>{this.props.woman.attributes.bio}</p>
				<button onClick={this.toggleEdit}>Edit</button>
			</div>
		)
	}
}

// Woman.propTypes = {  
//   woman: PropTypes.object.isRequired,
//   actions: PropTypes.object.isRequired
// };

const mapStateToProps = (state, props) => {
	console.log(state, props)
	let woman = {id: '', name: '', bio: ''};
	const womanId = props.match.params.id
	if (state.women.length) {
		woman = Object.assign({}, state.women.find(woman => womanId === woman.id))
	}
	return {woman};
}


const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(womanActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Woman);
