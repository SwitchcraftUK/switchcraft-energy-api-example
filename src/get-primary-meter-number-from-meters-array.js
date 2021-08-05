const getPrimaryMeterNumberFromMetersArray = (metersArray) => {
  if (!metersArray) {
    return;
  }
  const primaryMeter = metersArray.find((meter) => {
    return meter.isPrimaryMeter;
  });
  if (!primaryMeter) {
    return;
  }
  return primaryMeter.meterNumber;
};

module.exports = { getPrimaryMeterNumberFromMetersArray }
