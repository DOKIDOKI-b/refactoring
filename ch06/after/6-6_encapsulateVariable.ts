let defaultOwnerData = { firstName: '마틴', lastName: '파울러' };

export const defaultOwner = () => {
  return { ...defaultOwnerData };
};

export const setDefaultOwner = (arg: typeof defaultOwnerData) => {
  defaultOwnerData = arg;
};

// 데이터 참조
const spaceship = {
  owner: {},
};

spaceship.owner = defaultOwner();

// 데이터 갱신
setDefaultOwner({ firstName: '변경된마틴', lastName: '변경된파울러' });

console.log(defaultOwnerData, spaceship);

const owner1 = defaultOwner();
const owner2 = defaultOwner();
owner2.firstName = '변경되라 얍!';

// true -> 복사한 객체를 반환하는 getter로 만들자
console.log(owner1.firstName !== owner2.firstName);
