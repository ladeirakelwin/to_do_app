const page = (tasks) => {

    const cards = () => {
        return tasks.reduce((acc, {
                id,
                titulo,
                descricao
            }) => acc +
            `
        <div class="card shadow col-sm-3 m-4" style="width: 18rem;">
            <div class="card-body" data-id-tarefa="${id}">
                <h5 class="card-title">${titulo}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${descricao}</h6>
                <div class="mt-3">
                    <button type="submit" class="btn btn-default border-dark deletar" >Deletar</button>
                    <button type="submit" class="btn btn-warning editar" >Editar</button>
                </div>
            </div>
        </div>
        `, ``)
    }

    return `
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>TODO App</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet">
        </head>
        <body>
            <nav class="nav bg-dark mb-4" style="text-align: center;">
                <h1 class=" py-2 text-light" style="font-family: 'Indie Flower'; width:100%">TODO app</h1>
            </nav>
            <div class="d-flex justify-content-center align-items-center flex-column">
                <div class="w-50 p-4 border rounded shadow-sm justify-content-center"> 
                    <form class="flex-fill" action="/tarefas" method="POST">
                    
                        <input type="hidden" name="_method" value="PUT">
                        <input type="hidden" class="inputTarefa" name="idTarefa" value="null">
                    
                        <div class="form-group">
                            <label for="tituloTarefa"><b>Título:</b></label>
                            <input type="text" class="form-control" id="tituloTarefa" name="titulo" placeholder="Título da tarefa">
                        </div>
                        <div class="form-group">
                            <label for="descricaoTarefa"><b>Descrição:</b></label>
                            <textarea class="form-control" id="descricaoTarefa" rows="3" name="descricao" placeholder="Insira a descrição da tarefa"></textarea>
                        </div>

                        <div class="form-group">
                            <label for="statusTarefa"><b>Status:</b></label>
                            <input type="text" name="status" class="form-control" id="statusTarefa" placeholder="Status da tarefa">
                        </div>

                        <div class="form-group">
                            <button class="btn btn-primary adicionar " type="submit">Adicionar</button>
                        </div>
                    </form>
                    
                </div>
            </div>
            <div class="d-flex row  justify-content-center">
                ${cards()}
            </div>
            <script src="../../static/script.js"></script>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        </body>
        </html>
        `
}

module.exports = page;