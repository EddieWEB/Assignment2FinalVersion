// --------------------------------------------------------------------
// HTML REFERENCE
const incomeList = document.querySelector("#income-list")
const expenseList = document.querySelector("#expense-list")
const budgetTotal = document.querySelector("#budget-total")
const addTransactionForm = document.querySelector("#add-transaction")
const transactionName = document.querySelector("#transaction-name")
const transactionPrice = document.querySelector("#transaction-price")
// --------------------------------------------------------------------
// BUDGET ARRAY
const budget = []
// --------------------------------------------------------------------
// HANDLE ADD TRANSACTION FORM
addTransactionForm.onsubmit = function(e) {
    e.preventDefault()
    const name = transactionName.value
    const price = transactionPrice.value
    addTransaction(name, price)
}
// --------------------------------------------------------------------
// ADD TRANSACTION
function addTransaction(name, price) {
    const transaction = {name, price}
    budget.push(transaction)
    showTransaction()
}
// --------------------------------------------------------------------
// SHOW TRANSACTION
function showTransaction() {
    let incomeStr = ""
    let expenseStr = ""
    
    for (let i=0; i < budget.length; i+=1) {
        const {name, price} = budget[i]
        if(price > 0){
        incomeStr += `<li>${name} ${price} kr</li>`
        } else {
            expenseStr += `<li>${name} ${price} kr</li>`
        }
    }
    incomeList.innerHTML = incomeStr
    expenseList.innerHTML = expenseStr
    budgetTotal.innerHTML = `Budget total: ${getTotal()} kr`
}
// --------------------------------------------------------------------
// GET TOTAL
function getTotal() {
    let total = 0
    for(let i=0; i < budget.length; i+=1) {
        total += Number(budget[i].price)
    }
    return total.toFixed(2)
}