/**
 * Every: Retorna TRUE se TODOS
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

const result = frameworks.every(function(framework) {
  return framework.name.includes('js');
  // return framework.name.includes('Vue'); => false
});
/**
 * true
**/