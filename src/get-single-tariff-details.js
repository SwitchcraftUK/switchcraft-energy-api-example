const { swcRequest } = require("./swc-request");

const getSingleTariffDetails = async ({
  postcode,
  hasFuelElectricity,
  hasFuelGas,
  singleMeterInfo
}) => {
  const {
    currentTariffName,
    currentSupplierName,
    isPrePayment,
    isEconomy7
  } = singleMeterInfo;
  const queryParams = [
    `postcode=${postcode}`,
    `tariffName=${currentTariffName}`,
    `supplierName=${currentSupplierName}`,
    `hasFuelElectricity=${hasFuelElectricity}`,
    `hasFuelGas=${hasFuelGas}`,
    `isPrePayment=${isPrePayment}`,
    `isEconomy7=${isEconomy7}`
  ].join("&");
  const result = await swcRequest(
    `/tariff-details?${encodeURI(queryParams)}`
  );
  return result;
};

module.exports = { getSingleTariffDetails };
