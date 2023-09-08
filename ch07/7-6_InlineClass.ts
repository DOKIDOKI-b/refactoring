interface TrackingInformationProps {
  shippingCompany: string;
  trackingNumber: string;
}

class TrackingInformation {
  private _shippingCompany;
  private _trackingNumber;

  constructor(data: TrackingInformationProps) {
    this._shippingCompany = data.shippingCompany;
    this._trackingNumber = data.trackingNumber;
  }

  get shippingCompany() {
    return this._shippingCompany;
  }
  set shippingCompany(arg: string) {
    this._shippingCompany = arg;
  }
  get trackingNumber() {
    return this._trackingNumber;
  }
  set trackingNumber(arg: string) {
    this._trackingNumber = arg;
  }
  get display() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
}

class Shipment {
  private _trackingInformation: TrackingInformation;

  constructor(trackingInfo: TrackingInformation) {
    this._trackingInformation = trackingInfo;
  }
  get trackingInfo() {
    return this._trackingInformation.display;
  }
  get trackingInformation() {
    return this._trackingInformation;
  }
  set trackingInformation(aTrackingInformation) {
    this._trackingInformation = aTrackingInformation;
  }
}

const client1 = () => {
  const vendor = new TrackingInformation({ shippingCompany: '아나벌써택배', trackingNumber: '5252-1004-20000' });
  const aShipment = new Shipment(vendor);
  aShipment.trackingInformation.shippingCompany = vendor.shippingCompany;
  aShipment.trackingInformation.trackingNumber = vendor.trackingNumber;
  return aShipment.trackingInfo;
};

console.log(client1());

export {};
