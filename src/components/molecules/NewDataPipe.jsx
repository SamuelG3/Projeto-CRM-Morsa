import React from 'react'

export default function NewDataPipe() {
  return (
    <div class="modal fade" id="novoDataBaseModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
aria-hidden="true">
<div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Novo database</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
            </button>
        </div>
        <div class="modal-body">
            <h6>Nome</h6>
            <p class="small mb-0">Crie um novo database para armazenar seus dados            </p>
            </div>
            <div class="container">
            <form
                        class="mr-auto my-2 my-md-0 mw-50">
                        <div class="mb-3 mt-0">
                            <input type="text" class="form-control bg-light border-0 small" placeholder="Minha database é..."
                                aria-label="databaseName" aria-describedby="basic-addon2" />
                        </div>
            </form>
            </div>

        <div class="modal-footer">
            <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
            <a class="btn btn-primary" href="#.html">Criar Novo Database</a>
        </div>
    </div>
</div>
</div>
  )
}
