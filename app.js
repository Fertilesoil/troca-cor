const colors = [1,2,3,4,5,6,7,8,9, 'A', 'B', 'C', 'D', 'E', 'F']
let storage = []
let contador = 0

const btn = document.querySelector('button')
const conteudo = document.querySelector('main')
const color = [...document.querySelectorAll('.color')]
const preview = document.querySelector('.preview')
const rescue = document.querySelector('.back-color')


btn.addEventListener('click', () => {
 let corAleatoria = geradorHex()

 color.forEach(cor => cor.textContent = corAleatoria)
 conteudo.style.backgroundColor = corAleatoria
 preview.style.backgroundColor = storage.at(-2)
 rescue.textContent = storage.at(-2)
 contador++
})



// Gerar Cor HEX
function geradorHex() {
 let corHex = '#'
 let number

 for (let i = 0; i < 6; i++) {
  number = contadorPosicao()
  corHex += colors[number]
 }

 storage.push(corHex)
 return corHex
}

function contadorPosicao() {
 return Math.floor(Math.random() * colors.length)
}

// Eventos Preview
preview.addEventListener('mouseover', () => {
 if(contador >= 2)
 preview.classList.toggle('hover')
})

preview.addEventListener('mouseout', () => {
 if(contador >= 2)
 preview.classList.toggle('hover')
})