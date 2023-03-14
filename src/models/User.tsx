export class User {
  // encapsulation
  private _username: string;
  private _email: string;
  private _password: string;
  private _premium: boolean = false;

  constructor({
    username,
    email,
    password,
    premium = false,
  }: {
    username: string;
    email: string;
    password: string;
    premium?: boolean;
  }) {
    this._username = username;
    this._email = email;
    this._password = password;
    this._setPremium(premium);
  }

  get premium(): boolean {
    return this._premium;
  }

  private _setPremium(value: boolean): void {
    if (value) {
      this._premium = true;
      alert(`Congratulations, you are now a premium user!`);
    }
  }

  upgradeToPremium(premium: boolean = true): void {
    this._setPremium(premium);
  }

  downgradeToFree(): void {
    this._premium = false;
    alert(`You are now a free user.`);
  }

  checkPremium(): boolean {
    return this._premium;
  }

  getUsername(): string {
    return this._username;
  }
}
