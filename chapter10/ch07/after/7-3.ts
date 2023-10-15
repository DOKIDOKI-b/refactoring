class Order {
  private _priority;
  constructor(data: { priority: string }) {
    this._priority = new Priority(data.priority);
  }
  get priority() {
    return this._priority;
  }
  set priority(aString) {
    this._priority = new Priority(aString);
  }
  get priorityString() {
    return this._priority.toString();
  }
}

class Priority {
  static legalValues() {
    return ['low', 'normal', 'high', 'rush'];
  }

  private _value: Priority | string;

  constructor(value: Priority | string) {
    if (value instanceof Priority) {
      this._value = value;
      return;
    }
    if (Priority.legalValues().includes(value)) this._value = value;
    else throw new Error(`<${value}> is invalid for Priority`);
  }

  toString() {
    return this._value;
  }
  get _index() {
    return Priority.legalValues().findIndex(s => s === this._value);
  }
  equals(other: Priority) {
    return this._index === other._index;
  }
  higherThan(other: Priority) {
    return this._index > other._index;
  }
  lowerThan(other: Priority) {
    return this._index < other._index;
  }
}

const client1 = () => {
  const orders = [{ priority: 'high' }, { priority: 'rush' }, { priority: 'low' }, { priority: 'normal' }].map(
    order => new Order(order)
  );
  const highPriorityCount = orders.filter(order => order.priority.higherThan(new Priority('normal'))).length;

  return highPriorityCount;
};

console.log(client1());

export {};
