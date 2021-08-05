const { swcRequest } = require("./swc-request");

const getMeters = async (
  addressId
) => {
  const result = await swcRequest(`/meters?addressId=${addressId}`);
  return result;
};

module.exports = { getMeters };
