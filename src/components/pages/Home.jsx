import React from "react"

import HomeHeader from "../organisms/HomeHeader";
import HomeFooter from "../organisms/HomeFooter";
import Carousel from "../organisms/Carousel";

export default function Home() {
  return (
    
<div>
       <HomeHeader />

          <div className="container col-xxl-8 px-4">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6">
                <img src="components/imagens/Design stats-amico.svg" className="d-block mx-lg-auto img-fluid img-float" alt="Ilustração isométrica de uma moça utilizando um tablet para ver uma Dashboard" width="700" height="500" loading="lazy" />
              </div>
              <div className="col-lg-6">
                <h2 className="display-5 fw-bold lh-1 mb-3">Automatize processos em minutos.</h2>
                <p className="lead">Uma plataforma que mantém todo o seu workflow em um só lugar, da
                  maneira mais descomplicada para oferecer uma experiência de sucesso
                  para os seus clientes e a sua empresa.</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <button type="button" className="btn button-type-1 button-type-1-style btn-lg">Solicite uma demonstração</button>
                  <button type="button" className="btn button-type-1 btn-lg me-md-2">Comece Já</button>
                </div>
              </div>
            </div>
          </div>
    
    

    

    
    <div className="container">
      <h2 className="text-center">Como usar o Morsa em 3 passos</h2>
    
        <div className="row featurette py-5">
          <div className="col-md-7">
            <h3 className="featurette-heading fw-normal lh-1">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h3>
            <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
          </div>
          <div className="col-md-5">
            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
    
          </div>
        </div>
    
        
        <div className="row featurette py-5">
          
          <div className="col-md-5">
            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
          </div>
          <div className="col-md-7">
            <h3 className="featurette-heading fw-normal lh-1">And lastly, this one. <span className="text-muted">Checkmate.</span></h3>
            <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
          </div>
      
        </div>
    
        <div className="row featurette py-5">
          <div className="col-md-7">
            <h3 className="featurette-heading fw-normal lh-1">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h3>
            <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
          </div>
          <div className="col-md-5">
            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
    
          </div>
        </div>
      </div>
   
    <div className="bg-gray py-1">
    <div className="container my-5">
    <div>
    <h3 className="text-center py-3">O que nossos clientes falam sobre nós:</h3>
    
    <Carousel />
    </div>
    </div>
    </div>
    
    <div className="px-4 py-5">
    <div className="container">
    <div className="d-flex justify-content-between py-5 align-items-center">
      <div>
      <p className="text-uppercase">Comece hoje mesmo</p>
      <h3>Transforme seu trabalho com Morsa</h3>
      </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn button-type-1 button-type-1-style">Fale com um especialista</button>
          <button type="button" className="btn button-type-1 me-md-2 py-2">Teste grátis</button>
        </div>
    </div>
    </div>
    </div>
   
    
    <HomeFooter />
    
    </div>
  )
}
