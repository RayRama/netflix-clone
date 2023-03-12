export class User {
  // encapsulation
  private username: string;
  private email: string;
  private password: string;
  private premium: boolean;

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
    this.username = username;
    this.email = email;
    this.password = password;
    this.upgradeToPremium(premium);
  }

  getPremium(): boolean {
    return this.premium;
  }

  upgradeToPremium(premium: boolean = true): void {
    if (premium) {
      this.premium = true;
      alert(`Congratulations, you are now a premium user!`);
    }
  }

  downgradeToFree(): void {
    this.premium = false;
    alert(`You are now a free user.`);
  }
}
