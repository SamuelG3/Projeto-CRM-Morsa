import React from "react"
import AppHeader from "../organisms/AppHeader"
import MembersTable from "../organisms/MembersTable"

export default function Members() {
  return (

    
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">

                <AppHeader />


                <div className="container">
        <div className="mt-5">
         <h1 id="membrosNaOrganizacao" className="text-dark text-bold mb-0">160 pessoas nessa empresa</h1>
         <p className="mt-0">Gerencie pessoas e funções. <a href="/">Saiba mais.</a></p>
        
         <button type="button" className="btn button-type-1 button-type-1-style py-1 px-3 small" data-toggle="modal" data-target="#convidarMembrosModal">Convidar pessoas</button>
        </div>

        <MembersTable />
                </div>
            </div>
        </div>

   

  )
}
