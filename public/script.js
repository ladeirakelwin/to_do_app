const arquivar = document.querySelectorAll('.arquivar')
const titulo = document.querySelectorAll('.card-title')
const descricao = document.querySelectorAll('.card-subtitle')
const header = new Headers()
header["Content-Type"] = "application/json"
console.log(header)

arquivar.forEach((arquivo, index) => {
      arquivo.onclick = () => {


        const classID = arquivo.classList.item(3).split("-")
        const idButton = classID[1]
        console.log(titulo[index].textContent, descricao[index].textContent)
        // ERRO AO CLICAR MOSTRAR O TITULO YOGA INDEPENDENTE DO BOTÃO
        const request = {
          method: "PUT",
          headers: header,
          mode: "cors",
          cache: "default",
          body: JSON.stringify({
            titulo: titulo[index].textContent,
            descricao: descricao[index].textContent,
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