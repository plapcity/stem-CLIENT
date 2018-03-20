import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './routes';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { loadWomen } from './actions/womenActions';

import App from './components/App'
import Home from './components/home/Home';
import WomenIndex from './components/women/WomenIndex';
import Woman from './components/women/Woman'

// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
store.dispatch(loadWomen());

render(
	<Provider store={store}>
		<Router>
			<div>
				<Route exact path='/' component={Home}/>
				<Route path='/women' component={WomenIndex}/>
			</div>
		</Router>
	</Provider>, 
	document.getElementById('root')
	);

