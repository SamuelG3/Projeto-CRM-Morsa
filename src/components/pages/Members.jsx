import React from 'react'
import ScrollToTop from '../atoms/ScrollToTop'
import AppHeader from '../organisms/AppHeader'

export default function Members() {
  return (

    <div className="page-top">
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">

                <AppHeader />


                <div className="container">
        <div className="mt-5">
         <h1 id="membrosNaOrganizacao" className="text-dark text-bold mb-0" style="font-size: 1.5rem">160 pessoas nessa empresa</h1>
         <p className="mt-0">Gerencie pessoas e funções. <a href="#">Saiba mais.</a></p>
        
         <button type="button" className="btn button-type-1 button-type-1-style py-1 px-3 small" data-toggle="modal" data-target="#convidarMembrosModal">Convidar pessoas</button>
        </div>

        <div className="table-responsive mt-5">
            <table className="table" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Função</th>
                        
                    </tr>
                </thead>
               
                <tbody>
                    <UserList />
                </tbody>
            </table>
            <button type="button" className="btn button-type-1 button-type-1-style py-1 px-3 mb-5 small">Load More</button>

        </div>
                </div>
              

            </div>
           

            

        </div>

    <ScrollToTop />

    </div>

  )
}
