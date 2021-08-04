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
 * @returns number of whole bobas that could be purchased
 */
function costToBobas(cost) {
  return Math.floor(cost / BOBA_COST);
}

/**
 * @param {array of domain objects} domains
 * @returns header for total cost
 */
function generateTotalCost(domains) {
  const totalCost = document.createElement("h2");
  totalCost.id = "total-cost-header";
  totalCost.innerHTML =
    "Enough is enough. Matt spends<br/><span id='cost'>$" +
    calcDomainsCost(domains) +
    "</span><br/>on domains every year.";
  return totalCost;
}

/**
 * @param {domain object} domain
 * @returns div for a card
 */
function generateCardFromObject(domain) {
  const cardContainer = document.createElement("div");
  const cardSiteName = document.createElement("h3");
  const cardBobaCount = document.createElement("h2");

  cardContainer.className = "card-container";

  const numBobas = costToBobas(domain.cost);

  cardSiteName.innerHTML =
    'Instead of buying <a href="' + domain.site + '">' + domain.site + "</a>,";
  cardSiteName.className = "card-site-name";
  cardBobaCount.innerHTML =
    "Matt could have bought " +
    numBobas +
    (numBobas === 1 ? " boba" : " bobas") +
    " this year.";
  cardBobaCount.className = "card-boba-count";

  cardContainer.appendChild(cardSiteName);
  cardContainer.appendChild(cardBobaCount);

  return cardContainer;
}

/**
 * @param {array of domain objects} domains
 * @returns div with all cards
 */
function generateCards(domains) {
  const cards = document.createElement("div");
  cards.id = "cards";

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
  document.getElementById("total-cost").appendChild(generateTotalCost(domains));
  document.getElementById("cost-breakdown").appendChild(generateCards(domains));
}
