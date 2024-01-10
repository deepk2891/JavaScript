class Bank {
    constructor(balance) {
        this.balance = balance
    }

    withdraw (amount) {
        if (this.balance - amount <= 0)
        {
            console.log('❌ You cannot withdraw more than what you have!')
            console.log(`Balance : ${ this.balance }`);
            return
        }
        this.balance -= amount
        console.log(`Withdrew $${ amount }`);
        console.log({ balance: this.balance });
    }

    deposit (amount) {
        this.balance += amount
        console.log(`Deposited $${ amount }`);
        console.log({ balance: this.balance });
    }
}

const deepChecking = new Bank(0)

deepChecking.deposit(10000)
deepChecking.deposit(10000)
deepChecking.deposit(10000)
deepChecking.deposit(10000)

deepChecking.withdraw(1100)
deepChecking.withdraw(2000)
deepChecking.withdraw(5000)
deepChecking.withdraw(21000)


const depositButton = document.getElementById('deposit');
const withdrawButton = document.getElementById('withdraw');
const amountInput = document.getElementById('amount');
const balanceDiv = document.getElementById('balance')

depositButton.onclick = () => {
    const amount = Number(amountInput.value)
    deepChecking.deposit(amount)
    balanceDiv.innerText = `Balance: ${ deepChecking.balance }`
}

withdrawButton.onclick = () => {
    const amount = Number(amountInput.value)
    deepChecking.withdraw(amount)
    balanceDiv.innerText = `Balance: ${ deepChecking.balance }`
}
