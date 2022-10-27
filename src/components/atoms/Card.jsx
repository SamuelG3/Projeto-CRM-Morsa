import React from "react"

export default function Card(props) {
  return (
    <div className="itemCard">
    <div id="favoritarCard">
        <i className="bi bi-star"></i>
    </div>
<div className="icon-circle bg-warning">
<svg src={props.pipe.icon}></svg>
</div>
<p id="cardTitle">{props.pipe.title}</p>
<p id="numeroDeCardsNoPipe">{props.pipe.cards.length}</p>
<div id="opcoesDoCard">
<i className="bi bi-three-dots-vertical"></i>
</div>
</div>
  )
}
