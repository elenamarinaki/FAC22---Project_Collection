// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

function makeUrl(name) {
  return 'https://pokeapi.co/api/v2/' + name;
}

function searchParamsToObject(str) {
  const params = new URLSearchParams(str);
  return Object.fromEntries(params);
}

// searchParamsToObject('name=oliver&email=hello@oliverjam.es');
