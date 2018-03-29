import {createStore, applyMiddleware} from 'redux';  
import rootReducer from '../reducers/rootReducer';  
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore() {  
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, createLogger({collapsed: true})))
  );
}