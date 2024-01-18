function createBook(title, author, pages) {
    const book = {
        bookTitle: title,
        bookAuthor: author,
        bookPages: pages,
    
        // bookChapters: {
        //     chap1: 'Fundamentals',
        //     chap2: 'F1rst Law'
        // },
    
        printBook: function() {
            console.log('Printing')
        }
    }
    return book
}

//constructor mode
function Book(title, author, pages) {
    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages
}

const book1 = createBook('Atomic Habbits', 'James', 306)
const book2 = new Book('Napolean Wars', 'James', 300)

book1.color = 'red'

console.log(book1)
console.log(book2)

console.log(new Date())

//calcula raiz quadrada de 2
console.log(Math.max(10, 5, 100, 21, 58))

const message = 'Hello '
const name = 'Eduardo'
console.log(message.concat(name))
const msg = message.concat(name)
console.log(msg.includes('Eduardo'))

const nome = 'Eduardo'

//repare a diferença entre as duas constantes
const email1 = 'Hi \n'.concat(nome) 
const email2 = `Hi
${nome}`

console.log(email1)
console.log(email2)


// const book = {
//     title: 'Atomic Habits',
//     author: 'James Clear',
//     pages: 306,

//     bookChapters: {
//         chap1: 'Fundamentals',
//         chap2: 'F1rst Law'
//     },

//     printBook: function() {
//         console.log('Printing')
//     }
// }