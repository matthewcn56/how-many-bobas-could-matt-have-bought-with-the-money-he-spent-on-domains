//TODO: multiple boba costs, custom orders
//TODO: account for website discounts
//TODO: use user location to
//      calculate local tax [done]
//      display local currency [in progress, need currency symbols]
//      use local boba prices [not started]

const FREE_CURRENCY_CONVERTER_API_KEY = '6e3d2e76eb2a6847a5de';
const BOBA_COST = 5; // assuming $5 bobas

// l10n globals
let country = 'US';
let state = 'CA';
let currency = 'USD';
let taxRate = salesTaxRates[country]['states'][state].rate;
let conversionRate = 1;

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
  const bobaPrice =
    (flavorPrice + sizePrice + topping1Price + topping2Price) * (1.0 + taxRate);
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
    'Enough is enough. Matt spends<br/><span id="cost">' +
    totalCost * conversionRate +
    ' ' +
    currency +
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
 * sets conversion rate global using free currency converter api
 */
async function getConversionRate() {
  currency = countryToCurrency[country].currency;
  const query = 'USD_' + currency;
  const url =
    'https://free.currconv.com/api/v7/convert?q=' +
    query +
    '&compact=ultra&apiKey=' +
    FREE_CURRENCY_CONVERTER_API_KEY;
  const response = await fetch(url);
  const result = await response.json();
  conversionRate = result[query];
  console.log('Conversion rate is ' + conversionRate + '.');
}

/**
 * callback function for getCurrentPosition
 * @param {object containing position data} position
 */
function handleL10n(position) {
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
        // now we want to iterate through the results
        // we will try to find an object which has a country type
        // if the short_name (found in address_components, which has its own types array)
        // of this country type is CA (Canada), ES (Spain), or US (United States),
        // we will then also look for an object which has an administrative_area_level_1 type
        // and find the short_name for the state
        // we will then set the country, state, and tax rate globals accordingly
        for (const result of response.results) {
          if (result.types.includes('country')) {
            country = result.address_components[0].short_name;
            console.log(country);
            break;
          }
        }
        if (country === 'CA' || country === 'ES' || country === 'US') {
          for (const result of response.results) {
            if (result.types.includes('administrative_area_level_1')) {
              state = result.address_components[0].short_name;
              console.log(state);
              taxRate = salesTaxRates[country]['states'][state].rate;
              break;
            }
          }
          if (typeof state === 'undefined') {
            taxRate = salesTaxRates[country].rate;
          }
          // set conversion rate based on location and display everything
          getConversionRate().then(setDisplay());
        } else if (typeof country === 'undefined') {
          console.log(
            'No country found in response. Using California, United States.'
          );
          // display everything (with default values)
          setDisplay();
        } else {
          taxRate = salesTaxRates[country].rate;
          // set conversion rate based on location and display everything
          getConversionRate().then(setDisplay());
        }
        console.log('Tax rate is ' + taxRate + '.');
      } else {
        console.log(
          'No data returned in response. Using California, United States.'
        );
        // display everything (with default values)
        setDisplay();
      }
    })
    .catch((e) => {
      console.log(e);
      // display everything (with default values)
      setDisplay();
    });
}

/**
 * called when the body is loaded
 */
function onloadPopulate() {
  if ('geolocation' in navigator) {
    // geolocation is available
    navigator.geolocation.getCurrentPosition(handleL10n, (e) => {
      if (e.code == e.PERMISSION_DENIED)
        console.log('User has blocked location services.');
      setDisplay();
    });
  } else {
    setDisplay();
  }
}

function setDisplay() {
  document
    .getElementById('total-cost')
    .appendChild(generateTotalCost(domainsList));
  document
    .getElementById('cost-breakdown')
    .appendChild(generateCards(domainsList));
}
