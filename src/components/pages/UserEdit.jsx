import React from "react";

export default function UserEdit() {
  return (
    <body id="page-top">

        
        <div id="content-wrapper" className="d-flex flex-column">

            <div id="content">
                 
                <div className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top border-bottom d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <a href="./home.html" className="text-dark text-decoration-none mt-2">
                        <h1 className="mx-auto" style="font-size: 2.5rem">Morsa</h1>
                    </a>
                    <div className="topbar-divider d-none d-sm-block"></div>
                    <h5 className="">Minhas configurações</h5>
                </div>
                      <ul className="navbar-nav ml-auto">

                        <li className="nav-item dropdown no-arrow d-sm-none">
                            <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-search fa-fw"></i>
                            </a>

                            <div className="dropdown-menu dropdown-menu-right p-9 shadow animated--grow-in"
                                aria-labelledby="searchDropdown">
                                <form className="form-inline mr-auto w-100 navbar-search">
                                    <div className="input-group">
                                        <input type="text" className="form-control bg-light border-0 small"
                                            placeholder="Search for..." aria-label="Search"
                                            aria-describedby="basic-addon2" />
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="button">
                                                <i className="fas fa-question fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>

                        

                         <li className="nav-item dropdown no-arrow mx-1">
                            <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                                  </svg>
                                <span className="badge badge-danger badge-counter">3+</span>
                            </a>
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
                        </li>

                        <li className="nav-item dropdown no-arrow mx-1">
                            <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-question-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                                  </svg>
                                 
                            </a>
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
                        </li>

                        <div className="topbar-divider d-none d-sm-block"></div>

                         <li className="nav-item dropdown no-arrow">
                            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="mr-2 d-none d-lg-inline text-gray-600 small">Ada Wong</span>
                                <img className="img-profile rounded-circle"
                                    src="img/undraw_profile.png" />
                            </a>
                             <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="userDropdown">
                                
                                <div className="px-3 pt-3">
                                <h7 className="font-weight-bold">Ada Wong</h7>
                                <p>adawong@gmail.com</p>
                                </div>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="./user-profile.html">
                                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Perfil
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Prefências
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                   Trocar de empresa
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Sair
                                </a>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
           
                <div className="container">
        <div className="mt-5">
         <h1 id="membrosNaOrganizacao" className="text-dark text-bold mb-0" style="font-size: 1.5rem">Minhas configurações</h1>
         <p className="mt-0">Edite as informações do seu perfil e suas preferências. <a href="#">Saiba mais.</a></p>
        
        <form className="mt-5">
            <div className="d-flex mr-5">
                <div className="d-flex flex-column" >
                <img className="" witdh="90" height="90" src="img/undraw_profile.png" alt="Small" />
                <a title="Remover" tabindex="0" className="pp-display-block" rel="nofollow" data-method="put" href="/users/remove_avatar">Remover</a>
                </div>

                <div className="d-flex flex-column ml-5">
                    <label className="pp-label-text">Imagem de perfil</label>
                    <input className="file optional" type="file" name="user[avatar]" id="user_avatar" />
                </div>
            </div>
                        <label className="small mt-3">Nome</label>
                        <div className="input-group">
                            <input type="text" className="form-control bg-light border-0 small" placeholder="Ada Wong"
                                aria-label="Search" aria-describedby="basic-addon2" />
                        </div>

                        <label className="small mt-3">Usuário</label>
                        <div className="input-group">
                            <input type="text" className="form-control bg-light border-0 small" placeholder="ada-wong"
                                aria-label="Search" aria-describedby="basic-addon2" />
                        </div>

                        <label className="small mt-3">Email</label>
                        <div className="input-group">
                            <input type="email" className="form-control bg-light border-0 small" placeholder="ada.wong@gmail.com"
                                aria-label="Search" aria-describedby="basic-addon2" />
                        </div>
                    
        </form>
        
        
         <div className="d-flex flex-end my-5">
         <button type="button" className="btn button-type-1 button-type-1-style py-1 px-3 small" data-toggle="modal" data-target="#convidarMembrosModal">Salvar</button>
        </div>
        </div>

       
                </div>
                </div>
                
    </ body>
    )
}
