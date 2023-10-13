import Province from './Province';

// type Province = ReturnType<typeof sampleProvinceData>

const sampleProvinceData = () => ({
  name: 'Asia',
  producers: [
    { name: 'Byzzantium', cost: 10, production: 9 },
    { name: 'Attalia', cost: 12, production: 10 },
    { name: 'Sinope', cost: 10, production: 6 },
  ],
  demand: 30,
  price: 20,
});

describe('province', () => {
  test('shortfall', () => {
    const asia = new Province(sampleProvinceData());
    expect(asia).toBe(5);
  });
});
