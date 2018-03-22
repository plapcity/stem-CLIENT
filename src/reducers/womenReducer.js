import * as types from '../actions/actionTypes';
import initialState from './initialState';
import history from '../history'

export default function womenReducer(state = initialState.women, action) {
	switch(action.type) {
		case types.LOAD_WOMEN_SUCCESS:
			return action.women.data

		case types.CREATE_WOMAN_SUCCESS:
			history.push(`/women/${action.woman.data.id}`);
			return [
				...state.filter(woman => woman.id !== action.woman.data.id),
				Object.assign({}, action.woman.data)
			]
		case types.UPDATE_WOMAN_SUCCESS:
			return [
				...state.filter(woman => woman.id !== action.woman.data.id),
				Object.assign({}, action.woman.data)
			]
		case types.DELETE_WOMAN_SUCCESS:
			history.push(`/women`);
			const indexToDelete = state.findIndex(woman => woman.id == action.woman.id)
			return state.slice(0, indexToDelete).concat(state.slice(indexToDelete + 1))
		default: 
			return state;
	}
}