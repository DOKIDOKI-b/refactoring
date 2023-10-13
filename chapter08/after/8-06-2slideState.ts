interface Resource {}

const createResource = () => ({});
const availableResources: Array<Resource> = [];
const allocatedResources: Array<Resource> = [];

export const foo = () => {
  let result;
  if (availableResources.length === 0) {
    result = createResource();
  } else {
    result = availableResources.pop();
  }
  allocatedResources.push(result);
  return result;
};

console.log(foo());
