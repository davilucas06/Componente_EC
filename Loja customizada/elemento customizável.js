class Componente extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const div = document.createElement("div");
      div.className = "card mb-3 mt-3";
      div.innerHTML = `
      <div class="row g-0">
              <div class="col-md-4">
                <img src="${this.getAttribute('img-src')}" class="img-fluid rounded-start" alt="${this.getAttribute('img-alt')}">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${this.getAttribute('title')}</h5>
                  <p class="card-text">${this.getAttribute('text')}</p>
                  <p class="card-text"><small class="text-body-secondary">${this.getAttribute('updated')}</small></p>
                  <p class="card-text price">R$ ${this.getAttribute('price')}</p>
                  <button class="btn btn-primary" onclick="addToCart('${this.getAttribute('title')}', ${this.getAttribute('price')})">
                      Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            </div>
      `;
      this.appendChild(div);
    }
  }
  
  customElements.define("componente-novo", Componente);  