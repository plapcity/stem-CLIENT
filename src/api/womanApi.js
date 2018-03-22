class WomanApi {
	static getAllWomen() {
    console.log('get all women');
    const request = new Request('/api/women', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

		return fetch(request)
    .then(response => {
      return response.json();
    })
    .catch(error => {
    	return error;
    })
	}

  static updateWoman(woman) {
    const request = new Request(`/api/women/${woman.id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(woman)
    });


    return fetch(request)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        console.log("error", error);
        return error;
      })
  }

  static createWoman(woman) {
    console.log("create woman")
    const request = new Request(`/api/women`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(woman)
    });


    return fetch(request)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        console.log("error", error);
        return error;
      })
  }

  static deleteWoman(woman) {
    const request = new Request(`/api/women/${woman.id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(woman)
    });


    return fetch(request)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        console.log("error", error);
        return error;
      })
  }
}

export default WomanApi;

