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
              lookupTables.size,
              'size'
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
              lookupTables.toppings,
              'toppings'
            )}</select>
          </label>

          <label>topping2:
            <select name="topping2" id="topping2-select">${this.createOptions(
              options.toppings,
              lookupTables.toppings,
              'toppings'
            )}</select>
          </label>

          <input type="submit" value="Order">
        </form>
      </div>
    </div>
    `;
  }

  // Creates all the options for a particular label
  createOptions(options, lookupTable, type) {
    const optionNodes = options.map((option) => {
      // Look up the name which will be used as display text
      let displayText = lookupTable[option].NAME;

      // Don't repeat words "milk tea" for flavor
      if (type === 'flavor') {
        displayText = displayText.split(' milk')[0];
      }

      // Return a single option component for each
      return this.createSingleOption(option, displayText)
    });

    // If it's a topping, add a none option to it
    if (type === 'toppings') {
      optionNodes.push(this.createSingleOption('none', 'none'))
    }

    return optionNodes.join('\n');
  }

  // Creates a single option element with given text
  createSingleOption(option, displayText) {
    return `<option value="${option}">${displayText}</option>`;
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
