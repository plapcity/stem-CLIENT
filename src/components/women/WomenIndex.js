import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as womanActions from '../../actions/womanActions'
import WomenList from './WomenList'
import { Route, Switch, Link } from 'react-router-dom';
import Woman from './Woman';
import NewWoman from './NewWoman';


// import WomanForm from './WomanForm';

class WomenIndex extends React.Component {


	render() {
		return(
			<div className="col-md-12">
				<h1>Women in STEM</h1>
				<Link to="/women/new">Add new Woman</Link>
				<div className="col-md-4">
					<WomenList women={this.props.women}/>
				</div>
				<div className="col-md-8">
					<Switch>
						{/* using switch so that only one of the below components is rendered*/}
						{/*<Route path='/women/new' component={NewWoman}/>
						<Route path='/women/:id' component={Woman}/> */}
						<Route path={`${this.props.match.path}/new`} component={NewWoman}/>
						<Route path={`${this.props.match.path}/:id`} component={Woman}/>
					</Switch>
				</div>
			</div>
		)
	}
}

// WomenIndex.propTypes = {
// 	women: PropTypes.object.isRequired
// }

function mapStateToProps(state, ownProps) {
	// mapStatetoProps gets state from the store whenever its changed 
	// and make the data avail to component as props. 
	return {
		women: state.women
	}
}

// connect function provided by redux subscribes the container to the store 
export default connect(mapStateToProps)(WomenIndex);