class Shipment {
  #trackingNumber;
  #shippingCompany;

  get shippingCompany() {
    return this.#shippingCompany;
  }
  set shippingCompany(arg) {
    this.#shippingCompany = arg;
  }
  get trackingNumber() {
    return this.#trackingNumber;
  }
  set trackingNumber(arg) {
    this.#trackingNumber = arg;
  }
  get trackingInfo() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
}

const client1 = () => {
  const aShipment = new Shipment();
  const vendor = { name: "A-SHIP", number: "010-1234-5678" };
  aShipment.shippingCompany = vendor.name;
  aShipment.trackingNumber = vendor.number;
  return aShipment.trackingInfo;
};

console.log(client1());
