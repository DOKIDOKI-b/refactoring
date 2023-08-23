interface AcquireData {
  city: string;
  phone: string | number;
}

const CSV = `office, country, telephone
Chicago, USA, +1 312 373 1000
Beijing, China, +86 4008 900 505
Banalore, India, +91 80 4064 9570
Porto Alegre, Brazil, +55 51 3079 3550
Chennai, India, +91 44 660 44766`;

export const acquireData = (input: string): AcquireData[] => {
  const lines = input.split('\n');
  // 1. 제어용 변수가 slice메서드로 지워짐
  // let firstLine = true;

  // 아래의 원래변수때문에 지워짐
  // const result = [];
  // const loopItems = lines
  const result = lines
    .slice(1)
    .filter(line => line.trim() !== '')
    .map(line => line.split(', '))
    .filter(record => record[1] === 'India')
    .map(record => ({ city: record[0].trim(), phone: record[2].trim() }));

  // for (const line of loopItems) {
  // if (firstLine) {
  //   firstLine = false;
  //   continue;
  // }

  // 2. filter로 지워짐
  // if (line.trim() === '') continue;
  // const record = line; //.split(',');
  // 3. filter
  // if (record[1] === 'India') {
  // 4. map
  // result.push({ city: record[0].trim(), phone: record[2].trim() });
  // }
  // }

  return result;
};

console.log(acquireData(CSV));
