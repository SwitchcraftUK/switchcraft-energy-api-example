const { getSingleTariffDetails } = require("./get-single-tariff-details");
const { isDualTariffFromMeterInfo } = require("./is-dual-tariff-from-meter-info");
const { hasElectricityFromMeterInfo } = require("./has-electricity-from-meter-info");
const { hasGasFromMeterInfo } = require("./has-gas-from-meter-info");

const getTariffDetailsFromMeterInfoAndPostcode = async ({
  postcode,
  meterInfo
}) => {
  const {
    electricity,
    gas
  } = meterInfo;
  const dualTariff = isDualTariffFromMeterInfo(meterInfo);
  const hasFuelElectricity = hasElectricityFromMeterInfo(meterInfo);
  const hasFuelGas = hasGasFromMeterInfo(meterInfo);
  if (dualTariff) {
    const primaryMeterInfo = electricity || gas;
    const dualTariffResult = await getSingleTariffDetails({
      postcode,
      hasFuelElectricity,
      hasFuelGas,
      singleMeterInfo: primaryMeterInfo
    });
    return {
      electricity: dualTariffResult,
      gas: dualTariffResult
    };
  }
  const [
    electricityTariff,
    gasTariff
  ] = await Promise.all([
    electricity && getSingleTariffDetails({
      postcode,
      singleMeterInfo: electricity,
      hasFuelElectricity: true,
      hasFuelGas: false
    }),
    gas && getSingleTariffDetails({
      postcode,
      singleMeterInfo: gas,
      hasFuelElectricity: false,
      hasFuelGas: true
    })
  ]);
  return {
    electricity: electricityTariff,
    gas: gasTariff
  };
};

module.exports = { getTariffDetailsFromMeterInfoAndPostcode }
