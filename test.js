const obj = {
  name: '현영',
  inner: { age: 15 },
};

const copy = () => {};

const foo = obj => {
  const copy = { ...obj };
  copy.name = '치환';
  copy.inner.age = 100;
  const stirng = 'copy';
  obj.copy;
  return copy;
};

console.log(foo(obj));
console.log(obj.inner.age);
