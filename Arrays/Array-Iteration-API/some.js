/**
 * Some: Retorna TRUE se um ou mais
 * elementos retornaram TRUE na 
 * função passada por parâmetro
**/

const frameworks = [
  {
    name: 'Angular.js',
  },
  {
    name: 'Ember.js',
  },
  {
    name: 'Vue.js',
  }
];

const result = frameworks.some(function(framework) {
  return framework.name.includes('js');
  // return framework.name.includes('Vue'); => true
});
/**
 * true
**/