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
  const customer = customers.find((customer) => customer.id === id);
  return customer
}

function deposit(id, amount) {
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
  const customer = customers.find((customer) => customer.id === id);
  //customer.transactions.forEach((transaction)=>{
  //  console.log(transaction)
  //});
  return customer.transactions
}

export {checkBalance,deposit,withdraw,showTransactions}