type extractArrUnionType<T> = T extends any[]
  ? T[number] // as const가 아닌경우 : 튜플타입으로 만들고싶어
  : T extends readonly any[] // as const로 들어왔어
  ? T
  : never;

type DeliveryStates = extractArrUnionType<typeof deliveryStates>;

const deliveryStates = ['MA', 'NH', 'CT', 'ME', 'NY'];

class PlaceOn {
  constructor() {}

  plusDays(aDays: number) {
    const date = new Date();
    date.setHours(date.getHours() + aDays);
    return this;
  }

  minusDays(aDays: number) {
    const date = new Date();
    date.setHours(date.getHours() - aDays);
    return this;
  }
}

class Order {
  deliveryState;
  placedOn;

  constructor(deliveryState: string) {
    this.deliveryState = deliveryState;
    this.placedOn = new PlaceOn();
  }
}

function deliveryDate(anOrder: Order, isRush: boolean) {
  if (isRush) {
    let deliveryTime: number;
    if (['MA', 'CT'].includes(anOrder.deliveryState)) deliveryTime = 1;
    else if (['NY', 'NH'].includes(anOrder.deliveryState)) deliveryTime = 2;
    else deliveryTime = 3;
    return anOrder.placedOn.plusDays(1 + deliveryTime);
  } else {
    let deliveryTime;
    if (['MA', 'CT', 'NY'].includes(anOrder.deliveryState)) deliveryTime = 2;
    else if (['ME', 'NH'].includes(anOrder.deliveryState)) deliveryTime = 3;
    else deliveryTime = 4;
    return anOrder.placedOn.plusDays(2 + deliveryTime);
  }
}

/**
 * @page : 425
 * @example : 매개변수를 까다로운 방식으로 사용할 때
 */
function deliveryDate2(anOrder: Order, isRush: boolean) {
  let result: PlaceOn;
  let deliveryTime: number;

  if (anOrder.deliveryState === 'MA' || anOrder.deliveryState === 'CT') {
    deliveryTime = isRush ? 1 : 2;
  } else if (anOrder.deliveryState === 'NY' || anOrder.deliveryState === 'NH') {
    deliveryTime = 2;

    if (anOrder.deliveryState === 'NH' && !isRush) {
      deliveryTime = 3;
    }
  } else if (isRush) {
    deliveryTime = 3;
  } else if (anOrder.deliveryState === 'ME') {
    deliveryTime = 3;
  } else {
    deliveryTime = 4;
  }

  result = anOrder.placedOn.plusDays(2 + deliveryTime);

  if (isRush) {
    result = result.minusDays(1);
  }

  return result;
}

console.log(deliveryDate(new Order('MA'), true));
console.log(deliveryDate(new Order('CT'), false));
console.log(deliveryDate(new Order('NY'), true));
console.log(deliveryDate(new Order('MH'), false));
console.log(deliveryDate(new Order('ME'), true));

export {};
