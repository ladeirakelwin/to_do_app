const arquivar = document.querySelectorAll('.arquivar')
arquivar.forEach((arquivo) => {
  arquivo.onclick = () => {
    const classID = arquivo.classList.item(3).split("-")
    const id = classID[1]
    console.log(id)
    // fetch('https://randomuser.me/api/')
    // .then(res => res.json())
    // .then(json => console.log(json))

  }
})