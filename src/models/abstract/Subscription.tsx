export abstract class Subscription {
  private _name: string;
  private _price: number;
  private _maxStreams: number;
  private _maxDevices: number;
  private _duration: number;

  constructor(
    name: string,
    price: number,
    maxStreams: number,
    maxDevices: number,
    duration: number
  ) {
    this._name = name;
    this._price = price;
    this._maxStreams = maxStreams;
    this._maxDevices = maxDevices;
    this._duration = duration;
  }

  // getter
  getName() {
    return this._name;
  }

  getPrice() {
    return this._price;
  }

  getMaxStreams() {
    return this._maxStreams;
  }

  getMaxDevices() {
    return this._maxDevices;
  }

  getDuration() {
    return this._duration;
  }
}

export class DefaultPlan extends Subscription {
  constructor() {
    super("Default", 0, 1, 1, 0);
  }
}

export class BasicSubscription extends Subscription {
  constructor() {
    super("Basic", 9.99, 1, 1, 10);
  }
}

export class StandardSubscription extends Subscription {
  constructor() {
    super("Standard", 13.99, 2, 2, 15);
  }
}

export class PremiumSubscription extends Subscription {
  constructor() {
    super("Premium", 17.99, 4, 4, 30);
  }
}
