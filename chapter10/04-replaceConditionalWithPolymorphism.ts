/**
 * @page : 368
 * 기본 예제
 */

interface Bird {
  name: string;
  type: string;
  numberOfCoconuts?: number;
  isNailed?: boolean;
  voltage?: number;
}

type Birds = Bird[];

const plumages = (birds: Birds) => {
  return new Map(birds.map((bird) => [bird.name, plumage(bird)]));
};

const speeds = (birds: Birds) => {
  return new Map(birds.map((bird) => [bird.name, airSpeedVelocity(bird)]));
};

// 깃털 상태
const plumage = (bird: Bird) => {
  switch (bird.type) {
    case '유럽 제비':
      return '보통이다';
    case '아프리카 제비':
      return bird.numberOfCoconuts && bird.numberOfCoconuts > 2
        ? '지쳤다'
        : '보통이다';
    case '노르웨이 파랑 앵무':
      return bird.voltage && bird.voltage > 100 ? '그을렸다' : '예쁘다';
    default:
      return '알 수 없다';
  }
};

// 속도
const airSpeedVelocity = (bird: Bird) => {
  switch (bird.type) {
    case '유럽 제비':
      return 35;
    case '아프리카 제비':
      return bird.numberOfCoconuts && 40 - 2 * bird.numberOfCoconuts;
    case '노르웨이 파랑 앵무':
      return bird.isNailed ? 0 : bird.voltage ? 10 + bird.voltage / 10 : 10;
    default:
      return null ?? '누구세요?';
  }
};

const birds = [
  { name: '유로현영', type: '유럽 제비' },
  { name: '아프치환', type: '아프리카 제비', numberOfCoconuts: 2 },
  { name: '아프현영', type: '아프리카 제비', numberOfCoconuts: 10 },
  {
    name: '노르치환',
    type: '노르웨이 파랑 앵무',
    isNailed: true,
    voltage: 110,
  },
  {
    name: '노르현영',
    type: '노르웨이 파랑 앵무',
    isNailed: true,
    voltage: 110,
  },
  {
    name: '한국현영',
    type: 'Good K-bird',
    isNailed: false,
    voltage: 220,
  },
];

console.log({
  plumage: plumages(birds),
  airSpeedVelocity: speeds(birds),
});

/**
 * @page : 374
 * 변형 동작을 다형성을 표현하기
 */

interface Voyage {
  zone: string;
  length: number;
}

interface History {
  zone: string;
  profit: number;
}

// 투자 등급
const rating = (voyage: Voyage, history: History[]) => {
  const vpf = voyageProfitFactor(voyage, history);
  const vr = voyageRisk(voyage);
  const chr = captainHistoryRisk(voyage, history);

  if (vpf * 3 > vr + chr * 2) {
    return 'A';
  } else {
    return 'B';
  }
};

// 항해 경로 위험요소
const voyageRisk = (voyage: Voyage) => {
  let result = 1;

  if (voyage.length > 4) {
    result += 2;
  }

  if (voyage.length > 8) {
    result += voyage.length - 8;
  }

  if (['중국', '동인도'].includes(voyage.zone)) {
    result += 4;
  }

  return Math.max(result, 0);
};

// 선장의 항해 이력 위험요소
const captainHistoryRisk = (voyage: Voyage, history: History[]) => {
  let result = 1;

  if (history.length < 5) {
    result += 4;
  }
  result += history.filter((v) => v.profit < 0).length;

  if (voyage.zone === '중국' && hasChina(history)) {
    result -= 2;
  }

  return Math.max(result, 0);
};

// 중국을 경유?
const hasChina = (history: History[]) => {
  return history.some((v) => '중국' === v.zone);
};

// 수익 요인
const voyageProfitFactor = (voyage: Voyage, history: History[]) => {
  let result = 2;

  if (voyage.zone === '중국') result += 1;
  if (voyage.zone === '동인도') result += 1;
  if (voyage.zone === '중국' && hasChina(history)) {
    result += 3;
    if (history.length > 10) result += 1;
    if (voyage.length > 12) result += 1;
    if (voyage.length > 18) result -= 1;
  } else {
    if (history.length > 8) result += 1;
    if (voyage.length > 14) result -= 1;
  }
  return result;
};

const voyage = { zone: '서인도', length: 10 };

const histories = [
  { zone: '동인도', profit: 5 },
  { zone: '서인도', profit: 15 },
  { zone: '중국', profit: -2 },
  { zone: '서아프리카', profit: 7 },
];

const result = {
  voyageRisk: voyageRisk(voyage),
  captainHistoryRisk: captainHistoryRisk(voyage, histories),
  voyageProfitFactor: voyageProfitFactor(voyage, histories),
  myRating: rating(voyage, histories),
};

console.log(result);

export {};
