class Order {
  priority = '';
  constructor(data: { priority: string }) {
    this.priority = data.priority;
  }
}

const client1 = () => {
  const orders = [{ priority: 'high' }, { priority: 'rush' }, { priority: 'low' }, { priority: 'normal' }].map(
    order => new Order(order)
  );
  const highPriorityCount = orders.filter(o => o.priority === 'high' || o.priority === 'rush').length;
  return highPriorityCount;
};

console.log(client1());

export {};
