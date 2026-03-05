let customers = [
  {
    id: 1,
    name: "John",
    balance: 5000,
    transactions: [],
  },
  {
    id: 2,
    name: "Amy",
    balance: 5000,
    transactions: [],
  },
];

function checkBalance(id) {
  console.log('checkbalance')
  const customer = customers.find((customer) => customer.id === id);
  console.log(customer);
}

function deposit(id, amount) {
  console.log('depositing')
  customers = customers.map((customer) => {
    if (customer.id === id) {
      return {
        ...customer,
        balance: customer.balance + amount,
        transactions: [
          ...customer.transactions,
          {
            type: "credit",
            amount: amount,
            date: Date.now(),
          },
        ],
      };
    } else {
      return customer;
    }
  });
}

function withdraw(id, amount) {
  console.log('withdrawing')
  customers = customers.map((customer) => {
    if (customer.id === id) {
      if (amount<=customer.balance){
        return {
        ...customer,
        balance: customer.balance - amount,
        transactions: [
          ...customer.transactions,
          {
            type: "debit",
            amount: amount,
            date: Date.now(),
          },
        ],
       };
      }
      else{
        console.log('Low balance');
        return customer;
      }
    } else {
      return customer;
    }
  });
}

function showTransactions(id){
  console.log('Transactions:')
  const customer = customers.find((customer) => customer.id === id);
  customer.transactions.forEach((transaction)=>{
    console.log(transaction)
  });
}
checkBalance(1)
deposit(1, 1500);
checkBalance(1)
deposit(1, 1000);
checkBalance(1)
withdraw(1,1000)
checkBalance(1)
withdraw(1,10000)
showTransactions(1)