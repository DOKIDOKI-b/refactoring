const includes = <T>(states: Array<T>) => {
  let appliesToMass = false;
  for (const s of states) {
    if (s === 'MA') appliesToMass = true;
  }
  return false;
};

const arr = ['AM', 'PM', 'MA'];

console.log(includes<string>(arr));
