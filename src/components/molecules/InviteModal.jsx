import React from "react"

export default function InviteModal() {
  return (
    <div className="modal fade" id="convidarMembrosModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Convide pessoas para ${empresa}.</h5>
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p className="mb-2">Convide mais pessoas para colaborar e construir processos incríveis junto com você.</p>
                    <p className="small text-dark">Adicionar por nome ou e-mail</p>
                    <div>

                    </div>
                    <a href="" className="small">+ Adicionar mais pessoas</a>

                    <p className="small text-dark text-bold mt-4 mb-0">Escolher pipes</p>
                    <p className="">Escolha os pipes para adicionar Administradores e Membros.</p>
                </div>
                <div className="modal-footer">
                    <a className="btn btn-primary" href="#">Convidar</a>
                </div>
            </div>
        </div>
    </div>
  )
}
