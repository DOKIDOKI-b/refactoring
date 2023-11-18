const setOffAlarms = () => {
  /**
   * {알람을 울리는 코드...}
   */
};

function alertForMiscreants(people: string[]) {
  if (findMiscreant(people) !== '') setOffAlarms();
}

function findMiscreant(people: string[]) {
  for (const p of people) {
    if (p === '조커') {
      return '조커';
    }
    if (p === '사루만') {
      return '사루만';
    }
  }

  return '';
}

export {};
