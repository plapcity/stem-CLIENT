class WomenApi {
	static getAllWomen() {
		return fetch('/api/women', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      return response.json();
    })
    .catch(error => {
    	return error;
    })
	}
}

export default WomenApi;

