import React from 'react'

export default function Card() {
  return (
    <div className="itemCard">
    <div id="favoritarCard">
        <i className="bi bi-star"></i>
    </div>
<div className="icon-circle bg-warning">
<i className="bi bi-umbrella"></i>
</div>
<p id="cardTitle">Vacinas Umbrella</p>
<p id="numeroDeCardsNoPipe">310 cards</p>
<div id="opcoesDoCard">
<i className="bi bi-three-dots-vertical"></i>
</div>
</div>
  )
}
