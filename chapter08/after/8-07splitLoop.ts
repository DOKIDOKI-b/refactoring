export interface Person {
  age: number;
  salary: number;
}

const PEOPLE: Person[] = [
  { age: 24, salary: 2800 },
  { age: 27, salary: 4000 },
  { age: 30, salary: 5000 },
  { age: 37, salary: 6000 },
  { age: 40, salary: 7000 },
];

const youngestAge = (people: Person[]) => Math.min(...people.map(p => p.age));
const totalSalary = (people: Person[]) => people.reduce((salary, p) => salary + p.salary, 0);

const getInfos = (people: Person[]) => `최연소: ${youngestAge(people)}, 총급여: ${totalSalary(people)}`;

console.log(getInfos(PEOPLE));
