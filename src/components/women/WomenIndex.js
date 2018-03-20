import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as womenActions from '../../actions/womenActions'
import WomenList from './WomenList'
import { Route } from 'react-router-dom';
import Woman from './Woman';

// import WomanForm from './WomanForm';

class WomenIndex extends React.Component {

	render() {
		return(
			<div className="col-md-12">
				<h1>Women in STEM</h1>
				<div className="col-md-4">
					<WomenList women={this.props.women.data}/>
				</div>
				<div className="col-md-8">
					<Route path='/women/:id' component={Woman}/>
				</div>
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
	return {
		women: state.women
	}
}

// connect function provided by redux subscribes the container to the store 
export default connect(mapStateToProps)(WomenIndex);