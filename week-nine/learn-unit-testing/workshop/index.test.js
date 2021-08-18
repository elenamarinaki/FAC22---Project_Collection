test('makeURL should return the correct pokemon ULR', () => {
  equal(makeUrl('pikachu'), 'https://pokeapi.co/api/v2/pikachu');
  equal(makeUrl('bulbasaur'), 'https://pokeapi.co/api/v2/bulbasaur');
  equal(makeUrl('eevwee'), 'https://pokeapi.co/api/v2/eevee');
});

test('makeUrl should return an error', () => {
  notEqual(makeUrl('eevee'), 'https://pokeapi.co/api/v2/eevee');
  notEqual(makeUrl('eeveeeee'), 'https://pokeapi.co/api/v2/eevee');
});

//this doesn't work like this... we have to check each property separately
test('form-encoded string should return an object', () => {
  equal(searchParamsToObject('name=oliver&email=hello@oliverjam.es'), {
    name: 'oliver',
    email: 'hello@oliverjam.es',
  });
});
