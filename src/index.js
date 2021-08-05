const { getAllData } = require("./get-all-data");

(async () => {
  const addressDetails = {
    postcode: process.env.POSTCODE
      ?? "SW130DY",
    addressLine1: process.env.ADDRESS_LINE_1
      ?? "14 Meredyth Road"
  };
  console.log(
    "Looking up address details...",
    addressDetails
  );
  const allData = await getAllData(addressDetails);
  console.log("allData", JSON.stringify(allData, undefined, 2));
})();
