import React from "react";
import { Link } from "react-router-dom";
import UserProfile from "../../images/undraw_profile.png"
import Default from "../templates/Default";


export default function UserEdit() {
  return (
            
    <Default>
           
                <div className="container">
        <div className="mt-5">
         <h1 id="membrosNaOrganizacao" className="text-dark text-bold mb-0">Minhas configurações</h1>
         <p className="mt-0">Edite as informações do seu perfil e suas preferências. <Link to="/">Saiba mais.</Link></p>
        
        <form className="mt-5">
            <div className="d-flex mr-3">
                <div className="d-flex flex-column" >
                <img className="" witdh="90" height="90" src={UserProfile} alt="Small" />
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
</ Default>                

    )
}
