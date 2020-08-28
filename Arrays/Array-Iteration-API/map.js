/**
 * Map: Retorna um novo Array
 * com base no retorno da função
 * passada por parâmetro
**/

const frameworks = [
  {
    name: 'Angular.js',
    contributors: 2101
  },
  {
    name: 'Ember.js',
    contributors: 850
  },
  {
    name: 'Vue.js',
    contributors: 246
  }
];

const result = frameworks.map(framework => framework.name)
/**
 * [ 'Angular.js', 'Ember.js', 'Vue.js' ]
**/