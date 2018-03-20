import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as womenActions from '../../actions/womenActions'
import WomenList from './WomenList'
import { Route } from 'react-router-dom';
import Woman from './Woman';

// import WomanForm from './WomanForm';

class WomenIndex extends React.Component {

	renderList = () => {
		// TODO: figure out why the page is rendering before the action is called. Had to do this to avoid major errors.
		if(this.props.women.data) {
			return <WomenList women={this.props.women.data}/>
		} else {
			return <h1>no women</h1>
		}
		
	}
	render() {
		console.log("women index render");
		return(
			<div className="col-md-12">
				<h1>Women in STEM</h1>
				<div className="col-md-4">
		
				</div>
				<Route exact path='/women' render={() => <WomenList women={this.props.women.data}/>}/>
				<Route path='/women/:id' component={Woman}/>
			</div>

		)
	}

}

WomenIndex.propTypes = {
	women: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
	// mapStatetoProps gets state from the store whenever its changed 
	// and make the data avail to component as props. 
	console.log(state.women);
	return {
		women: state.women
	}
}

// connect function provided by redux subscribes the container to the store 
export default connect(mapStateToProps)(WomenIndex);