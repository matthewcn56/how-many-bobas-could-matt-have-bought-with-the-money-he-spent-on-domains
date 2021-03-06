class BobaMaker extends HTMLElement {
  constructor(options, lookupTables) {
    super();

    this.innerHTML = `
    <div id="custom-boba">
      <div id="boba-section">
        <div id="boba-header">Customize Your Boba Order</div>
        <form>
          <label>size:
            <select name="size" id="size-select">${this.createOptions(
              options.size,
              lookupTables.size
            )}</select>
          </label>

          <label>flavor:
          <select name="flavor" id="flavor-select">${this.createOptions(
            options.flavor,
            lookupTables.flavor,
            'flavor'
          )}</select>
          </label>

          <label>topping1:
            <select name="topping1" id="topping1-select">${this.createOptions(
              options.toppings,
              lookupTables.toppings
            )}</select>
          </label>

          <label>topping2:
            <select name="topping2" id="topping2-select">${this.createOptions(
              options.toppings,
              lookupTables.toppings
            )}</select>
          </label>

          <input type="submit" value="Order">
        </form>
      </div>
    </div>
    `;
  }

  createOptions(options, lookupTable, type) {
    const optionNodes = options.map((option) => {
      // Look up the name which will be used as display text
      let displayText = lookupTable[option].NAME;

      // Don't repeat words "milk tea" for flavor
      if (type === 'flavor') {
        displayText = displayText.split(' milk')[0];
      }

      return `<option value="${option}">${displayText}</option>`;
    });
    return optionNodes.join('\n');
  }
}
window.customElements.define('boba-maker', BobaMaker);

// TO-DO: Refactor this code to use BobaOption instead, so we are not
// returning a raw string each time
//
/*
class BobaOption extends HTMLElement {
  constructor(option, lookupTable, type) {
    super()

    // Look up the name which will be used as display text
    let displayText = lookupTable[option].NAME
    
    // Don't repeat words "milk tea" for flavor
    if (type === 'flavor') {
      displayText = displayText.split(' milk')[0]
    }

    // Create a new option with name
    this.innerHTML = 
    `<option value="${option}">${displayText}</option>`
  }
}
window.customElements.define('boba-option', BobaOption)
*/
