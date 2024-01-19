const friends = ['Marcos', 'Ana', 'Marcela']
//adicionando valores no final da array
friends.push('Eduardo')
//adicionando valor no início da array
friends.unshift('Juliana')
/*
 *adicionando valor no meio da array: "splice(index da array 
 *em que deseja adicionar, vai (1) ou não (0) deletar algum 
 *item?, valor a ser adicionado)" 
 */
friends.splice(3, 0, 'Daniel')
console.log(friends)

//quero saber o nome que está em um determinado índice:
console.log(friends.indexOf('Eduardo'))

//se na lista existe algum nome
const found = friends.includes('Juliana')
console.log(found)

/*
 *substitui um nome ou todos os nomes da lista por um
 (string, index inicial, index final)
 */
friends.fill('Camila', 0, 1)
console.log(friends)

/*
 *quando estamos trabalhando com objetos, estamos trabalhando com
 *referência
 */
const people = [
    {id: 1, name: 'Marcos'}, 
    {id: 2, name: 'Ana'}, 
    {id: 3, name: 'Marcela'},
    {id: 4, name: 'Eduardo'},
    {id: 5, name: 'Daniel'},
    {id: 6, name: 'Camila'}
]

console.log(people)
console.log(people.includes({id: 1, name: 'Marcos'}))

//pode ser assim
console.log(people.find(function(person) {
    return person.name == 'Marcos'
}))

//ou usando arrow functions
console.log(people.find(p => p.name == 'Marcos' ? true : false))

//este metodo retorna um array com o filtro
console.log(people.filter(p => p.name == 'Camila'))
console.log(people.filter(p => p.id % 2 == 0))

//metodo pop() de uma array retira o ultimo item da mesma
console.log(people.pop())

console.log(friends.concat(people))

const midle = friends.concat(people).slice(5,7)
console.log(midle)

/*
 *join serve para adicionar algo, no início, de cada item de um array,
 *a partir do segundo item (index = 1)
 */
console.log(friends.join(';'))

/*
 * Supondo que queremos que a array friends estejam em órdem alfabética
 */
friends.sort()
console.log(friends)
/*
 * Retornando ao estado original
 */
friends.reverse()
console.log(friends)