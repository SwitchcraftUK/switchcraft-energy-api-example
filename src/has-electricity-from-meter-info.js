const hasElectricityFromMeterInfo = (
  meterInfo
) => {
  return Boolean(meterInfo.electricity);
};

module.exports = { hasElectricityFromMeterInfo };
