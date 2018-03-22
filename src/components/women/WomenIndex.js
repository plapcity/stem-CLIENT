import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WomenList from './WomenList'
import { Route, Switch, Link } from 'react-router-dom';
import Woman from './Woman';
import NewWoman from './NewWoman';
import { Button, Badge, Container, Row, Col } from 'reactstrap';


// import WomanForm from './WomanForm';

class WomenIndex extends React.Component {


	render() {
		return(

			<Container>
				<Row>
						<h2>Women in STEM <Badge color="secondary" pill>{this.props.women.length}</Badge></h2>
				</Row>
				<Row>
				<Link className="btn btn-primary" to="/women/new">Add new Woman</Link>
				</Row>
				<Row>
					<div className="col-md-4">
						<WomenList women={this.props.women}/>
					</div>
					<div className="col-md=1"></div>
					<div className="col-md-7">
						<Switch>
							{/* using switch so that only one of the below components is rendered*/}
							<Route path={`${this.props.match.path}/new`} component={NewWoman}/>
							<Route path={`${this.props.match.path}/:id`} component={Woman}/>
						</Switch>
					</div>
				</Row>
			</Container>
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