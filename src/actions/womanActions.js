import womanApi from '../api/womanApi';
import * as types from './actionTypes';

export function loadWomen() {
	return function(dispatch) {
		 return womanApi.getAllWomen().then(women => {
				dispatch(loadWomenSuccess(women));
			}).catch(error => {throw(error);})
	} 
}

export function loadWomenSuccess(women) {
	return { type: types.LOAD_WOMEN_SUCCESS, women};
}

export function updateWoman(woman) {
	return function(dispatch) {
		return womanApi.updateWoman(woman)
			.then(responseWoman => {
				dispatch(updateWomanSuccess(responseWoman));
			})
			.catch(error => {throw(error)})
	}
}

export function updateWomanSuccess(woman) {
	return { type: types.UPDATE_WOMAN_SUCCESS, woman}
}