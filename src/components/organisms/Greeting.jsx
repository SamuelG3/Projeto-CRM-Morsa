import React from 'react'

export default function Greeting(props) {
  return (
    <div className="d-flex align-items-center">
                        <img widht="60" height="60" className="rounded-circle mr-3"
                                    src={props.src} />
    <h5 className="text-gray-800 text-wrap" style="width: 25rem"><span className="font-weight-bold">{props.user.fn} {props.user.ln}</span>, olha só esses novos processos &#128588;</h5>
    </div>
  )
}
