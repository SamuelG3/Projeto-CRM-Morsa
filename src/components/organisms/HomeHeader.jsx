import React from "react"

export default function HomeHeader() {
  return (
    <div class="container">
      <header class="d-flex flex-wrap justify-content-center align-items-center py-3 border-bottom">
        <a href="/" class="d-flex mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <h1 class="mx-auto">Morsa</h1>
        </a>
  
        <ul class="nav nav-pills align-items-center">
          <li class="nav-item mx-auto" ><a href="produto/produto.html" class="nav-link">Features</a></li>
          <li class="nav-item mx-auto"><a href="pricing/pricing.html" class="nav-link">Preços</a></li>
          <li class="nav-item mx-auto"><a href="FAQ/FAQ.html" class="nav-link">FAQs</a></li>
          <li class="nav-item mx-auto"><a href="about/about.html" class="nav-link">Sobre</a></li>
          <li class="nav-item mx-auto"><a href="./login/index.html" class="nav-link special-btn" aria-current="page">Já tem uma conta?</a></li>
        </ul>
      </header>
    </div>
  )
}
