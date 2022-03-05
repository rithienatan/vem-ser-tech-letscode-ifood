/**
 * Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles. 
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
let valor1 = null;
let valor2 = null;


/**--------- Functions ----------**/
/**
 * Verifica qual valor é maior
 * 
 * @param {number} Valor1 - Valor 1
 * @param {number} Valor2 - Valor 2
 * 
 * @returns {string} Indica qual é o maior valor
 */
const VerificaValor = (valor1, valor2) => valor1 > valor2 ? `Valor 1 é maior - ${valor1}` : `Valor 2 é maior - ${valor2}`;

/**
 * Valida o input dos usuários
 * 
 * @param {number} Valor1 - Valor 1
 * @param {number} Valor2 - Valor 2
 * 
 * @returns {boolean} True or False for indicate, info validation
 */
function ValidUserInput(valor1, valor2)
{
    let answer = true;

    if(valor1 === null || isNaN(valor1) === true || 
        valor2 === null || isNaN(valor2) === true || valor1 === valor2)
    { answer = false; }

    return(answer);
}//end ValidUserInput()


/**--------- Main Program ----------**/
/**
 * Run Program
 */
function StaticMain()
{
    console.log("Entre com dois valores!");
    let infoInputUser = false;

    do
    {
        valor1 = Number(prompt("Valor 1: "));
        valor2 = Number(prompt("Valor 2: "));

        if(ValidUserInput(valor1, valor2) === false)
        { console.log("Entrada inválida ou iguais, digite novamente!\n"); }
        else
        { infoInputUser = true; }
    } while(infoInputUser === false);

    console.log(VerificaValor(valor1, valor2));
}//end StaticMain()

//StaticMain();


/**---------- Module Exports ----------**/
module.exports = {
    ValidUserInput
};