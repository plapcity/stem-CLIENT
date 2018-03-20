import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';


class App extends Component {

  render() {
    return (
      <div className="container">
      	<Header />
      	{this.props.children}
      </div>
    )
  }
}

App.propTypes =  {
  children: PropTypes.array.isRequired
}

export default App;
