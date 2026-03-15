import { DioAccount } from "./DioAccount";

export class PeopleAccount extends DioAccount {
  private cpf: string = "222.333.444-55";

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getCpf = (): string => {
    return this.cpf;
  };

  setCpf = (cpf: string): void => {
    this.cpf = cpf;
  };

  showInfo = (): void => {
    if (this.getName().endsWith("o")) {
      console.log(
        `Senhor ${this.getName()}, seu CPF é ${this.cpf}, sua conta bancaria é ${this.getAccountNumber()} e seu saldo é R$${this.getBalance()}`,
      );
    } else {
      console.log(
        `Senhora ${this.getName()}, seu CPF é ${this.cpf}, sua conta bancaria é ${this.getAccountNumber()} e seu saldo é R$${this.getBalance()}`,
      );
    }
  };
}
