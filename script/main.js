
const closeCard = () => {
  document.getElementById('card').style.display = "none"
}

const openCard = () => {
  closeCadCpf()
  closeCadCnpj()
  document.getElementById('card').style.display = "block"
  document.getElementById('back').classList.remove('active')
}

document.getElementById('back')
  .addEventListener('click', openCard)

const openCadCpf = () => {
  closeCard()
  document.getElementById('cadcpf').classList.add('active')
  document.getElementById('back').classList.add('active')
}
document.getElementById('cardCpf')
  .addEventListener('click', openCadCpf)

const closeCadCpf = () => {
  document.getElementById('cadcpf').classList.remove('active')
}

const openCadCnpj = () => {
  document.getElementById('cadcnpj').classList.add('active')
  document.getElementById('back').classList.add('active')
}
document.getElementById('cardCnpj')
  .addEventListener('click', openCadCnpj)

const closeCadCnpj = () => {
  document.getElementById('cardCnpj').classList.remove('active')
}


