/**
 * JavaScript
 * É uma linguagem de programação INTERPRETADA
 * Scripts de alto nível
 * Tipagem fraca
 */

//----------- declaração de variáveis ----------
var variavelI = 2;
let variavelII = 2;
const variavelIII = 2;


//----------- operadores aritiméticos ----------
let soma = 1 + 3;
let sub = 3 - 1;
let mult = 2 * 3;
let div = 10 / 2;
let mod = 10 % 3;


//----------- Comparadores ----------
let maiorTrue = 2 > 1;
let maiorFalse = 2 > 2;

let maiorIgualTrue = 2 >= 2;
let menorIgualTrue = 2 <= 2;

let menorFalse = 2 < 2;
let menorTrue = 1 < 2;

let diferenteTrue = 1 != 2;
let diferenteFalse = 2 != 2;

let igualTrue = 2 == '2';
let igualWithTypeFalse = 2 === '2';


//----------- Condicionais ----------
/*
if(1 === 1) console.log('True');

if(1 > 1)
    console.log('True 2');

if(1 === 1)
{ console.log('True 3'); }

if(1 === 1 && 2 === 2)
{ console.log('True 4'); }

if(1 === 1 || 2 === 2)
{ console.log('True 5'); }

if(!false)
{ console.log('Você entrou aqui!') }

if(1 === 2)
{ console.log('é igual'); }
else if(1 === 3)
{ console.log('é igual'); }
else
{ console.log('n é igual a nada'); }
*/


//---------- prints ----------
/*
console.log('Variável I: ', variavelI);
console.log(typeof variavelI);

console.log('Variável II: ', variavelII);
console.log(typeof variavelII);

console.log('Variável III: ', variavelIII);
console.log(typeof variavelIII);

console.log('Soma: ', soma);
console.log('Subtração: ', sub);
console.log('Multiplicação: ', mult);
console.log('Divisão: ', div);
console.log('Módulo: ', mod);
*/


//---------- exports ----------
module.exports = {
    variavelI,
    variavelII,
    variavelIII,

    soma,
    sub,
    mult,
    div,
    mod,

    maiorTrue,
    maiorFalse,
    maiorIgualTrue,
    menorIgualTrue,
    menorFalse,
    menorTrue,
    diferenteTrue,
    diferenteFalse,
    igualTrue,
    igualWithTypeFalse
};