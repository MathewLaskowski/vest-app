const fetch = require('node-fetch');
const api = require('./script');

it('calls api to get people with a promise', () => {
  expect.assertions(1);
  return api.getPeoplePromise(fetch).then(data => {
    expect(data.count).toEqual(964)
  })
})

it('calls api to get people', () => {
  expect.assertions(2);
  return api.getPeople(fetch).then(data => {
    expect(data.count).toEqual(964)
    expect(data.results.length).toBeGreaterThan(5)
  })
})

it('get people returns count and results', () => {
  const mockFetch = jest.fn()
    .mockReturnValue(Promise.resolve({
      json: () => Promise.resolve({
        count: 964,
        results: [0,1,2,3,4,5,6]
      })
    }))

  expect.assertions(4);
  return api.getPeoplePromise(mockFetch).then(data => {
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith('https://pokeapi.co/api/v2/pokemon')
    expect(data.count).toEqual(964)
    expect(data.results.length).toBeGreaterThan(5)
  })
})
