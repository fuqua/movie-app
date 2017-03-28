const path = 'https://api.themoviedb.org/3/search/movie'
const queryParams = 'language=en-US&include_adult=false&page=1';
const myKey = '377bc1131066708343103624f365bdcb'

function search(query, callback) {
  return fetch(`${path}?api_key=${myKey}&${queryParams}&query=${query}`, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON)
    .then(callback);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseJSON(response) {
  return response.json();
}

const Client = { search };
export default Client;
