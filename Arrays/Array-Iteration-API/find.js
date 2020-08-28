/**
 * Find: Retorna o primeiro elemento que 
 * retornou TRUE na função passada por 
 * parâmetro
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

const contemMaria = pessoas.find(function (pessoa) {
  return pessoa.nome === 'Maria';
});
/**
 * { nome: 'Maria', idade: 32 }
**/

