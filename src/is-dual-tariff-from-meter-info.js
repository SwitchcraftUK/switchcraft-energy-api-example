const isDualTariffFromMeterInfo = (
  meterInfo
) => {
  const {
    electricity, gas
  } = meterInfo;
  const isDualTariff = (
    electricity?.currentSupplierName
      === gas?.currentSupplierName
  ) && (
    electricity?.currentTariffName
      === gas?.currentTariffName
  );
  return isDualTariff;
};

module.exports = { isDualTariffFromMeterInfo };
