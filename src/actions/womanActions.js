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

export function createWoman(woman) {
	return function(dispatch) {
		return womanApi.createWoman(woman)
			.then(responseWoman => {
				dispatch(createWomanSuccess(responseWoman));
			})
			.catch(error => {throw(error)})
	}
}

export function createWomanSuccess(woman) {
	return { type: types.CREATE_WOMAN_SUCCESS, woman}
}