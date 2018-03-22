import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function womenReducer(state = initialState.women, action) {
	switch(action.type) {
		case types.LOAD_WOMEN_SUCCESS:
			return action.women.data

		case types.CREATE_WOMAN_SUCCESS:
			return [
				...state.filter(woman => woman.id !== action.woman.data.id),
				Object.assign({}, action.woman.data)
			]
		case types.UPDATE_WOMAN_SUCCESS:
			return [
				...state.filter(woman => woman.id !== action.woman.data.id),
				Object.assign({}, action.woman.data)
			]
		default: 
			return state;
	}
}