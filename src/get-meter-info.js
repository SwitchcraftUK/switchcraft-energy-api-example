const { swcRequest } = require("./swc-request");

const defaultUsageProvider = "AI_PREDICTION";

const getMeterInfo = async ({
  mpan,
  mprn,
  postcode,
  preferredElectricityUsageProvider = defaultUsageProvider,
  preferredGasUsageProvider = defaultUsageProvider
}) => {
  const queryParams = [
    ...(mpan ? [`mpan=${mpan}`] : []),
    ...(mprn ? [`mprn=${mprn}`] : []),
    ...(postcode ? [`postcode=${postcode}`] : []),
    `preferredElectricityUsageProvider=${preferredElectricityUsageProvider}`,
    `preferredGasUsageProvider=${preferredGasUsageProvider}`
  ].join("&");
  const result = await swcRequest(`/meter-info?${queryParams}`);
  return result;
};

module.exports = { getMeterInfo };
