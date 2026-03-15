import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { BonusDepositAccount } from "./class/BonusDepositAccount";



const companyAccount : CompanyAccount = new CompanyAccount("Dio", 1);
const peopleAccount : PeopleAccount = new PeopleAccount("Murilo", 2);
const bonusDepositAccount : BonusDepositAccount = new BonusDepositAccount("Rebecka", 3);



//  *Fluxo de informação do objeto de pessoas
 peopleAccount.showInfo();

 peopleAccount.deposit(1000);
 peopleAccount.showInfo();
 peopleAccount.withdraw(1000);
 peopleAccount.showInfo();

 setTimeout(() => {
   peopleAccount.deposit(100);
   peopleAccount.showInfo();
 }, 4000);

 setTimeout(() => {
    console.log(peopleAccount.getStatus());
 }, 4000);

setTimeout(() => {
    peopleAccount.deposit(100);
    peopleAccount.showInfo();
    peopleAccount.withdraw(200);
    peopleAccount.showInfo();
    console.log(peopleAccount.getStatus());
 }, 10000);

 setTimeout(() => {
   peopleAccount.showInfo();
   peopleAccount.deposit(100);
   peopleAccount.showInfo();
 }, 30000);


//  *Fluxo de informação do objeto de compania
 setTimeout(() => {
//   companyAccount.showInfo();
   companyAccount.deposit(2000);
   companyAccount.withdraw(2000);

   setTimeout(() => {
    companyAccount.getLoan(100);
   }, 4000);

   setTimeout(() => {
    console.log(companyAccount.getStatus());
    companyAccount.withdraw(100);
   }, 4000);

   setTimeout(() => {
     companyAccount.getLoan(100);
     console.log(companyAccount.getStatus());
  }, 10000);
 }, 40000);

// *Fluxo de informação da conta bonus

setTimeout(() => {
  bonusDepositAccount.showInfo();
  bonusDepositAccount.deposit(2000);
  bonusDepositAccount.showInfo();
  bonusDepositAccount.withdraw(2010);
  bonusDepositAccount.showInfo();

  setTimeout(() => {
    bonusDepositAccount.deposit(100);
    bonusDepositAccount.showInfo();
  }, 6000);

}, 90000);


  































