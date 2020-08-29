/**
 * Executa a função passada por parâmetro
 * para cada elemento.
**/

const alunos = ['José', 'Maria', 'João'];
alunos.forEach(function (aluno) {
  console.log(aluno);
});

/** 
 * Ou, com Array Function
**/

alunos.forEach( (aluno) => console.log(aluno) );

/** 
 * Obs.: No momento que fazemos "alunos.forEach",
 * os elementos já são processados.
**/

alunos.forEach((aluno) => {
  alunos.push('Marcia');
  // console.log(aluno);
});
/**
 * José
 * Maria
 * João
 * 
 * Marcia não foi exibida!
**/
