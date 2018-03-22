import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { loadWomen } from './actions/womanActions';
import history  from './history'

import App from './components/App'
import Home from './components/home/Home';
import WomenIndex from './components/women/WomenIndex';


const store = configureStore();
store.dispatch(loadWomen());


const renderPage = () => {
	render(
		<Provider store={store}>
			<Router history={history}>
				<App>
					<Route exact path='/' component={Home}/>
					<Route path='/women' render={(props) => <WomenIndex {...props} />}/>
				</App>
			</Router>
		</Provider>, 
		document.getElementById('root')
	);
}

// added this so that we don't render the page 
// until we get a response from the action. 
// when i didn't have this, it rendered before the action was complete.
store.subscribe(renderPage);

