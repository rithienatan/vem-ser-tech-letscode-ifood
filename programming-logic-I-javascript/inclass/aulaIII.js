//---------- arrays ------------
/**
 * Vetores e Matrizes são estruturas de dados muito simples que podem nos ajudar muito 
 * quando temos muitas variáveis do mesmo tipo em um algoritmo. 
 * Imagine o seguinte problema: 
 * Você precisa criar um algoritmo que lê o nome e as 4 notas de 50 alunos, 
 * calcular a média de cada aluno e informar quais foram aprovados e quais foram reprovados.
 * 
 * Nós precisariamos das seguintes variáveis:
 * 50 variáveis para armazenar os nomes dos alunos
 * 200 variáveis para armazenar as 4 notas de cada aluno
 * 50 variáveis para armazenar a média de cada aluno
 * 
 * Totalizando 300 variáveis
 * 
 * Vetor (array uni-dimensional) é uma variável que armazena várias variáveis do mesmo tipo. 
 * No problema apresentado anteriormente, nós podemos utilizar um vetor de 50 posições para 
 * armazenar os nomes dos 50 alunos.
 */

let alunos = [];
let mediaDosAlunos = [];
  
/*
while(numeroDeAlunos > 0) {
    alunos.push(prompt('Digite o nome do Aluno'))
    let auxMedia = 0

    for(let i = 0; i < 4; i++) {
        auxMedia += parseInt(prompt('Digite a nota ', i+1))
    }

    const media = auxMedia / 4
    console.log(media)
    mediaDosAlunos.push(media)
    numeroDeAlunos--
}
 
for(let index = 0; index < alunos.length; index++) 
{ alert(mediaDosAlunos[index]); }
*/
 

//---------- do-while ------------
let numeroDeAlunos = 0;
const alunosII = [];

do {
    //alunos.push(prompt('Digite o nome de um aluno:'))
    numeroDeAlunos--;
} while(numeroDeAlunos > 0)


//---------- if e else ------------
/**
 * A condicional if  é uma estrutura condicional que executa a afirmação, 
 * dentro do bloco, se determinada condição for verdadeira. 
 * Se for falsa, executa as afirmações dentro de else.
 */
//&&
// true && true => true
// true && false => false
// false && true => false
// false && false => false
//||
// true || true => true
// true || false => true
// false || true => true
// false || false => false
//^
// true ^ true => false
// true ^ false => true 
// false ^ true => true 
// false ^ false => false 

const notaAluno = 10;

/*
if(notaAluno >= 9) {
    console.log('Nota A')
} else if(notaAluno >= 7) {
    console.log('Nota B')
}  else if(notaAluno >= 5) {
    console.log('Nota C')
}


if(notaAluno >= 9) {
    console.log('Nota A')
} 
if(notaAluno >= 7) {
    console.log('Nota B')
}  
if(notaAluno >= 5) {
    console.log('Nota C')
}
*/


//---------- loops ------------
/**
 * Há inúmeras maneiras de fazer um loop em arrays e objetos em JavaScript, 
 * e as diferenças são uma causa comum de confusões. Alguns guias de estilo vão 
 * tão longe a ponto de proibir certas construções em loop. Neste artigo, 
 * iremos ver as diferenças entre iterar em uma array com as 4 construções primárias de loop:
 * 
 *      for(let i = 0; i < array.length; i++)
 * 
 *      array.forEach((valor, index) => {...any implementation...})
 * 
 *      for(let index in array)
 * 
 *      for(let value of array)
 */
const array = ['Esdras', 'João', 'Milan Moreira', 'Julia', 'Pedro', 'Giu'];

for(let index in array) {
    //console.log(index)
}

for(let value of array) {
    //console.log(value)
}

for(let index = 0; index < array.length; index++) {
    //console.log(array[index])
}


//---------- switch case ------------
/**
 * Switch/case é uma estrutura de condição que define o código a ser executado 
 * com base em uma comparação de valores
 */
const nota = 8;

/*
switch (nota) {
    case 10:
    case 9:
        console.log('Nota A')
        break;
    case 8:
    case 7:
        console.log('Nota B')
        break;
    case 6:
    case 5:
        console.log('Nota C')
        break;
    default:
        console.log('Não identifiquei a nota')
        break;
}


switch (nota) {
    case 'M':
        //any
        break
    case 'F':
        //any
        break;
    case 'O':
        //any
        break;
    default:
        console.log('...Any ')
        break;
}
*/


//---------- while ------------
/**
 * A declaração while cria um laço que executa uma rotina especifica enquanto a 
 * condição de teste for avaliada como verdadeira. A condição é avaliada antes da execução da rotina.
 */
//let numeroDeAlunos = prompt('Digite o número de alunos')
const alunosIII = [];

/*
let index = 0 
while (numeroDeAlunos > 0) {
    alunos.push(prompt('Digite o nome de um aluno:'))
    numeroDeAlunos--
}
*/
 
//alert(alunos)

//---------- exports ------------
module.exports = {
    alunos,
    mediaDosAlunos,

    alunosII,

    notaAluno,

    array,

    nota,

    alunosIII
};