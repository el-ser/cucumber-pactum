const handleRequest = (spec, config) => {
  for (prop in config) {
    value = config[prop];
    spec[prop](value);
  }
  return spec;
};

module.exports = {
  handleRequest,
};
