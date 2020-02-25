const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
}

// Adicionar transações
function createTransaction(transaction) {
    user.transactions.push(transaction)
    if (transaction.type === 'credit') {
        user.balance += transaction.value
    } else {
        user.balance -= transaction.value
    }
}

function getHigherTransactionByType(type) {
    let HigherValue = 0
    let HigherTransaction

    for (let transaction of user.transactions) {
        if (transaction.type === type && transaction.value > HigherValue) {
            HigherValue = transaction.value
            HigherTransaction = transaction
        }
    }
    return HigherTransaction
}
function getAverageTransactionValue() {
    let sum = 0
    for (let transaction of user.transactions) {
        sum += transaction.value
    }
    return sum / user.transactions.length

}

function getTransactionsCount() {
    let count = {
        credit: 0,
        debit: 0,
    }
    for (let transaction of user.transactions) {
        if (transaction.type == 'credit') {
            count.credit += 1
        } else {
            count.debit += 1
        }
    }
    return count
}



createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

console.log(getHigherTransactionByType("credit")) // { type: 'credit', value: 120 }
console.log(getHigherTransactionByType("debit")) // { type: 'debit', value: 80 }

console.log(getAverageTransactionValue()) // 70

console.log(getTransactionsCount()) // { credit: 2, debit: 2 }