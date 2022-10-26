import React from 'react'

export default function NotificationsDropDown() {
  return (
    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="alertsDropdown">
                                <h6 className="dropdown-header">
                                    Notificações
                                </h6>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                    <div>
                                        <div className="small text-gray-500">Dezembro 12, 2019</div>
                                        <span className="font-weight-bold">Você foi mencionado no card "Bad Guy, Chun-Li"</span>
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                    <div>
                                        <div className="small text-gray-500">Dezembro 7, 2019</div>
                                        Albert Wesker te adicionou em "Projeto Uroboros"
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                    <div>
                                        <div className="small text-gray-500">Dezembro 2, 2019</div>
                                        Você foi mencionado no card "Demissão - William Birking"
                                    </div>
                                </a>
                                <a className="dropdown-item text-center small text-gray-500" href="#">Mostre Todas Notificações</a>
                            </div>
  )
}
