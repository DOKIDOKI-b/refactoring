// 데이터
let defaultOwner = { firstName: '마틴', lastName: '파울러' };

// 데이터 참조
const spaceship = {
  owner: {},
};

spaceship.owner = defaultOwner;

// 데이터 갱신
defaultOwner = { firstName: '변경된 마틴', lastName: '변경된 파울러' };

// 참조를 바꾼게 아니라 새로운 객체를 할당해서 결국 둘이 다른걸 보는데 왜 이런 예제인지 몰겠당...
console.log(defaultOwner, spaceship.owner);

// 원본객체도 수정이 되어버림
const owner1 = defaultOwner;
const owner2 = defaultOwner;

owner2.firstName = '변경되라 얍!';

console.log(owner1.firstName === owner2.firstName); // true, 둘이 같아져 버렸다.

export {};
