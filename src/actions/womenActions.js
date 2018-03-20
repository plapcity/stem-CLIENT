import womenApi from '../api/womenApi';
import * as types from './actionTypes';

export function loadWomen() {
	console.log("action loadWomen called");
	return function(dispatch) {
		 return womenApi.getAllWomen().then(women => {
		 		console.log("action loadWomen API response", women);
				dispatch(loadWomenSuccess(women));
			}).catch(error => {throw(error);})
	} 
}

export function loadWomenSuccess(women) {
	return { type: types.LOAD_WOMEN_SUCCESS, women};
}