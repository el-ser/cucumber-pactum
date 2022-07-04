const { Given, When, Then } = require("@cucumber/cucumber");
const { spec, expect } = require("pactum");

// setting the base url
Given("user has the correct base url", function () {
  this.baseUrl = "https://httpbin.org";
});

Given("payload property {string} value is {string}", function (prop, value) {
  this.payload[prop] = value;
});

// standard pactum request
When("request is sent with GET method", async function () {
  const url = this.baseUrl + "/get";
  this.response = await spec().get(url);
});

// step definition with regex
// this uses
When(/request is sent with (POST|PUT) method/, async function (method) {
  this.response = await this.httpBin.requestWithPost(this.payload);
});

Then("response should be successful for GET method", function () {
  expect(this.response).should.have.status(200);
  expect(this.response).should.have.bodyContains("https://httpbin.org/get");
});

Then("it should return status 200", function () {
  expect(this.response).should.have.status(200);
});
