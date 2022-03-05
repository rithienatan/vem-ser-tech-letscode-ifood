/**
 * Escreva um algoritmo que permita a leitura dos nomes de 10 pessoas e armaze os nomes lidos em um vetor. 
 * Após isto, o algoritmo deve permitir a leitura de mais 1 nome qualquer de pessoa e depois escrever a mensagem ACHEI, 
 * se o nome estiver entre os 10 nomes lidos anteriormente (guardados no vetor), ou NÃO ACHEI caso contrário.  
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */
/**
 * @author Rithie Natan
 * @date 04-03-2022
 * @version 0.1.0
 */
/**--------- Imports ---------**/
const prompt = require('prompt-sync')({sigint: true});


/**--------- Global Variables ---------**/
let nome = null;
let array = [];


/**--------- Functions ----------**/
/**
 * Valida o input dos usuários
 * 
 * @param {string} nome
 * 
 * @returns {boolean} True or False for indicate, info validation
 */
function ValidUserInput(nome)
{
    let answer = true;

    if(nome === null)
    { answer = false; }

    return(answer);
}//end ValidUserInput()


/**--------- Main Program ----------**/
/**
 * Run Program
 */
function StaticMain()
{
    console.log("Digite 10 nomes!");
    let infoInputUser = false;
    let i = 0;

    do
    {
        nome = prompt("Nome: ");

        if(ValidUserInput(nome) === false)
        { console.log("Entrada inválida, digite novamente!\n"); }
        else
        { infoInputUser = true; i++; array.push(nome); }
    } while(infoInputUser === false || i < 10);


    console.log("Digite um nome para buscar!");
    infoInputUser = false;

    do
    {
        nome = prompt("Nome: ");

        if(ValidUserInput(nome) === false)
        { console.log("Entrada inválida, digite novamente!\n"); }
        else
        { infoInputUser = true; }
    } while(infoInputUser === false);

    if(array.find(element => element === nome) === undefined)
    { console.log("NÃO ACHEI"); }
    else
    { console.log("ACHEI"); }
}//end StaticMain()

StaticMain();


/**---------- Module Exports ----------**/
module.exports = {
    ValidUserInput
};