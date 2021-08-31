class TotalCost extends HTMLElement {
  constructor(convertedCost, numBobas, size, flavor, topping1, topping2) {
    super();
    this.innerHTML = `<div id="total-cost">
  <h2 id="total-cost-header">
    Enough is Enough. Matt spends
    <br>
    <span id="cost">${convertedCost}</span>
    <br>
    on domains every year. That's enough to buy
    <br>
    <span id="total-num-bobas">${numBobas}</span>
    <br>
    ${size} ${flavor} bobas ${this.formatToppings(topping1, topping2)} 
  </h2>
</div>`;
  }

  /**
   * Helper function to format text for boba toppings
   */
  formatToppings(topping1, topping2) {
    // Create array of toppings from those that are not none
    const toppings = [topping1, topping2].filter((tp) => tp != 'none');

    // Return differently based on toppings
    switch (toppings.length) {
      // Scenario 1: has 2 toppings
      case 2: {
        // Scenario 1a: both are same
        if (toppings[0] === toppings[1]) return `with extra ${toppings[0]}`;

        // Scenario 1b: toppings are different
        return `with ${toppings[0]} and ${toppings[1]}`;
      }

      // Scenario 2: has one topping
      case 1:
        return `with ${toppings[0]}`;

      // Scenario 3: no toppings
      default:
        return '';
    }
  }
}

window.customElements.define('total-cost', TotalCost);
