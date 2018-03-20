import womenApi from '../api/womenApi';
import * as types from './actionTypes';

export function loadWomen() {
	return function(dispatch) {
		 return womenApi.getAllWomen().then(women => {
				dispatch(loadWomenSuccess(women));
			}).catch(error => {throw(error);})
	} 
}

export function loadWomenSuccess(women) {
	return { type: types.LOAD_WOMEN_SUCCESS, women};
}