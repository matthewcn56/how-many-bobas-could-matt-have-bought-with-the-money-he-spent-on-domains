//TODO: multiple boba costs, custom orders, logic for discounts

const BOBA_COST = 5; // assuming $5 bobas

/**
 * @param {array of domain objects} domains
 * @returns total cost of all domains
 */
function calcDomainsCost(domains) {
  return domains.reduce((total, domain) => total + domain.cost, 0);
}

/**
 * @param {float} cost
 * @returns number of bobas that could be purchased
 */
function costToBobas(cost) {
  return cost / BOBA_COST;
}

/**
 * @param {array of domain objects} domains
 * @returns header for total cost
 */
function generateTotalCost(domains) {
  const totalCostText = document.createElement('h2');
  totalCostText.id = 'total-cost-header';
  const totalCost = calcDomainsCost(domains);
  totalCostText.innerHTML =
    "Enough is enough. Matt spends<br/><span id='cost'>$" +
    totalCost +
    "</span><br/>on domains every year. That's enough to buy<br/><span id='total-num-bobas'>" +
    costToBobas(totalCost).toFixed(1) +
    '</span><br/>bobas.';
  return totalCostText;
}

/**
 * @param {domain object} domain
 * @returns div for a card
 */
function generateCardFromObject(domain) {
  const cardContainer = document.createElement('div');
  const cardSiteName = document.createElement('h3');
  const cardBobaCount = document.createElement('h2');

  cardContainer.className = 'card-container';

  const numBobas = costToBobas(domain.cost).toFixed(1);

  cardSiteName.innerHTML =
    'Instead of buying <a href="' + domain.site + '">' + domain.site + '</a>,';
  cardSiteName.className = 'card-site-name';
  cardBobaCount.innerHTML =
    'Matt could have bought ' +
    numBobas +
    (numBobas === 1 ? ' boba' : ' bobas') +
    ' this year.';
  cardBobaCount.className = 'card-boba-count';

  cardContainer.appendChild(cardSiteName);
  cardContainer.appendChild(cardBobaCount);

  return cardContainer;
}

/**
 * @param {array of domain objects} domains
 * @returns div with all cards
 */
function generateCards(domains) {
  const cards = document.createElement('div');
  cards.id = 'cards';

  for (let i = 0; i < domains.length; i++) {
    cards.appendChild(generateCardFromObject(domains[i]));
  }

  return cards;
}

/**
 * called when the body is loaded
 * @param {array of domain objects} domains
 */
function onloadPopulate(domains) {
  document.getElementById('total-cost').appendChild(generateTotalCost(domains));
  document.getElementById('cost-breakdown').appendChild(generateCards(domains));
}
