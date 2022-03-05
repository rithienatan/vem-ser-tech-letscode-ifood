//---------- funções ------------
/**
 * Funções são blocos de construção fundamentais em JavaScript. Uma função é um procedimento de JavaScript - 
 * um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve 
 * defini-la em algum lugar no escopo do qual você quiser chamá-la.
 * 
 */
function multiplica(x, y) 
{ return x * y; }

const arrowMultiplica = (x, y) => { return x * y; } 

/*
const obj = {
    fn: () =>  {
        funcaoRecursiva()
    }
}
*/
// console.log(multiplica(2, 2))
// console.log(arrowMultiplica(3, 2))

const squares = function (n, y) {
    let externa = this;
    let interna = {};
    //function square(n) { return this; }

    //console.log(this === square())
};

// console.log(squares(2))

const funcaoRecursiva = (numero) => {
    //console.log(numero)
    //if(numero > 0) { 
        //funcaoRecursiva(numero) 
    //}
}

const listaAlunos = [
    {
        nome: 'Esdras',
        notas: [4, 8, 10, 9],
        media: 0
    },
    {
        nome: 'João',
        notas: [3, 10, 8, 5],
        media: 0
    },
    {
        nome: 'Sr Joaquim',
        notas: [7, 3, 2, 5],
        media: 0
    }
];

/*
const nossoForEach = (listaAlunos, funcaoNossoForEach) => {
    for(let i = 0; i < listaAlunos.length; i++) {
        funcaoNossoForEach(listaAlunos[i], i)
    }
}
nossoForEach(listaAlunos, () => {
    console.log(i)
})
*/


//---------- object ------------
/**
 * A linguagem JavaScript é projetada com base em um simples paradigma orientado a objeto. Um objeto é uma coleção de propriedades, 
 * e uma propriedade é uma associação entre um nome (ou chave) e um valor. Um valor de propriedade pode ser uma função, 
 * que é então considerada um método do objeto. Além dos objetos que são pré-definidos no browser, você pode definir seus próprios objetos.
 * 
 * new Object() vs {}
 */
const json = require('./aulaIV.json');

const cachorro = {
    nome: 'rex',
    apelido: 'tiu',
    status: 'acordado',
    latir: function () { return 'auauau'; },
    //mudarStatus: function () { cachorro.status = 'dormindo'; },
};

const alunos = ['Esdras', 'João'];
const notas = [5, 10];

// const findAluno = listaAlunos.find((aluno) => {
//     return aluno.nome === 'Esdras'
// })

// console.log(findAluno)

// const array = []

// array.forEach(() => {})

function calcularMediaDeTodosAlunos(lista) {
    for(let aluno of lista) {
        let media = 0;

        for(let nota of aluno.notas) 
        { media += nota; }

        aluno.media = media / aluno.notas.length;
    }
}

function buscaMelhorMedia(lista) {
    let maiorMedia = 0;
    let alunoComMelhorMedia = {};
    /*
    lista.forEach((aluno) => {
        if(aluno.media > maiorMedia) {
            maiorMedia = aluno.media
            alunoComMelhorMedia = aluno
        }
    })
    */
    return alunoComMelhorMedia;
}

function buscaMenorMedia(lista) {
    let menorMedia = 10;
    let alunoComMenorMedia = {};
    /*
    lista.forEach((aluno) => {
        if(aluno.media < menorMedia) {
            menorMedia = aluno.media
            alunoComMenorMedia = aluno
        }
    })
    */
    return alunoComMenorMedia;
}

/*
console.log(listaAlunos)
calcularMediaDeTodosAlunos(listaAlunos)

console.log('===================================')
console.log(listaAlunos)
console.log('===================================')
const melhorAluno = buscaMelhorMedia(listaAlunos)
console.log(melhorAluno)
console.log((buscaMenorMedia(listaAlunos)))

const jsonParse = JSON.stringify(json)
console.log(jsonParse)
console.log(JSON.parse(jsonParse))
*/


//---------- this ------------
/**
 * Em JavaScript, usa-se this de forma semelhante ao uso de pronomes em linguagens naturais, como o inglês ou francês. 
 * Escreve-se: “João está correndo rápido porque ele está tentando pegar o trem”. Note o uso do pronome “ele”. 
 * Poderia se ter escrito: “João está correndo rápido porque João está tentando pegar o trem”. 
 * Não se reutiliza “João” dessa maneira. De uma maneira graciosamente semelhante, em JavaScript se usa a palavra-chave this como um atalho, um referente; 
 * ou seja, o sujeito no contexto ou o sujeito do código em execução.
 * 
 * Funções em JavaScript têm propriedades, assim como os objetos têm propriedades. E quando uma função é executada, 
 * ela obtém a propriedade this — uma variável com o valor do objeto que invoca a função na qual this é usado.
 */
const obj = {
    nome: 'Esdras',
    falar: this
}

function fn() { return this; }

const globalObj = this;

//console.log(globalObj === fn())

const arrow = () => this;

//console.log(globalObj === arrow())


//---------- exports ------------
module.exports = {
    multiplica,
    arrowMultiplica,
    squares,
    funcaoRecursiva,
    listaAlunos,

    json,
    cachorro,
    alunos,
    notas,
    calcularMediaDeTodosAlunos,
    buscaMelhorMedia,
    buscaMenorMedia,

    obj,
    fn,
    globalObj,
    arrow
};