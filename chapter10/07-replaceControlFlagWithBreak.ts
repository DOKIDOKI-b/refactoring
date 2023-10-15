const sendAlert = () => {
  console.log('도망가 !');
};

// 빌런을 안쓰는구나..
const checkForMiscreants = (people: string[]) => {
  let found = false;
  for (const p of people) {
    if (!found) {
      if (p === '조커') {
        sendAlert();
        found = true;
      }
      if (p === '사루만') {
        sendAlert();
        found = true;
      }
    }
  }
};
checkForMiscreants(['조커', '사루만', '치환', '현영']);

export {};
