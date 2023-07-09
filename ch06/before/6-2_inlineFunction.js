// 6-2-1
const moreThanFiveLateDeliveries = (aDriver) => {
  return aDriver.numberOfLateDeliveries > 5;
};

const rating = (aDriver) => {
  return moreThanFiveLateDeliveries(aDriver) ? 2 : 1;
};

// 6-2-2
const gatherCustomerData = (out, aCunstomer) => {
  out.push(["name", aCunstomer.name]);
  out.push(["location", aCunstomer.location]);
};

const reportLinews = (aCunstomer) => {
  const lines = [];
  gatherCustomerData(lines, aCunstomer);
  return line;
};
