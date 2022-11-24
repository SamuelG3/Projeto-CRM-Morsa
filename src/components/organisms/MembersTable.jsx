import React from "react"
import UserList from "../molecules/UserList"

export default function MembersTable() {
  return (
    <div className="table-responsive mt-5">
            <table className="table" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Função</th>
                        
                    </tr>
                </thead>
               
                <tbody>{/* 
                    <UserList /> */}
                </tbody>
            </table>
                 <button type="button" className="btn button-type-1 button-type-1-style py-1 px-3 mb-5 small">Load More</button>

    </div>
  )
}
