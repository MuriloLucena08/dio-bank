import { DioAccount } from "./DioAccount";

export class BonusDepositAccount extends DioAccount {
  private readonly bonus: number = 10;

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (valor: number): void => {
    if (valor <= 0) {
      console.log("O valor do depósito deve ser maior que zero.");
      return;
    }

    if (this.getStatus() === true) {
      const valorComBonus = valor + this.bonus;
      this.balance += valorComBonus;
      console.log(
        `Depósito no valor de R$${valor} (com bônus de R$${this.bonus}) realizado com sucesso! Novo saldo: R$${this.balance}`,
      );
    } else {
      try {
        throw new Error("Conta inativa!");
      } catch (error) {
        console.log(`Conta inativa! status: ${this.getStatus()}`);
      } finally {
        console.log("O depósito não pode ser realizado!");
      }
    }
  };

  showInfo = (): void => {
    console.log(
      `${this.getName()}, sua conta bancaria é ${this.getAccountNumber()} e seu saldo é de R$${this.getBalance()}.`
    )
  };
}
