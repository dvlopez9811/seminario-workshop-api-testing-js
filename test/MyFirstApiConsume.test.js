const agent = require('superagent');
const statusCode = require('http-status-codes');
const chai = require('chai');

const expect = chai.expect;

describe('First Api Tests', () => {
  const query = {
    name: 'John',
    age: '31',
    city: 'New York'
  };

it('Consume GET Service', async () => {
  const response = await agent.get('https://httpbin.org/ip');

  expect(response.status).to.equal(statusCode.OK);
  expect(response.body).to.have.property('origin');
});
it('Consume GET Service with query parameters', async () => {

  const response = await agent.get('https://httpbin.org/get').query(query);
  expect(response.status).to.equal(statusCode.OK);
  expect(response.body.args).to.eql(query);
});
it('Consume PATCH Service with query parameters', async () => {
  const response = await agent.patch('https://httpbin.org/patch').send(query);
  expect(response.status).to.equal(statusCode.OK);
  expect(response.body).to.have.a.property('args');
  expect(response.body).to.have.a.property('origin');
  expect(response.body).to.have.a.property('url');
});
it('Consume PUT Service with query parameters', async () => {
  const response = await agent.put('https://httpbin.org/put').send(query);
  expect(response.status).to.equal(statusCode.OK);
  expect(response.body).to.have.a.property('headers');
  expect(response.body).to.have.a.property('origin');
  expect(response.body).to.have.a.property('url');
});
it('Consume DELETE Service with query parameters', async () => {
  const response = await agent.del('https://httpbin.org/delete').send(query);
  expect(response.status).to.equal(statusCode.OK);
  expect(response.body).to.have.a.property('headers');
  expect(response.body).to.have.a.property('origin');
  expect(response.body).to.have.a.property('url');
});
it('Consume HEAD Service with query parameters', async () => {
  const response = await agent.head('https://httpbin.org/get');
  expect(response.status).to.equal(statusCode.OK);
});
});
