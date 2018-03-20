import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as womenActions from '../../actions/womenActions'
import WomenList from './WomenList'

// import WomanForm from './WomanForm';

class WomenIndex extends React.Component {

	renderList = () => {
		// TODO: figure out why the page is rendering before the action is called. Had to do this to avoid major errors.
		if(this.props.women.data) {
			console.log("women data");
			return <WomenList women={this.props.women.data}/>
		} else {
			console.log("no women yet");
			return <h1>no women yet</h1>
		}
		
	}
	render() {
		return(
			<div className="col-md-12">
				<h1>Women in STEM</h1>
				<div className="col-md-4">
				{this.renderList()}
				</div>
			</div>
		)
	}

}

WomenIndex.propTypes = {
	women: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
	return {
		women: state.women
	}
}

export default connect(mapStateToProps)(WomenIndex);