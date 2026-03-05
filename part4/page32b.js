import { deposit,checkBalance,withdraw,showTransactions } from "./bank.js";

console.log(checkBalance(1))
deposit(1,1500)
console.log(checkBalance(1))
withdraw(1,1000)
console.log(showTransactions(1))
