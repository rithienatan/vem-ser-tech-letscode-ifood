/**
 * Escreva um algoritimo que leia um vetor Q de 20 posições (aceitar somente números positivos). 
 * Escrever a seguir o valor do maior elemento de Q e a respectiva posição que ele ocupa no vetor. 
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
let valor = null;
let array = [];


/**--------- Functions ----------**/
/**
 * Acha o maior elemento no array
 * 
 * 
 * @returns {object} Retorna o maior elemento e sua posição
 */
function MaiorElemento()
{
    let answer = { 
        "elemento": array[0],
        "index": 0
    };

    for(let i = 0; i < array.length; i++)
    {
        if(answer.elemento < array[i])
        { answer.elemento = array[i]; answer.index = i; }
    }//end for

    return(answer);
}//end MaiorElemento()

/**
 * Valida o input dos usuários
 * 
 * @param {number} valor
 * 
 * @returns {boolean} True or False for indicate, info validation
 */
function ValidUserInput(valor)
{
    let answer = true;

    if(valor === null || isNaN(valor) === true || valor < 0)
    { answer = false; }

    return(answer);
}//end ValidUserInput()


/**--------- Main Program ----------**/
/**
 * Run Program
 */
function StaticMain()
{
    console.log("Digite 20 valores!");
    let infoInputUser = false;
    let i = 0;

    do
    {
        valor = Number(prompt("Valor: "));

        if(ValidUserInput(valor) === false)
        { console.log("Entrada inválida, digite novamente!\n"); }
        else
        { infoInputUser = true; i++; array.push(valor); }
    } while(infoInputUser === false || i < 20);

    const resultado = MaiorElemento();
    console.log(`Elemento: ${resultado.elemento} e Posição: ${resultado.index}`);
}//end StaticMain()

StaticMain();


/**---------- Module Exports ----------**/
module.exports = {
    ValidUserInput
};