class TrackingInformation {
  #shippingCompany;
  #trackingNumber;
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
  get display() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
}

class Shipment {
  #trackingInformation;
  constructor() {
    this.#trackingInformation = new TrackingInformation();
  }
  get trackingInfo() {
    return this.#trackingInformation.display;
  }
  get trackingInformation() {
    return this.#trackingInformation;
  }
  set trackingInformation(aTrackingInformation) {
    this.#trackingInformation = aTrackingInformation;
  }
}

const client1 = () => {
  const aShipment = new Shipment();
  const vendor = { name: 'A-SHIP', number: '010-1234-5678' };
  aShipment.trackingInformation.shippingCompany = vendor.name;
  aShipment.trackingInformation.trackingNumber = vendor.number;
  return aShipment.trackingInfo;
};

console.log(client1());
