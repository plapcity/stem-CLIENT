import { combineReducers } from 'redux';
import women from './womenReducer';

const rootReducer = combineReducers({
	// shorthand property names (women instead of women: women)
	women
})

export default rootReducer;