const colors = ['green', 'yellow', 'purple', 'blue', 'red']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')


btn.addEventListener('click', function() {
    const randomColor = getRandomColor()
    //a linha abaixo é quem pega a cor para colorir a tela de fundo da página
    document.body.style.background = colors[randomColor]
    //textContent é o texto que será adicionado dentro da respectiva tag
    color.textContent = colors[randomColor]

})

function getRandomColor() {
    //o metodo random gerar numeros reais de 0 até 1
    //o floor transforma um numero fracionário, maior que 1, para inteiro
    return Math.floor(Math.random() * colors.length)
}