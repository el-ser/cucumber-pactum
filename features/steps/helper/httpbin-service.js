const { handleRequest } = require("../helper/steps.helper");
const { spec } = require("pactum");

class HttpBin {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  requestWithPost(payload) {
    const config = {
      withMethod: "POST",
      withPath: this.baseUrl + "/post",
      withJson: payload,
    };
    return handleRequest(spec(), config);
  }

  requestWithPut(payload) {
    const config = {
      withMethod: "POST",
      withPath: this.baseUrl + "/put",
      withJson: payload,
    };
    return handleRequest(spec(), config);
  }
}

module.exports = HttpBin;
