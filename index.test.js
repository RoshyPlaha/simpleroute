const request = require('supertest');
const index = require('./index.js')

describe('Test the root path', () => {
  test('It should respond to the GET method', async () => {
    const response = await request(index).get('/')
    expect(response.statusCode).toBe(200)
    })
})