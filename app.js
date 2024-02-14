const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
let storage = []
let keep = []
let divs = []
let contador = 0
let ownCounter = 0

const btn = document.querySelector('button')
const conteudo = document.querySelector('body')
const color = [...document.querySelectorAll('.color')]
const preview = document.querySelector('.preview')
const rescue = document.querySelector('.back-color')
const copy = document.querySelector('.copy')
const old = document.querySelector('.old')

// Trocar as respectivas cores
btn.addEventListener('click', () => {
  let corAleatoria = geradorHex()
  let corAnterior = keep.at(-2)

  color.forEach(cor => cor.textContent = corAleatoria.cor)
  conteudo.style.backgroundColor = corAleatoria.cor

  preview.style.backgroundColor = corAnterior == undefined ? corAleatoria : corAnterior.cor
  conteudo.style.transition = '0.5s ease'
  preview.style.outline = `5px solid ${corAnterior == undefined ? corAleatoria : corAnterior.cor}`
  preview.style.backgroundColor = corAnterior == undefined ? corAleatoria : corAnterior.cor
  rescue.value = corAnterior == undefined ? corAleatoria : corAnterior.cor
  contador++
})

// Função construtora do objeto cor para armazenar no array
function criaCor(id, cor) {
  return {
    id,
    cor,
  }
}

// Gerar Cor HEX
function geradorHex() {
  let cor
  let corHex = '#'
  let number

  for (let i = 0; i < 6; i++) {
    number = contadorPosicao()
    corHex += colors[number]
  }

  ownCounter++
  cor = criaCor(ownCounter, corHex)
  keep.push(cor)
  storage.push(cor)
  sessionStorage.setItem('colors', JSON.stringify(keep));
  return cor
}

function contadorPosicao() {
  return Math.floor(Math.random() * colors.length)
}

// Eventos Preview
preview.addEventListener('mouseover', () => {
  let corAnterior = preview.style.backgroundColor = storage.at(-2)
  preview.style.outline = `5px solid ${corAnterior}`
  preview.style.transition = '200ms linear'

  if (contador >= 2)
    preview.classList.toggle('hover')
})

preview.addEventListener('mouseout', () => {
  if (contador >= 2)
    preview.classList.toggle('hover')
})

copy.addEventListener('click', () => {
  const rescue = document.querySelector('input')
  window?.navigator?.vibrate(70)

  navigator.clipboard.writeText(rescue.value).then(() => {
    copy.classList.add('active')
    setTimeout(() => {
      copy.classList.remove('active')
    }, 1500)
  })
})