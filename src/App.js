import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Woman from './Woman';
import WomenIndex from './WomenIndex';


class App extends Component {

  state = {
    data: null,
  }

  componentDidMount(){
    fetch('/api/women', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      return response.json();
    })
    .then((json) => {
      this.setState({
        data: json.data,
      })
    })
    .catch(console.error)
  }

  // renderNav(){
  //   return this.state.data.map(item => (

  //     <div className="nav-item" key={item.id}>
  //       <Link to={`/women/${parseInt(item.id)}`}>{item.attributes.name}</Link>
  //     </div>
  //     ))
  // }

  renderRoutes(){
    return this.state.data.map(item => (
      <Route
        key={parseInt(item.id, 10)}
        path={`/women/${parseInt(item.id)}`}
        render={() => <Woman id={parseInt(item.id, 10)} attributes={item.attributes}/>}
      />
    ))
  }

  render() {
    if (!this.state.data) return null;
    return (
      <Router>
        <div>
          <Link to='/women'>View all women</Link>
          <Route key='all-women' exact path='/women' render={() => <WomenIndex /> }/> 
          {this.renderRoutes()}
        </div>
      </Router>
    );
  }
}

export default App;
