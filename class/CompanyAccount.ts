import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  private cnpj: string = "11.222.333/0001-42";

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getCnpj = (): string => {
    return this.cnpj;
  };

  setCnpj = (cnpj: string): void => {
    this.cnpj = cnpj;
  };

  getLoan = (valor: number): void => {
    if (valor <= 0) {
      console.log("O valor do empréstimo deve ser maior que zero.");
      return;
    }

    if (this.getStatus() === true) {
      this.balance += valor;
      console.log(
        `O emprestimo no valor de R$${valor} foi realizado com sucesso à empresa com nome fantasia ${this.getName()} e CNPJ ${this.cnpj}!`,
      );
    } else {
      try {
        throw new Error("Conta inativa!");
      } catch (error) {
        console.log(`Conta inativa! status: ${this.getStatus()}`);
      } finally {
        console.log("O empréstimo não pode ser realizado!");
      }
    }
  };

  showInfo = (): void => {
    console.log(
      `Empresa ${this.getName()}, seu CNPJ é ${this.cnpj}, sua conta bancaria é ${this.getAccountNumber()} e seu saldo é de R$${this.getBalance()}.`,
    );
  };
}
