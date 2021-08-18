// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

function makeUrl(name) {
  return 'https://pokeapi.co/api/v2/' + name;
}

function searchParamsToObject(str) {
  const params = new URLSearchParams(str);
  return Object.fromEntries(params);
}

// searchParamsToObject('name=oliver&email=hello@oliverjam.es');

function isLeapYear(year) {
  if (typeof year !== 'number') return `Please enter a number`;
  if (year < 0) return `Year cannot be a negative number`;
  if (year % 100 === 0) return `Year ${year} is not a leap year!`;
  if (year % 400 === 0 || year % 4 === 0) {
    return true;
  }
  return false;
}
