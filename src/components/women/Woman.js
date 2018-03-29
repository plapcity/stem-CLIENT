import React from 'react';
import PropTypes from 'prop-types';
import WomanForm from './WomanForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as womanActions from '../../actions/womanActions'
import { Button, Media } from 'reactstrap';


class Woman extends React.Component {
	constructor(props){
		super(props); 
		this.state = {
			isEditing: false,
			woman: null,
			wikiData: null
		};
	}

	toggleEdit = () => {
		this.setState({
			isEditing: !this.state.isEditing
		})
	}

	getWikiInfo = () => {
		const request = new Request(`https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=extracts|pageimages&titles=${this.state.woman.name}&format=json&redirects=true&exintro=''`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });

		return fetch(request)
		.then(response => {
      return response.json();
    })
    .then(json => {
    	this.setWikiInfo(json)
    })
    .catch(error => {
    	return error;
    })
	}

	setWikiInfo = (wikiInfo) => {
  	const pages = wikiInfo.query.pages
  	for (const prop in pages) {
  		if (prop == -1) {
  			console.log("no results")
  		}
  		else {
  			console.log(pages[prop].extract)
  			this.setState({
  				wikiData: pages[prop].extract
  			})
  		}
  	}
	}

	componentWillMount(){
		// this only runs on first load of component
		this.prepareComponentState(this.props)
	}

	componentWillReceiveProps(nextProps) {
		// this runs on subsequent loads
		if (this.props.woman.id !== nextProps.woman.id) {
			this.prepareComponentState(nextProps)
		} 
	}

	prepareComponentState(props) {
		this.setState({
			woman: props.woman,
			isEditing: false, 
			wikiData: null})
	}

	updateWomanState = (e) => {
		const field = e.target.name
		// creating a new instance of woman so that update doesn't update state and props
		const woman = Object.assign({}, this.state.woman)
		woman[field] = e.target.value
		return this.setState({woman})
	}

	saveWoman = (e) => {
		e.preventDefault();
		this.props.actions.updateWoman(this.state.woman);
		this.toggleEdit();
	}

	cancelWoman = () => {
		this.setState({woman: this.props.woman})
		this.toggleEdit();
	}

	deleteWoman = (e) => {
		e.preventDefault();
		this.props.actions.deleteWoman(this.state.woman)

	}

	renderImage = () => {
		if (this.state.woman.image_src) {
			return <img src={this.state.woman.image_src} alt={this.state.woman.name} />
		}
	}


	render() {
		if (!this.state.woman) return null;
		if(this.state.isEditing) {
			return (
				<div>
					<h1>Editing </h1>
					<WomanForm
						woman={this.state.woman}
						onSave={this.saveWoman}
						onChange={this.updateWomanState}
						onCancel={this.cancelWoman}
					/>
				<Button color="primary" onClick={this.getWikiInfo}>get wiki</Button>
				<div className="wiki" dangerouslySetInnerHTML={{__html: this.state.wikiData}}></div>
				</div>
			)
		}
		return (
			<div className="woman">
				<h1>{this.state.woman.name}</h1>
				<p>{this.state.woman.bio}</p>
			
				{this.renderImage()}
				<Button color="primary" onClick={this.toggleEdit}>Edit</Button>
				<Button onClick={this.deleteWoman} outline color="danger">Delete</Button>
			</div>
		)
	}
}


const mapStateToProps = (state, props) => {
	console.log("map state to props", state, props )
	let woman = {id: '', name: '', bio: '', image_src: ''};
	const womanId = parseInt(props.match.params.id, 10)
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
