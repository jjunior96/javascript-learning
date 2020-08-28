/**
 * Reduce: Retorna um valor com
 * base no retorno da função 
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

/**
 * Recebe 2 parâmetro:
 * 1 - uma função (acumulador, elemento que será iterado)
 * 2 - valor de inicialização do acumuldor
**/

const result = frameworks.reduce(function(total, framework) {
  return total + framework.contributors;
}, 0);
console.log(result);
/**
 * [ 'Angular.js', 'Ember.js', 'Vue.js' ]
**/