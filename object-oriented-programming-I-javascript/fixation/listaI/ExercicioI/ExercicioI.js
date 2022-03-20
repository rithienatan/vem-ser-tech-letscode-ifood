/**
 * @author Rithie
 * @date 03-18-2022
 * @version 0.1.0
 */
//---------- Imports ----------
const Pessoa = require('./Pessoa.js');
const prompt = require('prompt-sync')({sigint: true});


//---------- Functions ---------
/**
 * Valid user inputs
 * 
 * @param {number} dia 
 * @param {number} mes 
 * @param {number} ano 
 * @returns {boolean} True for valid, false for not valid
 */
function ValidUserInfo(dia, mes, ano)
{
    let answer = true;

    if(isNaN(dia) === true || dia < 0 || dia > 31 ||
        isNaN(mes) === true || mes < 0 || mes > 12 ||
        isNaN(ano) === true || ano < 0)
    { answer = false; }

    return(answer);
}//end ValidUserInfo()


//---------- Runing Program ----------
function StaticMain()
{
    //informações do usuário
    let nome = prompt('Digite o seu nome: ');

    let dia = null;
    let mes = null;
    let ano = null;

    do
    {
        dia = Number(prompt('Digite o dia do seu nascimento: '));
        mes = Number(prompt('Digite o mes do seu nascimento: '));
        ano = Number(prompt('Digite o ano do seu nascimento: '));

        if(ValidUserInfo(dia, mes, ano) === false)
        { console.log('Input errado, digite novamente!'); }
    } while(ValidUserInfo(dia, mes, ano) === false);


    //criar o objeto pessoa
    let pessoa = new Pessoa(nome, `${ano}-${mes}-${dia}`);
    console.log(pessoa);

    //printa pessoa
    pessoa.DetalharPessoa();
}//end StaticMain()

StaticMain();