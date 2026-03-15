export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  protected balance: number = 0;
  private status: boolean = true;
  private lastTransaction: number = Date.now();

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  };

  getAccountNumber = (): number => {
    return this.accountNumber;
  };

  getBalance = (): number => {
    return this.balance;
  };

  setBalance = (balance: number): void => {
    this.balance = balance;
  };

  getStatus = (): boolean => {
    return this.status;
  };

  deposit = (valor: number): void => {
    if (valor <= 0) {
      console.log("O valor do depósito deve ser maior que zero.");
      return;
    }

    if (this.validateStatus() === true) {
      this.checkStatus();
      this.balance += valor;
      this.lastTransaction = Date.now();
      console.log(
        `${this.name}, seu depósito no valor de R$${valor} foi realizado com sucesso no dia ${new Date(this.lastTransaction).toLocaleDateString()} às ${new Date(this.lastTransaction).getHours()}:${new Date(this.lastTransaction).getMinutes()}:${new Date(this.lastTransaction).getSeconds()}!`,
      );
    } else {
      console.log("O depósito não pode ser realizado!");
    }
  };

  withdraw = (valor: number): void => {
    if (valor <= 0 || valor > this.balance) {
      console.log(
        "O valor do saque deve ser maior que zero e menor ou igual ao saldo.",
      );
      return;
    }

    if (this.validateStatus() === true) {
      this.checkStatus();
      this.balance -= valor;
      this.lastTransaction = Date.now();
      console.log(
        `${this.name}, seu saque no valor de R$${valor} foi realizado com sucesso no dia ${new Date(this.lastTransaction).toLocaleDateString()} às ${new Date(this.lastTransaction).getHours()}:${new Date(this.lastTransaction).getMinutes()}:${new Date(this.lastTransaction).getSeconds()}!`,
      );
    }
  };

  showInfo = (): void => {
    console.log("");
  };

  private checkStatus = () => {
    setInterval(() => {
      const agora = Date.now();
      const tempoSemTransacao = agora - this.lastTransaction;

      if (this.balance === 0 && tempoSemTransacao > 5000) {
        this.status = false;
      }
    }, 1000);
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      console.log("Conta ativa!");
      return this.status;
    }

    try {
      throw new Error("Conta inativa!");
    } catch (error) {
      console.log(`Conta inativa! status: ${this.status}`);
    } finally {
      return (this.status = false);
    }
  };
}
