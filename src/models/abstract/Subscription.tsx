export abstract class Subscription {
  private _name: string;
  private _price: number;
  private _maxStreams: number;
  private _maxDevices: number;

  constructor(
    name: string,
    price: number,
    maxStreams: number,
    maxDevices: number
  ) {
    this._name = name;
    this._price = price;
    this._maxStreams = maxStreams;
    this._maxDevices = maxDevices;
  }
}

export class BasicSubscription extends Subscription {
  constructor() {
    super("Basic", 9.99, 1, 1);
  }
}

export class StandardSubscription extends Subscription {
  constructor() {
    super("Standard", 13.99, 2, 2);
  }
}

export class PremiumSubscription extends Subscription {
  constructor() {
    super("Premium", 17.99, 4, 4);
  }
}
