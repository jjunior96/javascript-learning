/**
 * Filter: Retorna um novo Array contendo somente
 * os elementos que retornaram TRUE na função
 * passada por parâmetro
**/

const pessoas = [
  {
    nome: 'José',
    idade: 29
  },
  {
    nome: 'Maria',
    idade: 32
  },
  {
    nome: 'João',
    idade: 15
  }
];

const maiorDeIdade = pessoas.filter(function (pessoa) {
  return pessoa.idade >= 18;
});
/**
 * [ { nome: 'José', idade: 29 }, { nome: 'Maria', idade: 32 } ]
**/