class BobaCard extends HTMLElement {
  constructor(domain, numBobas) {
    super()

    this.innerHTML = 
`<div class="card-container">
  <h3 class="card-site-name">
    Instead of buying <a href="${domain.site}">${domain.site}</a>,
  </h3>
  <h2 class="card-boba-count">
    Matt could have bought ${numBobas} ${numBobas === 1 ? 'boba' : 'bobas'}
    this year.
  </h2>
</div>`
  }
}

window.customElements.define('boba-card', BobaCard)