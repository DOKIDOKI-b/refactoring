// 6-2-1
const moreThanFiveLateDeliveries = (aDriver) => {
  return aDriver.numberOfLateDeliveries > 5;
};

const rating = (aDriver) => {
  return aDriver.numberOfLateDeliveries > 5 ? 2 : 1;
};

// 6-2-2
const reportLinews = (aCunstomer) => {
  const lines = [];
  lines.push(["name", aCunstomer.name]);
  lines.push(["location", aCunstomer.location]);
  return lines;
};
