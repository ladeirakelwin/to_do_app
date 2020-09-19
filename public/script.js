const adicionar = document.querySelector('.adicionar')
const titulo = document.querySelector('#tituloTarefa')
const descricao = document.querySelector('#descricaoTarefa')
const status = document.querySelector('#statusTarefa')

const arquivar = document.querySelectorAll('.arquivar')
const cardTitulo = document.querySelectorAll('.card-title')
const cardDescricao = document.querySelectorAll('.card-subtitle')
const header = {}
header["Content-Type"] = "application/json"
header["Accept"] = "application/json"

console.log(header)
requestWithBody = (method, titulo, descricao, status) => {
  return {
    method: method.toUpperCase(),
    headers: header,
    mode: "cors",
    cache: "default",
    body: JSON.stringify({
      titulo: titulo,
      descricao: descricao,
      status: status,
    })
  }
}


adicionar.onclick = (event) => {
  event.preventDefault()
  // console.log(titulo.value, descricao.value, status.value.toUpperCase(), requestWithBody('POST', {
  //   titulo: titulo.value,
  //   descricao: descricao.value,
  //   status: status.value.toUpperCase()
  // }))

  // AGORA SÓ FALTA ENVIAR OS DADOS DO FORM

  const endPoint = `http://localhost:3000/`
  fetch("http://localhost:3000/", requestWithBody('post', titulo.value, descricao.value, status.value))
    .then(res => res.json())
    .then(json => console.log(json))
}

arquivar.forEach((arquivo, index) => {
  arquivo.onclick = () => {


    const classID = arquivo.classList.item(3).split("-")
    const idButton = classID[1]
    console.log(cardTitulo[index].textContent, cardDescricao[index].textContent)
    // ERRO AO CLICAR MOSTRAR O TITULO YOGA INDEPENDENTE DO BOTÃO


    // console.log(`http://localhost:3000/${idButton}`)
    const endPoint = `http://localhost:3000/`
    fetch(endPoint)
      .then(res => res)
      .then(json => console.log(json))
  }
})