const { Before } = require("@cucumber/cucumber");
const HttpBin = require("../steps/helper/httpbin-service");

Before(function () {
  // Initialize context
  this.httpBin = new HttpBin("https://httpbin.org");
  this.payload = {};
});
