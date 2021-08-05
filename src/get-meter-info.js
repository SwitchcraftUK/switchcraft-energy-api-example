const { swcRequest } = require("./swc-request");

const getMeterInfo = async ({
  mpan,
  mprn
}) => {
  const queryParams = [
    ...(mpan ? [`mpan=${mpan}`] : []),
    ...(mprn ? [`mprn=${mprn}`] : [])
  ].join("&");
  const result = await swcRequest(`/meter-info?${queryParams}`);
  return result;
};

module.exports = { getMeterInfo };
