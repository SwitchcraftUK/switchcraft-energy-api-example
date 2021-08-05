const fetch = require("node-fetch");
const { getAuthHeader } = require("./get-auth-header");
const { getBaseUrl } = require("./get-base-url");

const swcRequest = async (
  path
) => {
  const response = await fetch(`${getBaseUrl()}${path}`, {
    headers: getAuthHeader()
  });
  const result = await response.json();
  return result;
};

module.exports = { swcRequest };
