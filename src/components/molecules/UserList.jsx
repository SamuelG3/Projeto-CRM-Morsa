import React from "react"

export default function UserList(props) {
  return (
            <tr>
                <td>
                    <div class="d-flex">
                                <img width="45" height="45" class="img-profile rounded-circle mr-3" alt=""
                            src={props.src} />
                               <div class="d-flex flex-column">
                                <p id="memberName" class="my-0 text-dark">{props.user.fn} {props.user.ln}</p>
                                <p id="memberEmail" class="my-0 small">{props.user.email}</p>
                               </div>
                            </div>
                            </td>
                <td>{props.user.occupation}</td>
            </tr>
  )
}
