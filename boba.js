//TODO: Accept multiple boba costs
const BOBA_COST = 5; // assuming $5 bobas
const siteData = require("./sites.json");

/**
 * @param {siteObject[]} sitesList
 * @returns number of whole bobas that could be purchased
 * TODO: Using Matt's default boba orders, make it different for each of his orders
 * I.E. 4 Oolong Teas, 3 Potted Milk Teas, etc.
 */
function calcDomainsCost(sitesList) {
  return sitesList.reduce((total, domain) => total + domain.cost, 0);
}

/**
 * @param {float} cost
 * @returns number of whole bobas that could be purchased
 * TODO: Using Matt's default boba orders, make it different for each of his orders
 * I.E. 4 Oolong Teas, 3 Potted Milk Teas, etc.
 */
function costToBobas(cost) {
  return Math.floor(cost / BOBA_COST);
}

/**
 * @param {object, has site URL and cost of site} o
 * @returns HTML for a card
 */
function generateCardFromObject(o) {
  const cardContainer = document.createElement("div");
  const cardSiteName = document.createElement("h1");
  const cardBobaCount = document.createElement("h2");

  cardContainer.className = "card-container";

  cardSiteName.innerHTML = '<a href="' + o.site + '">' + o.site + "</a>";
  cardSiteName.className = "card-site-name";
  cardBobaCount.innerHTML = costToBobas(o.cost);
  cardBobaCount.className = "card-boba-count";

  cardContainer.appendChild(cardSiteName);
  cardContainer.appendChild(cardBobaCount);

  return cardContainer;
}

/**
 * @param {array of objects} data
 * @returns div with all cards
 */
function generateCards(data) {
  const cards = document.createElement("div");
  cards.className = "cards";

  for (let i = 0; i < data.length; i++) {
    cards.appendChild(generateCardFromObject(data[i]));
  }

  return cards;
}

console.log(calcDomainsCost(siteData));
