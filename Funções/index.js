//Function declaration
function movie() {
    console.log('The matrix')
}

movie()

//Function Expression
const car = function() {
    console.log('Tesla')
}

car()

const truck = car

truck()

function soma() {
    let soma = 0
    for(let i of arguments) {
        soma += i
    }
    return soma
}

console.log(soma(4, 5, 6, 7, 8))

function totalPagamento(valor, taxa, anos = 5) {
    return (valor * taxa / 100 * anos) + valor
}

console.log(totalPagamento(10000, 10, 10))
console.log(totalPagamento(10000, 10))

let money = function(value) {
    return value.toFixed(2)
}

let moneyMore = function(value) {
    //desta forma, iremos sempre estar trabalhando no último dígito
    return Math.ceil(value * 100) / 100
}

console.log(money(100 * Math.PI))
console.log(moneyMore(100 * Math.PI))
console.log(Math.PI)