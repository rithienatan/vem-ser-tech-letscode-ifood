/**
 * Faça um algoritmo para ler 20 números e armazenar em um vetor. Após a leitura total dos 20 números, 
 * o algoritmo deve escrever esses 20 números lidos na ordem inversa. 
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
 * Valida o input dos usuários
 * 
 * @param {number} valor
 * 
 * @returns {boolean} True or False for indicate, info validation
 */
function ValidUserInput(valor)
{
    let answer = true;

    if(valor === null || isNaN(valor) === true)
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
    

    for(let i = array.length - 1; i >= 0; i--)
    { console.log(array[i]); }
}//end StaticMain()

StaticMain();


/**---------- Module Exports ----------**/
module.exports = {
    ValidUserInput
};