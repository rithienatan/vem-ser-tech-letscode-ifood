/**
 * Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo). 
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


/**--------- Functions ----------**/
/**
 * Verifica se o valor é mpositivo ou negativo
 * 
 * @param {number} valor
 * 
 * @returns {string} Diz se o valor é positivo ou não
 */
const VerificarValor = (valor) => valor >= 0 ? "Valor positivo" : "Valor negativo";

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
    console.log("Entre com um valor!");
    let infoInputUser = false;

    do
    {
        valor = Number(prompt("Valor: "));

        if(ValidUserInput(valor) === false)
        { console.log("Entrada inválida, digite novamente!\n"); }
        else
        { infoInputUser = true; }
    } while(infoInputUser === false);

    console.log(VerificarValor(valor));
}//end StaticMain()

StaticMain();


/**---------- Module Exports ----------**/
module.exports = {
    ValidUserInput
};