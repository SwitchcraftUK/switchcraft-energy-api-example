const hasGasFromMeterInfo = (
  meterInfo
) => {
  return Boolean(meterInfo.gas);
};

module.exports = { hasGasFromMeterInfo };
