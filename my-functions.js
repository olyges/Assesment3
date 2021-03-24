'use strict';

module.exports = {
  generateRandomData
};

// Make sure to "npm install faker" first.
const Faker = require('faker');

function generateRandomData(userContext, events, done) {
  // generate data with Faker:
  const name = `${Faker.company.companyName()}`;
  const task = `${Faker.random.alpha(10)}`;

  // add variables to virtual user's context:
  userContext.vars.name = name;
  userContext.vars.task = task;
  // continue with executing the scenario:
  return done();
}