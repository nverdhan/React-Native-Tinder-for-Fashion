import * as types from './actionTypes';

const headers = { 'Fk-Affiliate-Id': 'nverdhang', 'Fk-Affiliate-Token': '232387ea409b472595e181a19d829b8e'};
const categoryUrl = 'https://affiliate-api.flipkart.net/affiliate/api/nverdhang.json';

export function getDataFromAPI(){
	return dispatch => {
    		dispatch(fetchData())
			return fetch(categoryUrl, 
				{
					mode: 'no-cors', 
					headers: headers
				})
			      .then((response) => response.json())
			      .then((resJson) => {
			        var productUrl = resJson.apiGroups.affiliate.apiListings['womens_clothing'].availableVariants['v0.1.0'].get;
			        console.log(productUrl);
			        fetch(productUrl, 
					{
						mode: 'no-cors', 
						headers: headers
					})
				      .then((response) => response.json())
				      .then((resJson) => dispatch(fetchDataSuccess({products: resJson.productInfoList})) )
				      
				      .catch((error) => {
				        console.warn(error);
				      });

			      })
			      .catch((error) => {
			        console.warn(error);
			      });
			  }
}

export function fetchData(){
	return {
		type: types.FETCH_DATA
	}
}

export function fetchDataSuccess(data){
	console.log(data);
	return {
		type: types.FETCH_DATA_SUCCESS,
		data: data
	}
}

export function fetchDataError(response){
	return {
		type: types.FETCH_DATA_ERROR,
		response: response
	}
}

export function add(id){
	return {
		type: types.ADD,
		data: {id}
	}
}

export function remove(){
	return {
		type : types.REMOVE
	}
}