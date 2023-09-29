const setOffAlarms = () => {};

function alertForMiscreants(people: string[]) {
  for (const p of people) {
    if (p === '조커') {
      setOffAlarms();

      return '조커';
    }
    if (p === '사루만') {
      setOffAlarms();

      return '사루만';
    }
  }

  return;
}

export {};
