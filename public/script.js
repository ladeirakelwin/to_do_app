const adicionar = document.querySelector('.adicionar')
const titulo = document.querySelector('#tituloTarefa')
const descricao = document.querySelector('#descricaoTarefa')

const arquivar = document.querySelectorAll('.arquivar')
const cardTitulo = document.querySelectorAll('.card-title')
const cardDescricao = document.querySelectorAll('.card-subtitle')
const header = new Headers()
header["Content-Type"] = "application/json"
console.log(header)

adicionar.onclick = (event) => {
  event.preventDefault()
  console.log(titulo.value, descricao.value)
}

arquivar.forEach((arquivo, index) => {
  arquivo.onclick = () => {


    const classID = arquivo.classList.item(3).split("-")
    const idButton = classID[1]
    console.log(cardTitulo[index].textContent, cardDescricao[index].textContent)
    // ERRO AO CLICAR MOSTRAR O TITULO YOGA INDEPENDENTE DO BOTÃO
    const request = {
      method: "PUT",
      headers: header,
      mode: "cors",
      cache: "default",
      body: JSON.stringify({
        titulo: cardTitulo[index].textContent,
        descricao: cardDescricao[index].textContent,
        status: "FILED"
      })
    }

    // console.log(`http://localhost:3000/${idButton}`)
    const endPoint = `http://localhost:3000/`
    fetch(endPoint)
      .then(res => res)
      .then(json => console.log(json))
  }
})