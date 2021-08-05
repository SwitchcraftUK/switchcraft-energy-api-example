const { swcRequest } = require("./swc-request");

const getAddress = async ({
  postcode,
  addressLine1
}) => {
  const queryParams = [
    `postcode=${postcode}`,
    `addressLine1=${addressLine1}`
  ].join("&");
  const result = await swcRequest(`/address?${encodeURI(queryParams)}`);
  return result.address;
};

module.exports = { getAddress };
