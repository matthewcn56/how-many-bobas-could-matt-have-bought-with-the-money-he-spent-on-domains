//TODO: multiple boba costs, custom orders
//TODO: account for website discounts
//TODO: use user location to calculate local tax and display local currency

const BOBA_COST = 5; // assuming $5 bobas
const urlQueryString = window.location.search;
const urlParams = new URLSearchParams(urlQueryString);

//using t4's menu: https://t4togo.com/Menu1

const sizes = {
  SMALL: 'small',
  LARGE: 'large',
};

const SMALL_PRICE = 0;
const UPCHARGE_PRICE = 0.5;

const flavors = {
  WINTERMELON: {
    NAME: 'wintermelon milk tea',
    PRICE: 4.55,
  },
  OKINAWA: {
    NAME: 'okinawa milk tea',
    PRICE: 4.8,
  },
  HOKKAIDO: {
    NAME: 'royal hokkaido milk tea',
    PRICE: 4.5,
  },
};

const toppings = {
  BOBA: {
    NAME: 'pearls',
    PRICE: 0.5,
  },
  CHEESE_FOAM: {
    NAME: 'cheese foam',
    PRICE: 1.5,
  },
};

let flavorParam = urlParams.get('flavor');
flavorParam = flavors[flavorParam] ? flavorParam : 'WINTERMELON';
const flavor = flavors[flavorParam].NAME;
const flavorPrice = flavors[flavorParam].PRICE;

const sizeParam = urlParams.get('size');
const size = sizes[sizeParam] ? sizes[sizeParam] : 'small';
let sizePrice = SMALL_PRICE;
sizePrice += size === 'large' ? UPCHARGE_PRICE : 0;

const topping1Param = urlParams.get('topping1');
const topping1 = toppings[topping1Param]
  ? toppings[topping1Param].NAME
  : 'none';
const topping1Price = topping1 !== 'none' ? toppings[topping1Param].PRICE : 0;

const topping2Param = urlParams.get('topping2');
const topping2 = toppings[topping2Param]
  ? toppings[topping2Param].NAME
  : 'none';
const topping2Price = topping2 !== 'none' ? toppings[topping2Param].PRICE : 0;

let country;
let state;

/**
 * @param {array of domain objects} domains
 * @returns total cost of all domains
 */
function calcDomainsCost(domains) {
  return domains.reduce((total, domain) => total + domain.cost, 0);
}

/**
 * @param {float} cost
 * @param {float} flavorPrice
 * @param {float} sizePrice
 * @param {float} topping1Price
 * @param {float} topping2Price
 * @returns number of bobas that could be purchased
 */
function costToBobas(
  cost,
  flavorPrice,
  sizePrice,
  topping1Price,
  topping2Price
) {
  const bobaPrice = flavorPrice + sizePrice + topping1Price + topping2Price;
  return cost / bobaPrice;
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
    'Enough is enough. Matt spends<br/><span id="cost">$' +
    totalCost +
    '</span><br/>on domains every year. ' +
    'That\'s enough to buy<br/><span id="total-num-bobas">' +
    costToBobas(
      calcDomainsCost(domains),
      flavorPrice,
      sizePrice,
      topping1Price,
      topping2Price
    ).toFixed(1) +
    '</span><br/>';
  totalCostText.innerHTML += size + ' ' + flavor + ' bobas';
  if (topping1 != 'none') totalCostText.innerHTML += ' with ' + topping1;
  if (topping2 != 'none') totalCostText.innerHTML += ' and ' + topping2;
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

  const numBobas = costToBobas(
    domain.cost,
    flavorPrice,
    sizePrice,
    topping1Price,
    topping2Price
  ).toFixed(1);

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
 * callback function for getCurrentPosition
 * @param {object containing position data} position
 */
function handlePosition(position) {
  const latlng = {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  };
  const geocoder = new google.maps.Geocoder();

  geocoder
    .geocode({ location: latlng })
    .then((response) => {
      if (response.results[0]) {
        // response contains something!
        // now we want to iterate through the results (each is an object with a long_name, short_name, and types array)
        // we will try to find an object which has a country type
        // if the short_name of this country type is CA (Canada), ES (Spain), or US (United States),
        // we will then also look for an object which has an administrative_area_level_1 type
        // we will then set the country and state globals accordingly
        let result;
        for (const result of response.results) {
          if (result.types.includes('country')) {
            country = result.short_name;
            console.log(country);
            break;
          }
        }
        if (country === 'CA' || country === 'ES' || country === 'US') {
          for (const result of response.results) {
            if (result.types.includes('administrative_area_level_1')) {
              state = result.short_name;
              console.log(state);
              break;
            }
          }
        } else if (typeof country === 'undefined') {
          console.log(
            'No country found in response. Using California, United States.'
          );
        }
      } else {
      }
    })
    .catch((e) => {
      console.log(e);
    });
}

/**
 * called when the body is loaded
 * @param {array of domain objects} domains
 */
function onloadPopulate(domains) {
  if ('geolocation' in navigator) {
    // geolocation is available
    navigator.geolocation.getCurrentPosition(handlePosition);
  }
  document.getElementById('total-cost').appendChild(generateTotalCost(domains));
  document.getElementById('cost-breakdown').appendChild(generateCards(domains));
}
