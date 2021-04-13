const URL = 'https://rocket-launcher-api.herokuapp.com/rocket/rocket_info';

fetch(URL)
.then(resp => resp.json())
.then(data => console.log(data))