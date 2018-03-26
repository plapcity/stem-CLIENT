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
			woman: this.props.woman,
			wikiData: null
		};
	}

	toggleEdit = () => {
		console.log('toggle');
		this.setState({
			isEditing: !this.state.isEditing
		})
	}

	getWikiInfo = () => {
		const request = new Request(`https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=extracts|pageimages&titles=${this.props.woman.name}&format=json&redirects=true&exintro=''`, {
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

	componentWillReceiveProps(nextProps) {
		console.log("comp will receive props", nextProps)
		if (this.props.woman.id !== nextProps.woman.id) {
			// if going to a new woman, set woman to new woman, and reset other values
			this.setState({woman: nextProps.woman, isEditing: false, wikiData: null})
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
		this.props.actions.updateWoman(this.state.woman);
		this.toggleEdit();
	}

	deleteWoman = (e) => {
		e.preventDefault();
		this.props.actions.deleteWoman(this.state.woman)

	}

	renderImage = () => {
		if (this.props.woman.image_src) {
			return <img src={this.props.woman.image_src} alt={this.props.woman.name} />
		}
	}


	render() {
		if (!this.props.woman) return null;
		if(this.state.isEditing) {
			return (
				<div>
					<h1>Editing </h1>
					<WomanForm
						woman={this.state.woman}
						onSave={this.saveWoman}
						onChange={this.updateWomanState}
					/>
				<Button color="primary" onClick={this.getWikiInfo}>get wiki</Button>
				<div className="wiki" dangerouslySetInnerHTML={{__html: this.state.wikiData}}></div>
				</div>
			)
		}
		return (
			<div className="woman">
				<h1>{this.props.woman.name}</h1>
				<p>{this.props.woman.bio}</p>
			
				{this.renderImage()}
				<Button color="primary" onClick={this.toggleEdit}>Edit</Button>
				<Button onClick={this.deleteWoman} outline color="danger">Delete</Button>
			</div>
		)
	}
}

// Woman.propTypes = {  
//   woman: PropTypes.object.isRequired,
//   actions: PropTypes.object.isRequired
// };

const mapStateToProps = (state, props) => {
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
