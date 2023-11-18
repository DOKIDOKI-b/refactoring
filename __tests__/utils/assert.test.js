import assert from 'assert';

describe('function assert test', () => {
  test('조건을 판별하는 condition parameter가 거짓이면 에러가 발생해야 한다.', () => {
    // given
    const condition = false;

    // when
    // then
    expect(() => assert(condition)).toThrow();
  });

  test('예외가 발생했을때 넘겨받은 message가 출력되야 한다.', () => {
    // given
    const condition = false;

    // when
    // then
    expect(() => assert(condition, '예외 메시지')).toThrow('예외 메시지');
  });

  test('조건이 참일때 예외가 발생하지 않아야 한다.', () => {
    // given
    const condition = true;

    // when
    // then
    expect(() => assert(condition)).not.toThrow();
  });
});
