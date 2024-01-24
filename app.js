const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
let storage = []
let contador = 0

const btn = document.querySelector('button')
const conteudo = document.querySelector('main')
const color = [...document.querySelectorAll('.color')]
const preview = document.querySelector('.preview')
const rescue = document.querySelector('.back-color')
const copy = document.querySelector('.copy')

// Trocar as respectivas cores
btn.addEventListener('click', () => {
  let corAleatoria = geradorHex()

  let corAnterior = preview.style.backgroundColor = storage.at(-2)
  preview.style.outline = `5px solid ${corAnterior}`

  color.forEach(cor => cor.textContent = corAleatoria)
  conteudo.style.backgroundColor = corAleatoria
  preview.style.backgroundColor = storage.at(-2)
  rescue.value = storage.at(-2)
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
  let corAnterior = preview.style.backgroundColor = storage.at(-2)
  preview.style.outline = `5px solid ${corAnterior}`
  preview.style.transition = '200ms linear'

  if (contador >= 2)
    preview.classList.toggle('hover')
})

preview.addEventListener('mouseout', () => {
  
  // preview.style.outline = `5px solid transparent`
  // preview.style.transition = '200ms linear'
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