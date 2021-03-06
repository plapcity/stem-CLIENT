import React from 'react';
import PropTypes from 'prop-types';
import WomanForm from './WomanForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as womanActions from '../../actions/womanActions'


class NewWoman extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			woman: {
				name: '',
				bio: '',
				image_src: ''
			}
		}
	}

	updateWomanState = (e) => {
		const field = e.target.name
		const woman = this.state.woman
		woman[field] = e.target.value
		return this.setState({woman})
	}

	saveWoman = (e) => {
		e.preventDefault();
		this.props.actions.createWoman(this.state.woman);
	}

	render() {
		if (!this.props.woman) return null;
			return (
				<div>
					<h1>New Woman</h1>
					<WomanForm
						woman={this.state.woman}
						onSave={this.saveWoman}
						onChange={this.updateWomanState}
					/>
				</div>
			)
		

	}
}

// Woman.propTypes = {  
//   woman: PropTypes.object.isRequired,
//   actions: PropTypes.object.isRequired
// };

const mapStateToProps = (state, props) => {
	let woman = {
				attributes: {
					name: '',
					bio: '',
					image_src: ''
				}
			}
	return {woman};
}


const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(womanActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewWoman);
