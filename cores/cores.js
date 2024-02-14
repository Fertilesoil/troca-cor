const corAnterior = JSON.parse(sessionStorage.getItem('colors')) || [];

function criaDiv(cor, texto) {
 const container = document.querySelector('.old')
 let div = document.createElement('div')
 let span = document.createElement('span')
 span.classList.add('back-color')
 span.classList.add('copiar')
 div.classList.add('card')
 div.style.backgroundColor = cor
 span.textContent = texto
 div.appendChild(span)
 container.prepend(div)
 return div
}

function modificadorHover(copiar) {
 const card = document.querySelector('.card')

 card.onmouseover = () => {
  card.classList.add('card2')
 }
}

const layoutEscolhidas = async () => {
 await corAnterior
 corAnterior.forEach(id => {
  criaDiv(id.cor, id.cor)

  const copiar = document.querySelector('.copiar')
  copiar.onclick = () => {
   window?.navigator?.vibrate(70)

   navigator.clipboard.writeText(copiar.textContent).then(() => {
    copiar.classList.add('active')
    setTimeout(() => {
     copiar.classList.remove('active')
    }, 1500)
   })
  }

  modificadorHover(copiar)
 })
}

layoutEscolhidas()