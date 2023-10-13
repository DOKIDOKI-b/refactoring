interface Person {
  age: number;
  salary: number;
}

const PEOPLE: Array<Person> = [
  { age: 24, salary: 2800 },
  { age: 27, salary: 4000 },
  { age: 30, salary: 5000 },
  { age: 37, salary: 6000 },
  { age: 40, salary: 7000 },
];

const getInfos = (people: Array<Person>) => {
  let youngest = people[0] ? people[0].age : Infinity;
  let totalSalary = 0;
  for (const p of people) {
    if (p.age < youngest) youngest = p.age;
    totalSalary += p.salary;
  }
  return `최연소: ${youngest}, 총급여: ${totalSalary}`;
};

console.log(getInfos(PEOPLE));
