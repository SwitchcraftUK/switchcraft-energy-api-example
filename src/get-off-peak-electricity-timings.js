const { swcRequest } = require("./swc-request");

const getOffPeakElectricityMeterTimings = async (
  mpan
) => {
  const result = await swcRequest(
    `/off-peak-electricity-meters-times?mpan=${mpan}`
  );
  return result;
};

module.exports = { getOffPeakElectricityMeterTimings };
