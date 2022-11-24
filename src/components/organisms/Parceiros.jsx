import React from "react"
import Carousel from "react-bootstrap/Carousel";
import User1 from "../../images/quem-utiliza/User1.jpg"
import User2 from "../../images/quem-utiliza/User2.jpg"
import User3 from "../../images/quem-utiliza/User3.jpg"
import User4 from "../../images/quem-utiliza/User4.jpg"

export default function Parceiros() {
  return (

    <Carousel>
    <Carousel.Item className="carouselItem">
      <img
        className="d-block w-100 carouselImg"
        src={User1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Lucas Maio, Redator UX na Zig Consultorias.</h3>
        <p>A plataforma permite nos manter sempre conectados e engajados com o nosso público alvo, e ter uma vantagem de preferência para futuras possibilidades no mercado.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item className="carouselItem">
      <img
        className="d-block w-100 carouselImg"
        src={User2}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Saoko Papi, Gerente de vendas na Motomami.</h3>
        <p>Com a Morsa, conseguimos monitorar os nossos negócios da nossa sede na Espanha, e expandir em novos espaços no mercado latino de motos.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item className="carouselItem">
      <img
        className="d-block w-100 carouselImg carouselImg"
        src={User3}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Theodor Maresia, Analista de Marketing na UFOs.</h3>
        <p>
        Nós customizamos a nossa plataforma de acordo com as nossas necessidades. A melhor parte é a simplicidade da automação.
        </p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item className="carouselItem">
      <img
        className="d-block w-100 carouselImg"
        src={User4}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Dayane Tagariana, Gestora de Vendas na Target & Ryen Co.</h3>
        <p>
        Com um funil de vendas bem definido, expandimos a presença da nossa marca. Em apenas seis anos, fomos de uma pequena start up de duas pessoas para uma multinacional que domina o mercado em todos os continentes.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

  )
}
