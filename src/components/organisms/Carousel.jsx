import React from 'react'

export default function Carousel() {
  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4" className=""></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="carousel-img" src={""}>
          </div>
          <div className="container carousel-container">
            <div className="carousel-caption">
              <p>A plataforma permite nos manter sempre conectados e engajados com o nosso público alvo, e ter uma vantagem de preferência para futuras possibilidades no mercado.</p>
              <h4>Lucas Maio, Redator UX na Zig Consultorias.</h4>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-img" src={""}>
          </div>
          <div className="container carousel-container">
            <div className="carousel-caption">
              <p>Com a Morsa, conseguimos monitorar os nossos negócios da nossa sede na Espanha, e expandir em novos espaços no mercado latino de motos.</p>
              <h4>Saoko Papi, Gerente de vendas na Motomami.</h4>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-img" src={""}>
          </div>
          <div className="container carousel-container">
            <div className="carousel-caption">
              <p>Nós customizamos a nossa plataforma de acordo com as nossas necessidades. A melhor parte é a simplicidade da automação.</p>
              <h4>Theodor Maresia, Analista de Marketing na UFOs.</h4>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-img" src={""}>
          </div>
          <div className="container carousel-container">
            <div className="carousel-caption">
              <p>Com um funil de vendas bem definido, expandimos a presença da nossa marca. Em apenas seis anos, fomos de uma pequena start up de duas pessoas para uma multinacional que domina o mercado em todos os continentes.</p>
              <h4>Dayane Tagariana, Gestora de Vendas na Target & Ryen Co.</h4>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
