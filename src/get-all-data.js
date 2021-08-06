const { getAddress } = require("./get-address");
const { getMeters } = require("./get-meters");
const { getPrimaryMeterNumberFromMetersArray } = require("./get-primary-meter-number-from-meters-array");
const { getMeterInfo } = require("./get-meter-info");
const { getOffPeakElectricityMeterTimings } = require("./get-off-peak-electricity-timings");
const { getTariffDetailsFromMeterInfoAndPostcode } = require("./get-tariff-details-from-meter-info-and-postcode");

const getAllData = async (addressDetails) => {
  const address = await getAddress(addressDetails);
  if (!address) {
    throw new Error("Cannot find matching address");
  }
  const meters = await getMeters(address.id);
  const primaryMeters = {
    mpan: getPrimaryMeterNumberFromMetersArray(
      meters.electricityMeters
    ),
    mprn: getPrimaryMeterNumberFromMetersArray(
      meters.gasMeters
    )
  };
  if (!primaryMeters.mpan || !primaryMeters.mprn) {
    throw new Error(
      "Cannot find any meter information for this address"
    );
  }
  const meterInfo = await getMeterInfo({
    ...primaryMeters,
    postcode: addressDetails.postcode
  });
  const isEconomy7 = Boolean(meterInfo.electricity?.isEconomy7);
  const offPeakElectricityMeterTimings = isEconomy7 && primaryMeters.mpan
    ? await getOffPeakElectricityMeterTimings(primaryMeters.mpan)
    : undefined;
  const tariffDetails = await getTariffDetailsFromMeterInfoAndPostcode({
    postcode: addressDetails.postcode,
    meterInfo
  });

  const allData = {
    address,
    meters,
    meterInfo,
    offPeakElectricityMeterTimings,
    tariffDetails
  };
  return allData;
};

module.exports = { getAllData };
