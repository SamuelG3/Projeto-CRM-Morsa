import React from "react"
import MembersTable from "../organisms/MembersTable"
import Default from "../templates/Default"

export default function Members() {
  return (

    <Default>
        


                <div className="container">
        <div className="mt-5">
         <h1 id="membrosNaOrganizacao" className="text-dark text-bold mb-0">160 pessoas nessa empresa</h1>
         <p className="mt-0">Gerencie pessoas e funções. <a href="/">Saiba mais.</a></p>
        
         <button type="button" className="btn button-type-1 button-type-1-style py-1 px-3 small" data-toggle="modal" data-target="#convidarMembrosModal">Convidar pessoas</button>
        </div>

        <MembersTable />
                </div>
        </ Default>

   

  )
}
