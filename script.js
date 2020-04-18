const fetch = require('node-fetch');
const apiUrl = 'https://pokeapi.co/api/v2/pokemon'

const getPeoplePromise = fetch => {
  return fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      return {
        count: data.count,
        results: data.results
      }
    })
}

const getPeople = async fetch => {
  const getRequest = await fetch(apiUrl)
  const data = await getRequest.json();
  return {
    count: data.count,
    results: data.results
  }
}

module.exports = {
  getPeople,
  getPeoplePromise
}
