import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function womenReducer(state = initialState.women, action) {
	switch(action.type) {
		case types.LOAD_WOMEN_SUCCESS:
			return action.women
		default: 
			return state;
	}
}