const domainsList = [
  {
    site: "http://www.howmanyclubsiscrystalin.com/",
    cost: 12,
  },
  {
    site: "http://howmanyfavoursdoesmattowecrystal.com/",
    cost: 9,
  },
];

function calcDomainsCost() {
  return domainsList.reduce((total, domain) => total + domain.cost, 0);
}

//console.log(calcDomainsCost());
