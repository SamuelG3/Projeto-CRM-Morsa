import React from "react"

export default function FaqDropDown() {
  return (
    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="messagesDropdown">
                                <h6 className="dropdown-header">
                                    Ajuda
                                </h6>

                                <a className="dropdown-item" href="#">
                                    Central de ajuda
                                </a>

                                <a className="dropdown-item" href="#">
                                    Veja dicas rápidas
                                </a>

                                <a className="dropdown-item" href="#">
                                    Atalhos do teclado
                                </a>
                            
                                <a className="dropdown-item text-center" href="#" data-toggle="modal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-right-text-fill mr-2" viewBox="0 0 16 16">
                                        <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM3.5 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z"/>
                                      </svg>
                                    Fale com o suporte
                                </a>
                            </div>
  )
}
