interface Person {
  salary: Salary;
}

class Salary {
  private value;

  constructor(val: number) {
    this.value = val;
  }

  multiply(factor: number) {
    return new Salary(this.value * factor);
  }
}

function tenPercentRaise(person: Person): Salary {
  return (person.salary = person.salary.multiply(1.1));
}

function fivePercentRaise(person: Person): Salary {
  return (person.salary = person.salary.multiply(1.05));
}

const person = {
  salary: new Salary(10),
};

console.log(tenPercentRaise(person));

//  @page 420
function baseCharge(usage: number) {
  if (usage < 0) {
    return usd(0);
  }

  const amount =
    bottomBand(usage) * 0.03 + middleBand(usage) * 0.05 + topBand(usage) * 0.07;

  return usd(amount);
}

function bottomBand(usage: number) {
  return Math.min(usage, 100);
}

function middleBand(usage: number) {
  return usage > 100 ? Math.min(usage, 200) - 100 : 0;
}

function topBand(usage: number) {
  return usage > 200 ? usage - 200 : 0;
}

function usd(aNumber: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(aNumber / 100);
}

console.log(baseCharge(1000));

export {};
